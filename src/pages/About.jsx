import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

function About() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="about-main">
        <h2>iTadaKimaSu!</h2>
        <p>
          Kami menyajikan masakan Jepang otentik dengan sentuhan kreatif, dari ramen hangat yang menghibur hati,
sushi segar yang memanjakan lidah, hingga bento lezat yang dibuat penuh perhatian.

Lebih dari sekadar tempat makan, iTadaKimaSu! adalah pengalaman budaya. Setiap sajian kami adalah
bentuk cinta terhadap rasa, tradisi, dan kehangatan kebersamaan.

Dengan bahan berkualitas, pelayanan ramah, dan suasana yang homey, kami ingin setiap tamu pulang
dengan hati kenyang dan senyum tulus.</p>
      </main>
      <Footer />
    </div>
  );
}

export default About;
