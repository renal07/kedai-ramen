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

    // Jika form kosong, langsung ke Home
    if (form.username.trim() === '' && form.password.trim() === '') {
      alert("Login tanpa data, masuk sebagai guest.");
      navigate("/home");
      return;
    }

    // Jika ada input, proses login normal
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

  const handleAdminClick = () => {
    alert("Menuju halaman admin tanpa login.");
    navigate("/admin");
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
          style={{ display: 'block', width: '100%', padding: '10px', margin: '10px 0' }}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          style={{ display: 'block', width: '100%', padding: '10px', margin: '10px 0' }}
        />

        {/* Tombol Login dan Admin disusun horizontal */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <button
            type="submit"
            style={{ flex: 1, padding: '10px 20px', background: '#b22222', color: 'white', border: 'none', cursor: 'pointer' }}
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleAdminClick}
            style={{ flex: 1, padding: '10px 20px', background: '#333', color: 'white', border: 'none', cursor: 'pointer' }}
          >
            Admin
          </button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
