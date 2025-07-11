import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';

function Editor() {
  const navigate = useNavigate();
  const [akunList, setAkunList] = useState([]);
  const [form, setForm] = useState({ username: '', password: '', role: '' });
  const [editId, setEditId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

useEffect(() => {
  fetch('http://localhost/kedai-api/akun/read.php')
    .then(res => res.json())
    .then(data => setAkunList(data))
    .catch(err => console.error(err));
}, []);


  const fetchData = () => {
    fetch('http://localhost/kedai-api/akun/read.php')
      .then(res => res.json())
      .then(data => setAkunList(data));
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const url = isEdit
      ? 'http://localhost/kedai-api/akun/update.php'
      : 'http://localhost/kedai-api/akun/create.php';

    const payload = isEdit ? { id: editId, ...form } : form;

    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        fetchData();
        setForm({ username: '', password: '', role: '' });
        setEditId(null);
        setIsEdit(false);
      });
  };

  const handleEdit = akun => {
    setForm({ username: akun.username, password: '', role: akun.role });
    setEditId(akun.id);
    setIsEdit(true);
  };

  const handleDelete = id => {
    if (!window.confirm("Yakin ingin menghapus akun ini?")) return;
    fetch('http://localhost/kedai-api/akun/delete.php', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        fetchData();
      });
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', gap: '12px', margin: '16px 0', justifyContent: 'center' }}>
        <Link to="/admin">
          <button className="admin-btn">Kembali</button>
        </Link>
        <button className="admin-btn logout" onClick={handleLogout}>Logout</button>
      </div>

      <main className="beli-main">
        <h2>Halaman Editor</h2>

        {/* Form Tambah/Edit Akun */}
        <div style={{ maxWidth: '400px', margin: '0 auto 20px' }}>
          <h4>{isEdit ? "Edit Akun" : "Tambah Akun"}</h4>
          <input name="username" value={form.username} onChange={handleChange} placeholder="Username" style={{ width: '100%', marginBottom: '8px' }} />
          <input name="password" type="password" value={form.password} onChange={handleChange} placeholder={isEdit ? "(Password baru atau kosong)" : "Password"} style={{ width: '100%', marginBottom: '8px' }} />
          <select name="role" value={form.role} onChange={handleChange} style={{ width: '100%', marginBottom: '8px' }}>
            <option value="">Pilih Role</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
          </select>
          <button onClick={handleSubmit}>{isEdit ? "Simpan Perubahan" : "Tambah Akun"}</button>
        </div>

        {/* Tabel Akun */}
        <table style={{ margin: '0 auto', borderCollapse: 'collapse', minWidth: '360px' }}>
          <thead>
            <tr style={{ background: '#eee' }}>
              <th>No</th>
              <th>Username</th>
              <th>Role</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {akunList.map((akun, idx) => (
              <tr key={akun.id}>
                <td>{idx + 1}</td>
                <td>{akun.username}</td>
                <td style={{ textTransform: 'capitalize' }}>{akun.role}</td>
                <td>
                  <button onClick={() => handleEdit(akun)}>Edit</button>
                  <button onClick={() => handleDelete(akun.id)} style={{ marginLeft: '8px', color: 'red' }}>Hapus</button>
                </td>
              </tr>
            ))}
            {akunList.length === 0 && (
              <tr><td colSpan={4} style={{ textAlign: 'center' }}>Belum ada akun</td></tr>
            )}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
}

export default Editor;
