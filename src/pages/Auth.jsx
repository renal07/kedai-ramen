import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost/kedai-api/login/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          alert("Login berhasil!");

          if (data.user.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/home");
          }
        } else {
          alert(data.message || "Login gagal");
        }
      })
      .catch(err => {
        console.error("Login error:", err);
        alert("Terjadi kesalahan saat login");
      });
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '80px auto',
      textAlign: 'center',
      border: '1px solid #ccc',
      padding: '30px',
      borderRadius: '10px',
      background: '#fafafa'
    }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          required
          style={{ display: 'block', width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          style={{ display: 'block', width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <button
          type="submit"
          style={{ padding: '10px 20px', background: '#b22222', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Auth;
