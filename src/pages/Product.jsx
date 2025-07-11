import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Product.css';

function Product() {
  const [produkList, setProdukList] = useState([]);
  const [selectedProduk, setSelectedProduk] = useState(null);

  useEffect(() => {
    fetch("http://localhost/kedai-api/produk/read.php")
      .then((res) => res.json())
      .then((data) => {
        setProdukList(data);
        setSelectedProduk(data[0]); // tampilkan produk pertama
      });
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <main className="product-main">
        <h2>Menu Ramen Kami</h2>

        {selectedProduk && (
          <div className="featured-image">
            <img
              src={`http://localhost/kedai-api/images/${selectedProduk.gambar}`}
              alt={selectedProduk.nama}
            />
            <h3>{selectedProduk.nama}</h3>
            <p>Rp {parseInt(selectedProduk.harga).toLocaleString()}</p>
          </div>
        )}

        <ul className="product-list">
          {produkList.map((produk) => (
            <li
              key={produk.id}
              onClick={() => setSelectedProduk(produk)}
              className="product-item"
            >
              {produk.nama}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Product;
