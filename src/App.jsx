import React, { useState, useRef } from 'react'; // BARU: Menambahkan useRef
import { Heart, X, Camera, Sparkles, Star, Gift, Music, Pause } from 'lucide-react'; // BARU: Menambahkan ikon Music & Pause
import { motion, AnimatePresence } from 'framer-motion';
import { HeroScene } from './HeroScene.jsx';
import DomeGallery from './DomeGallery.jsx';
import Particles from './Particles.jsx';
import './App.css';

// --- AREA UNTUK ANDA EDIT ---
const NAMA_PACAR = "Ayumi";
const NAMA_ANDA = "Ravi";
const TANGGAL_ULTAH = "14 September 2025";
const LOKASI_KADO = "meja kerjamu";
const DATA_KUTIPAN = [
  { 
    text: "Ayumi adalah sosok yang selalu membawa ketenangan dalam setiap situasi. Kehadirannya seperti secangkir teh hangat di pagi yang dingin.", 
    author: "Maya, Sahabat Karib",
    emoji: "🌸"
  },
  { 
    text: "Dia memiliki cara unik untuk membuat setiap orang merasa dihargai. Senyumnya adalah hadiah terbaik yang bisa diterima siapa pun.",
    author: "Dika, Teman Kerja",
    emoji: "✨"
  },
  { 
    text: "Ayumi mengajarkan saya arti dari keindahan sederhana dalam hidup. Bersamanya, dunia terasa lebih berwarna dan bermakna.", 
    author: "Ravi, Yang Mengagumi",
    emoji: "💫"
  }
];
// --- AKHIR AREA EDIT ---

// Refined animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.3, 
      delayChildren: 0.2,
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: "easeOut"
    } 
  }
};

const gentleVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: { 
      duration: 1,
      ease: "easeOut"
    } 
  }
};

const subtleWiggleVariants = {
  animate: {
    rotate: [0, -1, 1, -1, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Refined Floating Elements Component
const FloatingElements = ({ elements = ['🌸', '✨', '💫', '🌿', '🕊️', '🤍'] }) => (
  <div className="floating-emojis">
    {elements.map((element, index) => (
      <motion.div
        key={index}
        className="floating-emoji"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: [0, 0.6, 0],
          y: [-10, -80, -150],
          x: [0, Math.random() * 20 - 10, Math.random() * 30 - 15],
          rotate: [0, 180]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: index * 0.8,
          ease: "easeOut"
        }}
        style={{
          position: 'absolute',
          fontSize: '1.5rem',
          left: `${15 + index * 12}%`,
          bottom: '10px',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        {element}
      </motion.div>
    ))}
  </div>
);

// Elegant Hero Section
const HeroSection = () => (
  <section id="section-1" className="hero-section elegant-hero">
    <HeroScene />
    <FloatingElements elements={['🌸', '✨', '💫', '🌿']} />
    <motion.div 
      className="hero-content-overlay" 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
    >
      <motion.div variants={gentleVariants} className="hero-icon-container">
        <motion.div 
          animate={{ 
            rotate: [0, 3, -3, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Gift className="section-icon elegant-gift" size={56} />
        </motion.div>
      </motion.div>
      
      <motion.h1 className="hero-title elegant-title" variants={itemVariants}>
        Untuk {NAMA_PACAR} Tersayang
      </motion.h1>
      
      <motion.div className="birthday-badges" variants={itemVariants}>
        <span className="birthday-badge">🎂 Selamat Ulang Tahun</span>
        <span className="birthday-badge">📅 {TANGGAL_ULTAH}</span>
      </motion.div>
    </motion.div>
  </section>
);

// Elegant Message Section
const MessageSection = () => (
  <motion.section 
    id="section-2" 
    className="message-section elegant-message" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.3 }} 
    variants={containerVariants}
  >
    <Particles
      particleColors={['#e8dcc6', '#d4c4a8', '#b8c5a6', '#c9ad7f', '#d4a99a']}
      particleCount={60}
      particleSpread={8}
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
        <motion.div variants={gentleVariants} className="elegant-icon-wrapper">
          <motion.div variants={subtleWiggleVariants} animate="animate">
            <Heart className="section-icon elegant-heart" size={48} />
          </motion.div>
        </motion.div>
        <motion.h2 className="section-title elegant-section-title" variants={itemVariants}>
          Pesan Istimewa Untukmu
        </motion.h2>
      </div>
      
      <div className="message-content elegant-content">
        <motion.div className="elegant-quote-bubble" variants={itemVariants}>
          <p className="message-text large elegant-large-text">
            "Setiap tahun yang berlalu membawamu semakin dekat dengan versi terbaik dari dirimu sendiri."
          </p>
        </motion.div>
        
        <motion.div className="elegant-message-card" variants={itemVariants}>
          <p className="message-text elegant-text">
            Di hari spesialmu ini, aku ingin menghadirkan sebuah ruang yang tenang untuk merayakan semua hal indah tentang dirimu. Kebaikan hatimu yang tulus, cara pandangmu yang bijaksana, dan kemampuanmu untuk membuat dunia terasa lebih hangat bagi siapa pun yang beruntung mengenalmu.
          </p>
        </motion.div>
        
        <motion.div className="elegant-message-card" variants={itemVariants}>
          <p className="message-text elegant-text">
            Setiap momen bersamamu adalah pelajaran berharga tentang bagaimana menghargai keindahan sederhana dalam hidup. Senyumanmu adalah cahaya yang menerangi hari-hari, dan hari ini, di hari kelahiranmu yang istimewa, aku ingin kamu tahu betapa berartinya kehadiranmu dalam hidupku.
          </p>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

// Elegant Gallery Trigger Section
const GalleryTriggerSection = ({ onEnterGallery }) => (
  <motion.section 
    id="section-3" 
    className="gallery-trigger-section elegant-gallery" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.4 }} 
    variants={containerVariants}
  >
    <div className="container">
      <motion.div className="section-header" variants={itemVariants}>
        <motion.div 
          className="elegant-icon-wrapper"
          animate={{ 
            scale: [1, 1.08, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Camera className="section-icon elegant-camera" size={48} />
        </motion.div>
        <h2 className="section-title elegant-section-title">Galeri Kenangan Indah</h2>
        <p className="section-subtitle elegant-subtitle">
          Koleksi momen-momen berharga yang telah kita lalui bersama, dikemas dalam pengalaman visual yang memukau. Mari jelajahi kenangan kita.
        </p>
      </motion.div>
      
      <motion.button 
        className="enter-gallery-btn elegant-gallery-btn" 
        onClick={onEnterGallery} 
        variants={gentleVariants}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        <Sparkles className="btn-icon" size={20} />
        Masuk ke Galeri
      </motion.button>
    </div>
  </motion.section>
);

// Elegant Quotes Section
const QuotesSection = () => (
  <motion.section 
    id="section-4" 
    className="quotes-section elegant-quotes" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.3 }} 
    variants={containerVariants}
  >
    <div className="container">
      <motion.div className="section-header" variants={itemVariants}>
        <motion.div 
          className="elegant-heart-wrapper"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 3, -3, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Star className="section-icon elegant-heart" size={48} />
        </motion.div>
        <h2 className="section-title elegant-section-title">Kata Mereka Tentangmu</h2>
        <p className="section-subtitle elegant-subtitle">
          Testimoni dari orang-orang yang telah merasakan kehangatan dan kebaikan hatimu.
        </p>
      </motion.div>
      
      <div className="quotes-container elegant-quotes-grid">
        {DATA_KUTIPAN.map((quote, index) => (
          <motion.div 
            key={index} 
            className="quote-card elegant-quote-card" 
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="quote-emoji">{quote.emoji}</div>
            <blockquote className="quote-text elegant-quote-text">
              "{quote.text}"
            </blockquote>
            <cite className="quote-author elegant-quote-author">
              — {quote.author}
            </cite>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

// Elegant Final Section
const FinalSection = () => (
  <motion.section 
    id="section-5" 
    className="final-section elegant-final" 
    initial="hidden" 
    whileInView="visible" 
    viewport={{ once: true, amount: 0.4 }} 
    variants={containerVariants}
  >
    <FloatingElements elements={['🎁', '💝', '🌸', '✨', '💫', '🌿']} />
    
    <div className="final-content elegant-final-content">
      <motion.div variants={gentleVariants} className="elegant-surprise-icon">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Gift className="final-heart elegant-gift-final" size={64} />
        </motion.div>
      </motion.div>
      
      <motion.h2 className="final-title elegant-final-title" variants={itemVariants}>
        Kejutan Kecil Menanti
      </motion.h2>
      
      <motion.div className="elegant-final-message" variants={itemVariants}>
        <p className="final-text elegant-final-text">
          Perjalanan digital ini mungkin berakhir di sini, tetapi perayaan sesungguhnya baru saja dimulai. Ada sesuatu istimewa yang menunggumu di <span className="highlight">{LOKASI_KADO}</span>. Sebuah hadiah kecil yang kubuat dengan penuh perhatian dan kasih sayang, sebagai wujud apresiasi atas kehadiranmu yang begitu berarti.
        </p>
      </motion.div>
      
      <motion.div className="birthday-celebration" variants={itemVariants}>
        <motion.p 
          className="birthday-text elegant-birthday-text"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Selamat Ulang Tahun, {NAMA_PACAR}
        </motion.p>
      </motion.div>
      
      <motion.div className="closing-message" variants={itemVariants}>
        <p className="closing-text elegant-closing-text">
          Dengan sepenuh hati, doa terbaik, dan harapan indah untuk tahun-tahun mendatang.<br />
          <strong className="signature">~ {NAMA_ANDA}, yang selalu mengagumi dan menghargaimu ~</strong>
        </p>
      </motion.div>
    </div>
  </motion.section>
);

// Main App Component
function App() {
  const [galleryMode, setGalleryMode] = useState(false);
  
  // BARU: State dan fungsi untuk kontrol musik
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    // Cek apakah audio sudah siap
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          // Menangani error jika browser memblokir autoplay
          console.error("Autoplay ditolak oleh browser:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <div className="app elegant-app">
      {/* BARU: Elemen audio dan tombol musik */}
      <audio 
        ref={audioRef} 
        src="/music/kendis.mp3" // Ganti 'lagu-spesial.mp3' dengan nama file lagu Anda
        loop 
      />
      <motion.button
        className="music-toggle-btn"
        onClick={toggleMusic}
        title={isPlaying ? "Hentikan Musik" : "Putar Musik"}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1, duration: 0.5 } }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? <Pause size={18} /> : <Music size={18} />}
      </motion.button>
      
      <AnimatePresence mode="wait">
        {!galleryMode && (
          <motion.div 
            key="narrative" 
            initial={{ opacity: 1 }} 
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.6 } }}
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
              transition: { 
                duration: 0.8, 
                ease: "easeOut"
              } 
            }} 
            exit={{ 
              opacity: 0, 
              scale: 1.05,
              transition: { duration: 0.6 } 
            }}
          >
            <DomeGallery onClose={() => setGalleryMode(false)} />
            <motion.button
              className="exit-gallery-btn elegant-exit-btn"
              onClick={() => setGalleryMode(false)}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={18} />
              Kembali
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;