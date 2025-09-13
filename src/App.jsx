import React, { useState } from 'react';
import { Heart, Feather, X, Camera, ArrowLeft, Sparkles, Star, Gift, Smile, Sun } from 'lucide-react';
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
    text: ".....", 
    author: "Allysa, Sahabat Terbaik",
    emoji: "🌟"
  },
  { 
    text: ".....",
    author: "Ncip, Sahabat Terbaik",
    emoji: "🌟"
  },
  { 
    text: "...", 
    author: "Pata, Ur BF",
    emoji: "🌈"
  }
];
// --- AKHIR AREA EDIT ---

// Enhanced Animation variants dengan bounce effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2, 
      delayChildren: 0.1,
      duration: 0.8,
      type: "spring",
      bounce: 0.4
    } 
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.8 },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8, 
      type: "spring",
      bounce: 0.6
    } 
  }
};

const bounceVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 1,
      type: "spring",
      bounce: 0.8
    } 
  }
};

const wiggleVariants = {
  animate: {
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// Cute Floating Emojis Component
const FloatingEmojis = ({ emojis = ['🎉', '🎂', '🎈', '🌟', '💖', '✨'] }) => (
  <div className="floating-emojis">
    {emojis.map((emoji, index) => (
      <motion.div
        key={index}
        className="floating-emoji"
        initial={{ opacity: 0, y: 100 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [-20, -120, -220],
          x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
          rotate: [0, 360]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: index * 0.5,
          ease: "easeOut"
        }}
        style={{
          position: 'absolute',
          fontSize: '2rem',
          left: `${10 + index * 15}%`,
          bottom: '10px',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        {emoji}
      </motion.div>
    ))}
  </div>
);

// Hero Section Component dengan elemen lucu
const HeroSection = () => (
  <section id="section-1" className="hero-section cute-hero">
    <HeroScene />
    <FloatingEmojis emojis={['🎂', '🎈', '🎉', '⭐', '💝', '🌈']} />
    <motion.div 
      className="hero-content-overlay" 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
    >
      <motion.div variants={bounceVariants} className="hero-icon-container">
        <motion.div 
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Gift className="section-icon cute-gift" size={64} />
        </motion.div>
      </motion.div>
      
      <motion.h1 className="hero-title cute-title" variants={itemVariants}>
        Untuk {NAMA_PACAR} yang Tersayang! 🥳
      </motion.h1>
      
      <motion.div className="birthday-badges" variants={itemVariants}>
        <span className="birthday-badge">🎂 Happy Birthday! 🎂</span>
        <span className="birthday-badge">🎈 {TANGGAL_ULTAH} 🎈</span>
      </motion.div>
    </motion.div>
  </section>
);

// Message Section dengan karakter lucu
const MessageSection = () => (
  <motion.section 
    id="section-2" 
    className="message-section cute-message" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.3 }} 
    variants={containerVariants}
  >
    <Particles
      particleColors={['#ff69b4', '#ffb347', '#98fb98', '#87ceeb', '#dda0dd']}
      particleCount={100}
      particleSpread={12}
      speed={0.03}
      particleBaseSize={50}
      disableRotation={false}
      alphaParticles={true}
      moveParticlesOnHover={true}
      particleHoverFactor={0.5}
      sizeRandomness={1}
    />
    
    <div className="container content-overlay">
      <div className="section-header">
        <motion.div variants={bounceVariants} className="cute-icon-wrapper">
          <motion.div variants={wiggleVariants} animate="animate">
            <Smile className="section-icon cute-smile" size={56} />
          </motion.div>
        </motion.div>
        <motion.h2 className="section-title cute-section-title" variants={itemVariants}>
          💌 Surat Cinta Super Duper Special 💌
        </motion.h2>
      </div>
      
      <div className="message-content cute-content">
        <motion.div className="cute-quote-bubble" variants={itemVariants}>
          <p className="message-text large cute-large-text">
            "Satu tahun lagi berlalu, dan kamu bersinar lebih terang dari bintang di langit! ⭐✨"
          </p>
        </motion.div>
        
        <motion.div className="cute-message-card" variants={itemVariants}>
          <p className="message-text cute-text">
            🎉 Di hari istimewamu ini, aku ingin membuat sebuah jeda yang super spesial! Sebuah ruang penuh warna untuk merayakan semua hal tentangmu—tawamu yang menular seperti virus kebahagiaan, kebaikanmu yang tulus kayak madu, dan caramu membuat duniaku terasa seperti taman bunga yang indah! 🌺🌻
          </p>
        </motion.div>
        
        <motion.div className="cute-message-card" variants={itemVariants}>
          <p className="message-text cute-text">
            🌈 Setiap momen bersamamu adalah hadiah yang aku syukuri kayak dapet jackpot! Setiap senyumanmu adalah sunshine yang bikin hariku jadi cerah banget. Dan hari ini, di hari kelahiranmu yang super duper spesial, aku mau kamu tau betapa berharganya kehadiranmu dalam hidupku! 💖✨
          </p>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

// Gallery Trigger Section dengan animasi lucu
const GalleryTriggerSection = ({ onEnterGallery }) => (
  <motion.section 
    id="section-3" 
    className="gallery-trigger-section cute-gallery" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.4 }} 
    variants={containerVariants}
  >
    <div className="container">
      <motion.div className="section-header" variants={itemVariants}>
        <motion.div 
          className="cute-icon-wrapper"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 15, -15, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Camera className="section-icon cute-camera" size={56} />
        </motion.div>
        <h2 className="section-title cute-section-title">📸 Galeri Momen Super Cute! 📸</h2>
        <p className="section-subtitle cute-subtitle">
          🌟 Koleksi kenangan indah yang udah kita ukir bersama, dikemas dalam pengalaman 3D yang bikin mata berbinar-binar! Ready to explore? 🚀
        </p>
      </motion.div>
      
      <motion.button 
        className="enter-gallery-btn cute-gallery-btn" 
        onClick={onEnterGallery} 
        variants={bounceVariants}
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Star className="btn-icon" size={24} />
        🎭 Masuk ke Dunia Ajaib! 🎭
      </motion.button>
    </div>
  </motion.section>
);

// Quotes Section dengan design yang lebih playful
const QuotesSection = () => (
  <motion.section 
    id="section-4" 
    className="quotes-section cute-quotes" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.3 }} 
    variants={containerVariants}
  >
    <div className="container">
      <motion.div className="section-header" variants={itemVariants}>
        <motion.div 
          className="cute-heart-wrapper"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Heart className="section-icon cute-heart" size={56} />
        </motion.div>
        <h2 className="section-title cute-section-title">💭 Kata Mereka Tentang Si Manis! 💭</h2>
        <p className="section-subtitle cute-subtitle">
          🌈 Testimoni dari orang-orang yang udah keracunan kebaikan hatimu! 
        </p>
      </motion.div>
      
      <div className="quotes-container cute-quotes-grid">
        {DATA_KUTIPAN.map((quote, index) => (
          <motion.div 
            key={index} 
            className="quote-card cute-quote-card" 
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              rotate: index % 2 === 0 ? 2 : -2,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <div className="quote-emoji">{quote.emoji}</div>
            <blockquote className="quote-text cute-quote-text">
              "{quote.text}"
            </blockquote>
            <cite className="quote-author cute-quote-author">
              — {quote.author} ✨
            </cite>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

// Final Section dengan surprise effect
const FinalSection = () => (
  <motion.section 
    id="section-5" 
    className="final-section cute-final" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.4 }} 
    variants={containerVariants}
  >
    <FloatingEmojis emojis={['🎁', '💝', '🎀', '⭐', '💖', '🌟']} />
    
    <div className="final-content cute-final-content">
      <motion.div variants={bounceVariants} className="cute-surprise-icon">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Gift className="final-heart cute-gift-final" size={80} />
        </motion.div>
      </motion.div>
      
      <motion.h2 className="final-title cute-final-title" variants={itemVariants}>
        🎁 Kejutan Super Duper Amazing Menanti! 🎁
      </motion.h2>
      
      <motion.div className="cute-final-message" variants={itemVariants}>
        <p className="final-text cute-final-text">
          🌟 Perjalanan digital yang penuh warna ini mungkin berakhir di sini, tapi perayaan sesungguhnya baru aja mulai nih! Ada sesuatu yang super spesial dan bikin hati berbunga-bunga menunggumu di <span className="highlight">{LOKASI_KADO}</span>. Sebuah kejutan kecil nan manis yang kubuat dengan segenap cinta dan kelucuan! 💝✨
        </p>
      </motion.div>
      
      <motion.div className="birthday-celebration" variants={itemVariants}>
        <motion.p 
          className="birthday-text cute-birthday-text"
          animate={{ 
            scale: [1, 1.1, 1],
            color: ['#d4af37', '#ff69b4', '#87ceeb', '#d4af37']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🎂✨ Selamat Ulang Tahun, {NAMA_PACAR} Tersayang! ✨🎂
        </motion.p>
      </motion.div>
      
      <motion.div className="closing-message" variants={itemVariants}>
        <p className="closing-text cute-closing-text">
          Dengan segenap cinta, doa terbaik, dan pelukan virtual yang super erat! 🤗💕<br />
          <strong className="signature">~ {NAMA_ANDA} yang selalu sayang banget sama kamu! ~</strong>
        </p>
      </motion.div>
    </div>
  </motion.section>
);

// Main App Component
function App() {
  const [galleryMode, setGalleryMode] = useState(false);
  
  return (
    <div className="app cute-app">
      <AnimatePresence mode="wait">
        {!galleryMode && (
          <motion.div 
            key="narrative" 
            initial={{ opacity: 1 }} 
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.8 } }}
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
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }} 
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotate: 0,
              transition: { 
                duration: 1.2, 
                type: "spring",
                bounce: 0.6
              } 
            }} 
            exit={{ 
              opacity: 0, 
              scale: 1.2,
              rotate: 180,
              transition: { duration: 0.8 } 
            }}
          >
            <DomeGallery onClose={() => setGalleryMode(false)} />
            <motion.button
              className="exit-gallery-btn cute-exit-btn"
              onClick={() => setGalleryMode(false)}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -10, 10, 0]
              }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
              🏃‍♀️ Keluar dari Dunia Ajaib
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;