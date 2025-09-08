import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import './App.css';

function App() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // GANTI DENGAN FOTO ASLI PACAR ANDA
  const heroPhoto = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop&crop=face";
  
  const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face', alt: 'Momen 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400&h=400&fit=crop&crop=face', alt: 'Momen 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face', alt: 'Momen 3' },
    { id: 4, src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face', alt: 'Momen 4' },
    { id: 5, src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face', alt: 'Momen 5' },
    { id: 6, src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face', alt: 'Momen 6' }
  ];

  // EDIT KUTIPAN DARI TEMAN-TEMAN
  const quotes = [
    { text: "Dia memiliki jiwa yang indah dan hati yang hangat.", author: "Sarah, Sahabat Terbaik" },
    { text: "Tawanya bisa menerangi hari yang paling gelap.", author: "Maya, Teman Kuliah" },
    { text: "Dia adalah orang yang paling peduli yang pernah aku kenal.", author: "Rina, Adik Kelas" }
  ];

  // GANTI DENGAN NAMA PACAR ANDA
  const pacarName = "Sayang";

  const scrollToSection = (sectionNumber) => {
    document.getElementById(`section-${sectionNumber}`)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="app">
      
      {/* Progress Bar */}
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ 
            width: `${Math.min(100, (Object.keys(visibleSections).length / 5) * 100)}%` 
          }}
        />
      </div>

      {/* Navigation Dots */}
      <div className="nav-dots">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => scrollToSection(num)}
            className={`nav-dot ${visibleSections[`section-${num}`] ? 'active' : ''}`}
            title={`Bagian ${num}`}
          />
        ))}
      </div>

      {/* Section 1: Hero */}
      <section 
        id="section-1" 
        data-section
        className={`hero-section ${visibleSections['section-1'] ? 'visible' : ''}`}
      >
        <div className="hero-content">
          <div className="hero-image-container">
            <img src={heroPhoto} alt="Untuk Tersayang" className="hero-image" />
            <Heart className="hero-heart" />
          </div>
          <h1 className="hero-title">Untukmu...</h1>
          <p className="hero-subtitle">Di hari istimewamu ini</p>
        </div>
      </section>

      {/* Section 2: Message */}
      <section 
        id="section-2"
        data-section
        className={`message-section ${visibleSections['section-2'] ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="divider"></div>
          
          <div className="message-content">
            {/* EDIT PESAN ANDA DI SINI */}
            <p className="message-text large">
              Setiap hari bersamamu adalah hadiah yang tak ternilai. 
              Tawamu menerangi sudut-sudut gelap dunia, 
              dan kehadiranmu membuat hidup ini terasa lebih bermakna.
            </p>
            
            <p className="message-text medium">
              Di ulang tahunmu yang istimewa ini, 
              aku ingin mengingatkanmu betapa berharga dan dicintainya dirimu. 
              Tidak hanya olehku, tapi oleh semua orang yang beruntung mengenalmu.
            </p>

            <p className="message-text">
              Ini adalah ruang kecil yang kubuat untuk merayakan dirimu - 
              keindahanmu, kebaikanmu, dan semua momen indah yang telah kita lalui bersama.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Gallery */}
      <section 
        id="section-3"
        data-section
        className={`gallery-section ${visibleSections['section-3'] ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Momen-Momen Bisu</h2>
            <div className="divider"></div>
          </div>

          <div className="photo-grid">
            {photos.map((photo, index) => (
              <div 
                key={photo.id}
                className="photo-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={photo.src} alt={photo.alt} />
                <div className="photo-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Quotes */}
      <section 
        id="section-4"
        data-section
        className={`quotes-section ${visibleSections['section-4'] ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Gema Suara Sahabat</h2>
            <div className="divider"></div>
            <p className="section-subtitle">Kata mereka tentangmu</p>
          </div>

          <div className="quotes-grid">
            {quotes.map((quote, index) => (
              <div key={index} className="quote-card">
                <Sparkles className="quote-icon" />
                <blockquote className="quote-text">"{quote.text}"</blockquote>
                <cite className="quote-author">— {quote.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Final */}
      <section 
        id="section-5"
        data-section
        className={`final-section ${visibleSections['section-5'] ? 'visible' : ''}`}
      >
        <div className="final-content">
          <Heart className="final-heart" />
          <h2 className="final-title">Ini Bukan Akhir</h2>
          
          <p className="final-text">
            Ini adalah awal dari hari yang telah lama kutunggu untuk merayakanmu. 
            Ada kejutan lain yang menunggumu di dunia nyata.
          </p>

          <div className="divider long"></div>
          
          <p className="birthday-text">Selamat Ulang Tahun, {pacarName} ❤️</p>
          <p className="closing-text">Kini saatnya untuk bertemu di dunia nyata...</p>
        </div>
      </section>

    </div>
  );
}

export default App;