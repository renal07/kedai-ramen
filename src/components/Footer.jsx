import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4" id="Kontak">
      <div className="container">
        <div className="row align-items-start">
          {/* Kiri: Informasi Kontak */}
          <div className="col-md-6 mb-4">
            <div className="mb-3">
              <h5>Hubungi Kami</h5>
              <p className="mb-1">Alamat: Desa Bantaragung, Kecamatan Sindangwangi, Kabupaten Majalengka</p>
              <p className="mb-0">Email: itadakimasukedairamen@mail.com</p>
            </div>
            <div>
              <h5>CS Kedai</h5>
              <p className="mb-0">Telepon: (+62)82-5987-654-321</p>
            </div>
          </div>

          {/* Kanan: Peta Lokasi */}
          <div className="col-md-6">
            <h5>Lokasi Kami</h5>
            <div className="ratio ratio-4x3">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d108.37732752322962!3d-6.812475938782443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1721642838117!5m2!1sid!2sid"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer bawah */}
        <div className="text-center pt-4 border-top mt-4">
          <p className="mb-0">&copy; 2024 iTadaKimaSu!</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
