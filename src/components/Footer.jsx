import React from 'react';
import './Footer.css'; // Pastikan CSS berada di dalam folder yang sama

function Footer() {
  return (
    <footer className="footer" id="Kontak">
      <div className="footer-content">
        <div className="left-content">
          <div className="contact-info">
            <h3>Hubungi Kami</h3>
            <p>Alamat: Desa Bantaragung, Kecamatan Sindangwangi, Kabupaten Majalengka</p>
            <p>Email: itadakimasukedairamen@mail.com</p>
          </div>
          <div className="cs-info">
            <h3>CS Kedai</h3>
            <p>Telepon: (+62)82-5987-654-321</p>
          </div>
        </div>
        <div className="map">
          <h3>Lokasi Kami</h3>
          <iframe
            title="Google Maps Location"
             src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d108.37732752322962!3d-6.812475938782443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1721642838117!5m2!1sid!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 iTadaKimaSu!</p>
      </div>
    </footer>
  );
}

export default Footer;
