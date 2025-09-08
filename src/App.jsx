import React, { useState } from 'react';
import { Heart, Feather, X, Camera, ArrowLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroScene } from './HeroScene.jsx';
import DomeGallery from './DomeGallery.jsx';
import Particles from './Particles.jsx';
import './App.css';

// --- AREA UNTUK ANDA EDIT ---
const NAMA_PACAR = "Alya";
const NAMA_ANDA = "Budi";
const TANGGAL_ULTAH = "14 September 2025";
const LOKASI_KADO = "laci mejamu";
const DATA_KUTIPAN = [
  { 
    text: "Dia memiliki jiwa yang indah dan hati yang paling hangat yang pernah kukenal.", 
    author: "Sarah, Sahabat Terbaik" 
  },
  { 
    text: "Tawanya bisa menerangi hari yang paling gelap sekalipun. Kehadirannya selalu membawa kebahagiaan.", 
    author: "Maya, Teman Kuliah" 
  }
];
// --- AKHIR AREA EDIT ---

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.3, 
      delayChildren: 0.2,
      duration: 0.6
    } 
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1]
    } 
  }
};

const fadeInUp = {
  hidden: { y: 60, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 1, 
      ease: [0.25, 0.1, 0.25, 1]
    } 
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1]
    } 
  }
};

// Hero Section Component
const HeroSection = () => (
  <section id="section-1" className="hero-section">
    <HeroScene />
    <motion.div 
      className="hero-content-overlay" 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
    >
      <motion.div variants={scaleIn}>
        <Sparkles className="section-icon" size={48} />
      </motion.div>
      <motion.h1 className="hero-title" variants={fadeInUp}>
        Untuk {NAMA_PACAR}
      </motion.h1>
      <motion.p className="hero-subtitle" variants={itemVariants}>
        {TANGGAL_ULTAH}
      </motion.p>
    </motion.div>
  </section>
);

// Message Section Component
const MessageSection = () => (
  <motion.section 
    id="section-2" 
    className="message-section" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.3 }} 
    variants={containerVariants}
  >
    {/* Enhanced Particles */}
    <Particles
      particleColors={['#f8f6f0', '#d4af37', '#b8941f']}
      particleCount={80}
      particleSpread={15}
      speed={0.02}
      particleBaseSize={40}
      disableRotation={false}
      alphaParticles={true}
      moveParticlesOnHover={true}
      particleHoverFactor={0.3}
      sizeRandomness={0.8}
    />
    
    <div className="container content-overlay">
      <div className="section-header">
        <motion.div variants={scaleIn}>
          <Feather className="section-icon" size={48} />
        </motion.div>
        <motion.h2 className="section-title" variants={fadeInUp}>
          Surat Cinta Digital
        </motion.h2>
      </div>
      
      <div className="message-content">
        <motion.p className="message-text large" variants={fadeInUp}>
          "Satu tahun lagi berlalu, dan kamu bersinar lebih terang dari sebelumnya."
        </motion.p>
        <motion.p className="message-text" variants={itemVariants}>
          Di hari istimewamu ini, aku ingin membuat sebuah jeda. Sebuah ruang tenang untuk merayakan semua hal tentangmu—tawamu yang menular, kebaikanmu yang tulus, dan caramu membuat duniaku terasa lebih utuh dan bermakna.
        </motion.p>
        <motion.p className="message-text" variants={itemVariants}>
          Setiap momen bersamamu adalah hadiah yang aku syukuri. Setiap senyumanmu adalah cahaya yang menerangi hariku. Dan hari ini, di hari kelahiranmu, aku ingin kamu tahu betapa berharganya kehadiranmu dalam hidupku.
        </motion.p>
      </div>
    </div>
  </motion.section>
);

// Gallery Trigger Section Component
const GalleryTriggerSection = ({ onEnterGallery }) => (
  <motion.section 
    id="section-3" 
    className="gallery-trigger-section" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.4 }} 
    variants={containerVariants}
  >
    <div className="container">
      <motion.div className="section-header" variants={fadeInUp}>
        <Camera className="section-icon" size={48} />
        <h2 className="section-title">Galeri Momen Berharga</h2>
        <p className="section-subtitle">
          Koleksi kenangan indah yang telah kita ukir bersama, dikemas dalam pengalaman 3D yang memukau.
        </p>
      </motion.div>
      
      <motion.button 
        className="enter-gallery-btn" 
        onClick={onEnterGallery} 
        variants={scaleIn}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Camera className="btn-icon" size={20} />
        Jelajahi Galeri 3D
      </motion.button>
    </div>
  </motion.section>
);

// Quotes Section Component
const QuotesSection = () => (
  <motion.section 
    id="section-4" 
    className="quotes-section" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.3 }} 
    variants={containerVariants}
  >
    <div className="container">
      <motion.div className="section-header" variants={fadeInUp}>
        <Heart className="section-icon" size={48} />
        <h2 className="section-title">Kata Mereka Tentangmu</h2>
        <p className="section-subtitle">
          Testimoni dari orang-orang yang mengenal kebaikan hatimu
        </p>
      </motion.div>
      
      <div className="quotes-container">
        {DATA_KUTIPAN.map((quote, index) => (
          <motion.div 
            key={index} 
            className="quote-card" 
            variants={fadeInUp}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3 }
            }}
          >
            <blockquote className="quote-text">
              "{quote.text}"
            </blockquote>
            <cite className="quote-author">
              — {quote.author}
            </cite>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

// Final Section Component
const FinalSection = () => (
  <motion.section 
    id="section-5" 
    className="final-section" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.4 }} 
    variants={containerVariants}
  >
    <div className="final-content">
      <motion.div variants={scaleIn}>
        <Heart className="final-heart" size={60} />
      </motion.div>
      
      <motion.h2 className="final-title" variants={fadeInUp}>
        Kejutan Sesungguhnya Menantimu
      </motion.h2>
      
      <motion.p className="final-text" variants={itemVariants}>
        Perjalanan digital ini mungkin berakhir di sini, tapi perayaan sesungguhnya baru saja dimulai. 
        Ada sesuatu yang spesial menunggumu di {LOKASI_KADO}. Sebuah kejutan kecil yang kubuat dengan segenap cinta.
      </motion.p>
      
      <motion.p className="birthday-text" variants={fadeInUp}>
        Selamat Ulang Tahun, {NAMA_PACAR} ✨
      </motion.p>
      
      <motion.p className="closing-text" variants={itemVariants}>
        Dengan segenap cinta dan doa terbaik,<br />
        <strong>{NAMA_ANDA}</strong>
      </motion.p>
    </div>
  </motion.section>
);

// Main App Component
function App() {
  const [galleryMode, setGalleryMode] = useState(false);
  
  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {!galleryMode && (
          <motion.div 
            key="narrative" 
            initial={{ opacity: 1 }} 
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
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
          <motion.div 
            key="domegallery" 
            className="dome-gallery-wrapper" 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
            }} 
            exit={{ 
              opacity: 0, 
              scale: 1.1,
              transition: { duration: 0.6 } 
            }}
          >
            <DomeGallery onClose={() => setGalleryMode(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;