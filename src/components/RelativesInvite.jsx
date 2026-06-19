import { motion } from 'framer-motion'
import useHighlight from '../hooks/useHighlight'
import { useLang } from '../context/LanguageContext'

export default function RelativesInvite() {
  const [ref, inView] = useHighlight(0.08)
  const { t } = useLang()

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section
      ref={ref}
      className={`section-highlight${inView ? ' in-view' : ''}`}
      style={{ position: 'relative', width: '100%', padding: 'clamp(64px,10vw,120px) 0', background: 'linear-gradient(160deg, #f0e8d5 0%, #faf8f3 60%, #f5ead6 100%)' }}
    >
      <div className="section-line" />
      {inView && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 65% 55% at 50% 40%, rgba(139,26,47,0.06) 0%, transparent 70%)' }} />
      )}

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '780px', margin: '0 auto', padding: '0 clamp(16px,5vw,40px)' }}>

        <motion.div style={{ textAlign: 'center', marginBottom: '40px' }} {...fadeUp(0)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,transparent,#8b1a2f)' }} />
            <svg viewBox="0 0 40 36" width="22" height="20" fill="#8b1a2f">
              <path d="M20 34C20 34 2 22 2 11C2 5.5 6.5 2 11 2C14.5 2 17.5 4 20 7C22.5 4 25.5 2 29 2C33.5 2 38 5.5 38 11C38 22 20 34 20 34Z"/>
            </svg>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,#8b1a2f,transparent)' }} />
          </div>
          <p style={{ color: '#8b1a2f', fontFamily: 'Lato,sans-serif', fontSize: 'clamp(9px,1.5vw,11px)', letterSpacing: '0.45em', textTransform: 'uppercase', marginBottom: '12px' }}>
            {t.relatives_worldLabel}
          </p>
          <h2 className="font-playfair" style={{ color: '#4a2c1a', fontSize: 'clamp(1.8rem,5vw,2.8rem)', marginBottom: '8px' }}>
            {t.relatives_heading1}
          </h2>
          <h3 className="font-playfair" style={{ color: '#8b1a2f', fontSize: 'clamp(1.1rem,3vw,1.7rem)', fontStyle: 'italic', fontWeight: 400 }}>
            {t.relatives_heading2}
          </h3>
        </motion.div>

        <motion.div
          {...fadeUp(0.12)}
          style={{
            borderRadius: '24px',
            padding: 'clamp(28px,5vw,60px) clamp(24px,5vw,56px)',
            background: 'rgba(255,255,255,0.72)',
            border: '1px solid rgba(139,26,47,0.14)',
            boxShadow: '0 20px 70px rgba(139,26,47,0.09)',
            backdropFilter: 'blur(16px)',
            textAlign: 'center',
          }}
        >
          <motion.div {...fadeUp(0.2)} style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ height: '1px', width: '32px', background: 'rgba(212,175,55,0.6)' }} />
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#d4af37">
                <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5Z"/>
              </svg>
              <p style={{ color: '#b8860b', fontFamily: 'Lato,sans-serif', fontSize: 'clamp(9px,1.5vw,11px)', letterSpacing: '0.35em', textTransform: 'uppercase' }}>
                {t.relatives_eldersLabel}
              </p>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#d4af37">
                <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5Z"/>
              </svg>
              <div style={{ height: '1px', width: '32px', background: 'rgba(212,175,55,0.6)' }} />
            </div>
          </motion.div>

          <motion.p className="font-cormorant" {...fadeUp(0.26)}
            style={{ color: '#4a2c1a', fontSize: 'clamp(1.05rem,2.6vw,1.38rem)', lineHeight: 1.95, marginBottom: '22px', fontStyle: 'italic' }}>
            {t.relatives_p1}
          </motion.p>

          <motion.p className="font-cormorant" {...fadeUp(0.32)}
            style={{ color: '#5a3a1a', fontSize: 'clamp(1rem,2.4vw,1.3rem)', lineHeight: 1.9, marginBottom: '22px' }}>
            {t.relatives_p2}
          </motion.p>

          <motion.p className="font-cormorant" {...fadeUp(0.38)}
            style={{ color: '#5a3a1a', fontSize: 'clamp(1rem,2.4vw,1.3rem)', lineHeight: 1.9, marginBottom: '22px' }}>
            {t.relatives_p3}
          </motion.p>

          <motion.div {...fadeUp(0.42)} style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '28px 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,transparent,rgba(212,175,55,0.5))' }} />
            <svg viewBox="0 0 40 36" width="18" height="16" fill="#d4af37" opacity="0.7">
              <path d="M20 34C20 34 2 22 2 11C2 5.5 6.5 2 11 2C14.5 2 17.5 4 20 7C22.5 4 25.5 2 29 2C33.5 2 38 5.5 38 11C38 22 20 34 20 34Z"/>
            </svg>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,rgba(212,175,55,0.5),transparent)' }} />
          </motion.div>

          <motion.p className="font-cormorant" {...fadeUp(0.46)}
            style={{ color: '#5a3a1a', fontSize: 'clamp(1rem,2.4vw,1.3rem)', lineHeight: 1.9, marginBottom: '22px' }}>
            {t.relatives_p4}
          </motion.p>

          <motion.p className="font-cormorant" {...fadeUp(0.51)}
            style={{ color: '#5a3a1a', fontSize: 'clamp(1rem,2.4vw,1.3rem)', lineHeight: 1.9, marginBottom: '22px' }}>
            {t.relatives_p5a}
            <span style={{ color: '#8b1a2f', fontStyle: 'italic' }}>{t.relatives_p5b}</span>
          </motion.p>

          <motion.p className="font-cormorant" {...fadeUp(0.56)}
            style={{ color: '#5a3a1a', fontSize: 'clamp(1rem,2.4vw,1.3rem)', lineHeight: 1.9, marginBottom: '32px' }}>
            {t.relatives_p6}
          </motion.p>

          {/* Names box */}
          <motion.div
            {...fadeUp(0.62)}
            style={{
              borderRadius: '18px',
              padding: 'clamp(22px,4vw,40px) clamp(20px,4vw,48px)',
              background: 'linear-gradient(135deg, rgba(139,26,47,0.06), rgba(212,175,55,0.09))',
              border: '1px solid rgba(139,26,47,0.18)',
              marginBottom: '32px',
            }}
          >
            <p style={{ color: '#b8860b', fontFamily: 'Lato,sans-serif', fontSize: 'clamp(9px,1.5vw,11px)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '18px' }}>
              {t.relatives_weddingOf}
            </p>
            <p className="font-playfair" style={{ color: '#8b1a2f', fontSize: 'clamp(1.3rem,3.5vw,2.1rem)', marginBottom: '4px' }}>
              {t.relatives_groomName}
            </p>
            <p className="font-cormorant" style={{ color: '#8b6914', fontSize: 'clamp(0.9rem,2vw,1.15rem)', fontStyle: 'italic', marginBottom: '10px' }}>
              {t.relatives_groomQual}
            </p>
            <p className="font-playfair" style={{ color: '#d4af37', fontSize: 'clamp(1.3rem,3vw,1.9rem)', margin: '4px 0 10px' }}>{t.relatives_with}</p>
            <p className="font-playfair" style={{ color: '#8b1a2f', fontSize: 'clamp(1.3rem,3.5vw,2.1rem)', marginBottom: '4px' }}>
              {t.relatives_brideName}
            </p>
            <p className="font-cormorant" style={{ color: '#8b6914', fontSize: 'clamp(0.9rem,2vw,1.15rem)', fontStyle: 'italic', marginBottom: '18px' }}>
              {t.relatives_brideQual}
            </p>
            <div style={{ height: '1px', background: 'rgba(212,175,55,0.3)', margin: '0 auto 16px', width: '60%' }} />
            <p className="font-cormorant" style={{ color: '#5a3a1a', fontSize: 'clamp(0.95rem,2.2vw,1.2rem)', lineHeight: 1.7, fontStyle: 'italic' }}>
              {t.relatives_eventRef}
            </p>
          </motion.div>

          <motion.p className="font-cormorant" {...fadeUp(0.67)}
            style={{ color: '#5a3a1a', fontSize: 'clamp(1rem,2.4vw,1.3rem)', lineHeight: 1.9, marginBottom: '22px' }}>
            {t.relatives_p7}
          </motion.p>

          <motion.p className="font-cormorant" {...fadeUp(0.71)}
            style={{ color: '#4a2c1a', fontSize: 'clamp(1.05rem,2.5vw,1.35rem)', lineHeight: 1.85, fontStyle: 'italic', marginBottom: '32px' }}>
            {t.relatives_p8}
          </motion.p>

          <motion.div {...fadeUp(0.76)} style={{ borderTop: '1px solid rgba(212,175,55,0.22)', paddingTop: '28px' }}>
            <p className="font-cormorant" style={{ color: '#8b6914', fontSize: 'clamp(1rem,2.2vw,1.2rem)', fontStyle: 'italic', marginBottom: '10px' }}>
              {t.relatives_signoff}
            </p>
            <p className="font-playfair" style={{ color: '#4a2c1a', fontSize: 'clamp(1.2rem,3vw,1.7rem)', fontWeight: 600, marginBottom: '6px' }}>
              {t.relatives_names}
            </p>
            <p className="font-cormorant" style={{ color: '#8b6914', fontSize: 'clamp(0.9rem,2vw,1.1rem)', fontStyle: 'italic' }}>
              {t.relatives_families}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
