import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

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
          navigate("/product");
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
    <div className="login-page">
      <h2>Login Admin</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Auth;
