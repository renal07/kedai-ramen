import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Product.css';

import Ramen1 from '../assets/Ramen 1.png';
import Ramen2 from '../assets/Ramen 2.png';
import Ramen3 from '../assets/Ramen 3.png';

const imageMap = {
  "Ramen1.jpg": Ramen1,
  "Ramen2.jpg": Ramen2,
  "Ramen3.jpg": Ramen3,
};

function Product() {
  const [produkList, setProdukList] = useState([]);
  const [selectedProduk, setSelectedProduk] = useState(null);
  const [newProduk, setNewProduk] = useState({
    nama: '',
    deskripsi: '',
    harga: '',
    gambar: '',
  });

  useEffect(() => {
    fetch("http://localhost/kedai-api/produk/read.php")
      .then((res) => res.json())
      .then((data) => {
        setProdukList(data);
        setSelectedProduk(data[0]);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduk({ ...newProduk, [name]: value });
  };

  const handleTambahProduk = () => {
    fetch("http://localhost/kedai-api/produk/create.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduk),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message.includes("berhasil")) {
          fetch("http://localhost/kedai-api/produk/read.php")
            .then((res) => res.json())
            .then((updatedData) => {
              setProdukList(updatedData);
              setSelectedProduk(updatedData[updatedData.length - 1]);
              setNewProduk({ nama: '', deskripsi: '', harga: '', gambar: '' });
            });
          alert(data.message);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.error("Gagal fetch:", err);
        alert("Terjadi kesalahan saat menghubungi server.");
      });
  };

  const handleHapusProduk = (id) => {
    if (!window.confirm("Yakin ingin menghapus produk ini?")) return;

    fetch("http://localhost/kedai-api/produk/delete.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        fetch("http://localhost/kedai-api/produk/read.php")
          .then((res) => res.json())
          .then((updatedData) => {
            setProdukList(updatedData);
            setSelectedProduk(updatedData[0] || null);
          });
      })
      .catch((err) => {
        console.error("Gagal delete:", err);
        alert("Terjadi kesalahan saat menghapus produk.");
      });
  };

  return (
    <div>
      <Header />
      <Navbar />
      <main className="product-main">
        <h2>Menu Ramen Kami</h2>

        {/* Form Tambah Produk */}
        <div className="form-tambah">
          <h3>Tambah Produk</h3>
          <input
            type="text"
            name="nama"
            value={newProduk.nama}
            onChange={handleChange}
            placeholder="Nama produk"
          />
          <input
            type="text"
            name="deskripsi"
            value={newProduk.deskripsi}
            onChange={handleChange}
            placeholder="Deskripsi"
          />
          <input
            type="number"
            name="harga"
            value={newProduk.harga}
            onChange={handleChange}
            placeholder="Harga"
          />
          <select name="gambar" value={newProduk.gambar} onChange={handleChange}>
            <option value="">Pilih Gambar</option>
            <option value="Ramen1.jpg">Ramen1</option>
            <option value="Ramen2.jpg">Ramen2</option>
            <option value="Ramen3.jpg">Ramen3</option>
          </select>
          <button onClick={handleTambahProduk}>Tambah</button>
        </div>

        {/* Produk Terpilih */}
        {selectedProduk && (
          <div className="featured-image">
            <img
              src={imageMap[selectedProduk.gambar]}
              alt={selectedProduk.nama}
            />
            <h3>{selectedProduk.nama}</h3>
            <p><em>{selectedProduk.deskripsi}</em></p>
            <p>Rp {parseInt(selectedProduk.harga).toLocaleString()}</p>
          </div>
        )}

        {/* Daftar Produk */}
        <ul className="product-list">
          {produkList.map((produk) => (
            <li key={produk.id} className="product-item">
              <span
                onClick={() => setSelectedProduk(produk)}
                style={{ cursor: 'pointer' }}
              >
                {produk.nama}
              </span>
              <button
                onClick={() => handleHapusProduk(produk.id)}
                style={{
                  marginLeft: '10px',
                  backgroundColor: '#d62828',
                  color: 'white',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Product;
