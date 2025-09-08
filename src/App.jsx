import React, { useState } from 'react';
import { Heart, Feather, X, Camera, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroScene } from './HeroScene.jsx';
import DomeGallery from './DomeGallery.jsx';
import Particles from './Particles.jsx'; // <-- IMPORT PARTICLES
import './App.css';

// --- AREA UNTUK ANDA EDIT ---
const NAMA_PACAR = "Alya";
const NAMA_ANDA = "Budi";
const TANGGAL_ULTAH = "14 September 2025";
const LOKASI_KADO = "laci mejamu";
const DATA_KUTIPAN = [
  { text: "Dia memiliki jiwa yang indah dan hati yang paling hangat.", author: "Sarah, Sahabat Terbaik" },
  { text: "Tawanya bisa menerangi hari yang paling gelap sekalipun.", author: "Maya, Teman Kuliah" }
];
// --- AKHIR AREA EDIT ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const HeroSection = () => (
  <section id="section-1" className="hero-section">
    <HeroScene />
    <motion.div className="hero-content-overlay" variants={containerVariants} initial="hidden" animate="visible">
      <motion.h1 className="hero-title" variants={itemVariants}>Untuk {NAMA_PACAR}</motion.h1>
      <motion.p className="hero-subtitle" variants={itemVariants}>{TANGGAL_ULTAH}</motion.p>
    </motion.div>
  </section>
);

// --- MODIFIKASI MESSAGE SECTION ---
const MessageSection = () => (
  <motion.section 
    id="section-2" 
    className="message-section" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.5 }} 
    variants={containerVariants}
  >
    {/* Partikel sebagai background */}
    <Particles
      particleColors={['#EAE6DA', '#B85C38']}
      particleCount={150}
      particleSpread={8}
      speed={0.05}
      particleBaseSize={80}
      disableRotation={true}
      alphaParticles={true}
    />
    <div className="container content-overlay">
      <motion.div variants={itemVariants}><Feather className="section-icon" /></motion.div>
      <motion.p className="message-text large" variants={itemVariants}>
        Satu tahun lagi berlalu, dan kamu bersinar lebih terang dari sebelumnya.
      </motion.p>
      <motion.p className="message-text" variants={itemVariants}>
        Di hari istimewamu ini, aku ingin membuat sebuah jeda. Sebuah ruang tenang untuk merayakan semua hal tentangmu—tawamu, kebaikanmu, dan caramu membuat duniaku terasa lebih utuh.
      </motion.p>
    </div>
  </motion.section>
);


const GalleryTriggerSection = ({ onEnterGallery }) => (
  <motion.section id="section-3" className="gallery-trigger-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={containerVariants}>
    <div className="container">
      <motion.div className="section-header" variants={itemVariants}>
        <h2 className="section-title">Galeri Momen Kita</h2>
        <p className="section-subtitle">Beberapa kenangan favorit yang tertangkap kamera, disajikan dalam sebuah ruang spesial.</p>
      </motion.div>
      <motion.button className="enter-gallery-btn" onClick={onEnterGallery} variants={itemVariants}>
        <Camera className="btn-icon"/>
        Masuk ke Galeri 3D
      </motion.button>
    </div>
  </motion.section>
);

const QuotesSection = () => (
    <motion.section id="section-4" className="quotes-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={containerVariants}>
    <div className="container">
       <motion.div className="section-header" variants={itemVariants}><h2 className="section-title">Kata Mereka Tentangmu</h2></motion.div>
      <div className="quotes-container">
        {DATA_KUTIPAN.map((quote, index) => (
          <motion.div key={index} className="quote-card" variants={itemVariants}>
            <blockquote className="quote-text">"{quote.text}"</blockquote>
            <cite className="quote-author">— {quote.author}</cite>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const FinalSection = () => (
  <motion.section id="section-5" className="final-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={containerVariants}>
    <div className="final-content">
      <motion.div variants={itemVariants}><Heart className="final-heart" /></motion.div>
      <motion.h2 className="final-title" variants={itemVariants}>Kejutan Sebenarnya Menanti</motion.h2>
      <motion.p className="final-text" variants={itemVariants}>
        Perjalanan digital ini mungkin berakhir di sini, tapi perayaan kita baru saja dimulai. Coba lihat ke {LOKASI_KADO}...
      </motion.p>
      <motion.p className="birthday-text" variants={itemVariants}>Selamat Ulang Tahun, {NAMA_PACAR}.</motion.p>
      <motion.p className="closing-text" variants={itemVariants}>Dengan segenap cinta, {NAMA_ANDA}</motion.p>
    </div>
  </motion.section>
);

function App() {
  const [galleryMode, setGalleryMode] = useState(false);
  return (
    <div className="app">
      <AnimatePresence>
        {!galleryMode && (
          <motion.div key="narrative" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.5 } }}>
            <HeroSection />
            <MessageSection />
            <GalleryTriggerSection onEnterGallery={() => setGalleryMode(true)} />
            <QuotesSection />
            <FinalSection />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {galleryMode && (
          <motion.div key="domegallery" className="dome-gallery-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} exit={{ opacity: 0, transition: { duration: 0.5 } }}>
            <DomeGallery />
            <button className="exit-gallery-btn" onClick={() => setGalleryMode(false)}>
              <ArrowLeft size={16} /> Kembali ke Cerita
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;