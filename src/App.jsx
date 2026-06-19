import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from './context/LanguageContext'

import heroBgImg from './assets/herobg.jpeg'
import SplashScreen from './components/SplashScreen'
import walkingSfx from './assets/cartoon-walking-sound-effect_lKF9n5Km.mp3'
import perfectSong from './assets/Ed Sheeran - Perfect.mp3'
import Home from './components/Home'
import Countdown from './components/Countdown'
import Invitation from './components/Invitation'
import EventDetails from './components/EventDetails'
import LoveLetter from './components/LoveLetter'
import RelativesInvite from './components/RelativesInvite'
import MapFooter from './components/MapFooter'
import Particles from './components/Particles'
import ParallaxDivider from './components/ParallaxDivider'
import fixedbgone from './assets/fixedbgone.jpeg'
import fixedbgtwo from './assets/fixedbgtwo.jpeg'
import fixedbgthree from './assets/fixedbgthree.jpeg'
import fixedbgfour from './assets/fixedbgfour.jpeg'

function MainApp() {
  const [stage, setStage] = useState('gate')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [musicOn, setMusicOn] = useState(false)
  const { t, toggle: toggleLang, lang } = useLang()

  const walkAudioRef = useRef(new Audio(walkingSfx))
  const bgAudioRef   = useRef(new Audio(perfectSong))

  useEffect(() => {
    walkAudioRef.current.volume = 0.8
    bgAudioRef.current.volume   = 0.6
    bgAudioRef.current.loop     = true
    return () => {
      walkAudioRef.current.pause()
      bgAudioRef.current.pause()
    }
  }, [])

  const handleOpenInvitation = () => {
    walkAudioRef.current.currentTime = 0
    walkAudioRef.current.play().catch(() => {})
    setStage('splash')
  }

  const handleSplashComplete = () => {
    walkAudioRef.current.pause()
    setStage('main')
    setTimeout(() => {
      bgAudioRef.current.play().catch(() => {})
      setMusicOn(true)
    }, 300)
  }

  const toggleMusic = () => {
    if (musicOn) bgAudioRef.current.pause()
    else bgAudioRef.current.play().catch(() => {})
    setMusicOn(m => !m)
  }

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{ width: '100%', position: 'relative', background: '#faf8f3' }}>
      <Particles />

      {/* ── GATE ── */}
      <AnimatePresence>
        {stage === 'gate' && (
          <motion.div
            key="gate"
            style={{
              position: 'fixed', inset: 0, zIndex: 60,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              background: 'radial-gradient(ellipse at center, #fdf8ee 0%, #f5ead6 55%, #ede0c4 100%)',
            }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              style={{ position: 'relative', marginBottom: '28px' }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'backOut' }}
            >
              <div style={{
                width: 'clamp(100px,22vw,150px)', height: 'clamp(100px,22vw,150px)',
                borderRadius: '50%', overflow: 'hidden',
                border: '3px solid #d4af37',
                boxShadow: '0 0 0 6px rgba(212,175,55,0.18), 0 8px 32px rgba(184,134,11,0.35)',
              }}>
                <img src={heroBgImg} alt="Vignesh & Meena"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
              <motion.div
                style={{ position: 'absolute', inset: '-6px', borderRadius: '50%', border: '1.5px solid rgba(212,175,55,0.4)', pointerEvents: 'none' }}
                animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            <motion.p style={{ color: '#b8860b', fontFamily: 'Lato,sans-serif', fontSize: '11px', letterSpacing: '0.5em', textTransform: 'uppercase', marginBottom: '12px' }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              {t.gate_youAreInvited}
            </motion.p>
            <motion.h1 className="font-playfair"
              style={{ color: '#4a2c1a', fontSize: 'clamp(1.6rem,5vw,2.6rem)', textAlign: 'center', lineHeight: 1.3, marginBottom: '4px' }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
              {t.gate_groomName}
            </motion.h1>
            <motion.p className="font-cormorant"
              style={{ color: '#d4af37', fontSize: 'clamp(0.9rem,2vw,1.1rem)', fontStyle: 'italic', marginBottom: '4px' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>
              {t.gate_groomQual}
            </motion.p>
            <motion.p className="font-playfair"
              style={{ color: '#d4af37', fontSize: 'clamp(1.2rem,4vw,2rem)', marginBottom: '4px' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              &amp;
            </motion.p>
            <motion.h1 className="font-playfair"
              style={{ color: '#4a2c1a', fontSize: 'clamp(1.6rem,5vw,2.6rem)', textAlign: 'center', lineHeight: 1.3, marginBottom: '4px' }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              {t.gate_brideName}
            </motion.h1>
            <motion.p className="font-cormorant"
              style={{ color: '#d4af37', fontSize: 'clamp(0.9rem,2vw,1.1rem)', fontStyle: 'italic', marginBottom: '8px' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.98 }}>
              {t.gate_brideQual}
            </motion.p>
            <motion.p className="font-cormorant"
              style={{ color: '#8b6914', fontSize: 'clamp(0.9rem,2.5vw,1.1rem)', fontStyle: 'italic', marginBottom: '40px' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}>
              {t.gate_datePlace}
            </motion.p>
            <motion.button onClick={handleOpenInvitation}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
              style={{ padding: '14px 44px', borderRadius: '999px', border: '1.5px solid #d4af37',
                background: 'linear-gradient(135deg, #b8860b, #d4af37)', color: '#fdf8ee',
                fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase',
                fontFamily: 'Lato, sans-serif', cursor: 'pointer', boxShadow: '0 4px 24px rgba(184,134,11,0.35)' }}>
              {t.gate_openBtn}
            </motion.button>
            <motion.button onClick={toggleLang}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={{ marginTop: '18px', padding: '8px 22px', borderRadius: '999px',
                border: '1px solid rgba(212,175,55,0.5)', background: 'rgba(255,255,255,0.7)',
                color: '#8b6914', fontSize: '12px', letterSpacing: '0.1em',
                fontFamily: 'Lato, sans-serif', cursor: 'pointer', backdropFilter: 'blur(8px)' }}>
              {t.langBtn}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── SPLASH ── */}
      <AnimatePresence>
        {stage === 'splash' && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      {/* ── MAIN ── */}
      <AnimatePresence>
        {stage === 'main' && (
          <motion.div key="main" style={{ width: '100%' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>

            <Home />

            <ParallaxDivider image={fixedbgone} height="420px" overlay="rgba(20,10,4,0.5)">
              <svg viewBox="0 0 60 20" width="120" height="24" style={{ opacity: 0.8 }}>
                <path d="M0,10 L18,10 L24,2 L30,18 L36,4 L42,10 L60,10" stroke="#d4af37" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </ParallaxDivider>

            <Countdown />

            <ParallaxDivider image={fixedbgtwo} height="420px" overlay="rgba(20,10,4,0.52)">
              <svg viewBox="0 0 40 36" width="36" height="32" fill="#d4af37" style={{ opacity: 0.85 }}>
                <path d="M20 34C20 34 2 22 2 11C2 5.5 6.5 2 11 2C14.5 2 17.5 4 20 7C22.5 4 25.5 2 29 2C33.5 2 38 5.5 38 11C38 22 20 34 20 34Z"/>
              </svg>
            </ParallaxDivider>

            <Invitation />

            <ParallaxDivider image={fixedbgthree} height="420px" overlay="rgba(20,10,4,0.48)">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="#d4af37" style={{ opacity: 0.85 }}>
                <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5Z"/>
              </svg>
            </ParallaxDivider>

            <EventDetails />

            <ParallaxDivider image={fixedbgfour} height="420px" overlay="rgba(20,10,4,0.5)">
              <p className="font-cormorant" style={{ color: '#e8d5b0', fontSize: 'clamp(1.1rem,3vw,1.6rem)', fontStyle: 'italic', letterSpacing: '0.05em' }}>
                "Two hearts, one journey"
              </p>
            </ParallaxDivider>

            <LoveLetter />

            <ParallaxDivider image={fixedbgone} height="420px" overlay="rgba(20,10,4,0.52)">
              <svg viewBox="0 0 40 36" width="36" height="32" fill="#d4af37" style={{ opacity: 0.85 }}>
                <path d="M20 34C20 34 2 22 2 11C2 5.5 6.5 2 11 2C14.5 2 17.5 4 20 7C22.5 4 25.5 2 29 2C33.5 2 38 5.5 38 11C38 22 20 34 20 34Z"/>
              </svg>
            </ParallaxDivider>

            <RelativesInvite />

            <ParallaxDivider image={fixedbgtwo} height="420px" overlay="rgba(20,10,4,0.5)">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="#d4af37" style={{ opacity: 0.85 }}>
                <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5Z"/>
              </svg>
            </ParallaxDivider>

            <MapFooter />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && stage === 'main' && (
          <motion.button className="scroll-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Music toggle */}
      {stage === 'main' && (
        <motion.button onClick={toggleMusic}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Toggle music"
          style={{ position: 'fixed', bottom: '1.5rem', left: '1.5rem', zIndex: 999,
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '8px 16px', borderRadius: '999px', fontSize: '10px',
            letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Lato, sans-serif',
            background: musicOn ? 'linear-gradient(135deg,#b8860b,#d4af37)' : 'rgba(255,255,255,0.85)',
            color: musicOn ? '#fdf8ee' : '#8b6914',
            border: '1px solid rgba(212,175,55,0.4)', boxShadow: '0 2px 12px rgba(184,134,11,0.2)',
            backdropFilter: 'blur(8px)', cursor: 'pointer' }}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            {musicOn
              ? <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              : <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>}
          </svg>
          {musicOn ? 'Music On' : 'Music Off'}
        </motion.button>
      )}

      {/* Language toggle */}
      {stage === 'main' && (
        <motion.button onClick={toggleLang}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Toggle language"
          style={{ position: 'fixed', bottom: '1.5rem', left: '8.5rem', zIndex: 999,
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '8px 16px', borderRadius: '999px', fontSize: '11px',
            letterSpacing: '0.08em', fontFamily: 'Lato, sans-serif',
            background: lang === 'ta' ? 'linear-gradient(135deg,#8b1a2f,#c0404a)' : 'rgba(255,255,255,0.85)',
            color: lang === 'ta' ? '#fdf8ee' : '#8b6914',
            border: '1px solid rgba(139,26,47,0.35)', boxShadow: '0 2px 12px rgba(139,26,47,0.15)',
            backdropFilter: 'blur(8px)', cursor: 'pointer' }}>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" opacity="0.85">
            <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
          </svg>
          {t.langBtn}
        </motion.button>
      )}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainApp />} />
      </Routes>
    </BrowserRouter>
  )
}
