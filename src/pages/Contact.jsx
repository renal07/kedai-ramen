import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css'; // file CSS untuk halaman Contact

function Contact() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="contact-main">
        <h2>Kontak Kami</h2>
        <p>Jika Anda memiliki pertanyaan atau ingin melakukan pemesanan, hubungi kami melalui informasi berikut:</p>
        <div className="contact-info">
          <p>Email: kedairamenramenya@gmail.com</p>
          <p>Telepon: (+62)82-5987-654-321</p>
          <p>Alamat: Desa Bantaragung, Kecamatan Sindangwangi, Kabupaten Majalengka</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
