import { motion } from 'framer-motion'
import useHighlight from '../hooks/useHighlight'
import { useLang } from '../context/LanguageContext'

export default function Invitation() {
  const [ref, inView] = useHighlight(0.08)
  const { t } = useLang()

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section
      ref={ref}
      className={`section-highlight${inView ? ' in-view' : ''}`}
      style={{
        position: 'relative', width: '100%',
        padding: 'clamp(64px,10vw,120px) 0',
        background: 'linear-gradient(180deg,#f5ead6 0%,#faf8f3 100%)',
      }}
    >
      <div className="section-line" />
      {inView && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,175,55,0.09) 0%, transparent 70%)' }} />
      )}

      <div style={{ width: '100%', maxWidth: '760px', margin: '0 auto', padding: '0 clamp(16px,5vw,40px)' }}>

        <motion.div style={{ textAlign: 'center', marginBottom: '36px' }} {...fadeUp(0)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,transparent,#d4af37)' }} />
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#d4af37" style={{ flexShrink: 0 }}>
              <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5Z"/>
            </svg>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg,#d4af37,transparent)' }} />
          </div>
          <p style={{ color: '#b8860b', fontFamily: 'Lato,sans-serif', fontSize: 'clamp(9px,1.5vw,11px)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '12px' }}>
            {t.invitation_label}
          </p>
          <h2 className="font-playfair" style={{ color: '#4a2c1a', fontSize: 'clamp(1.8rem,5vw,3rem)' }}>
            {t.invitation_heading}
          </h2>
        </motion.div>

        <motion.div
          {...fadeUp(0.15)}
          style={{
            borderRadius: '20px',
            padding: 'clamp(24px,5vw,56px) clamp(20px,5vw,56px)',
            background: 'rgba(255,255,255,0.72)',
            border: '1px solid rgba(212,175,55,0.32)',
            boxShadow: '0 16px 60px rgba(184,134,11,0.14)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <p className="font-cormorant" style={{ color: '#4a2c1a', fontSize: 'clamp(1rem,2.5vw,1.4rem)', fontStyle: 'italic', textAlign: 'center', lineHeight: 1.7, marginBottom: '20px' }}>
            {t.invitation_line1}
          </p>
          <p className="font-cormorant" style={{ color: '#5a3a1a', fontSize: 'clamp(0.95rem,2vw,1.25rem)', textAlign: 'center', lineHeight: 1.7, marginBottom: '24px' }}>
            {t.invitation_line2}
          </p>

          <motion.div
            style={{ textAlign: 'center', padding: 'clamp(16px,3vw,28px) 0', borderTop: '1px solid rgba(212,175,55,0.22)', borderBottom: '1px solid rgba(212,175,55,0.22)', marginBottom: '28px' }}
            {...fadeUp(0.28)}
          >
            <p className="font-playfair" style={{ color: '#4a2c1a', fontSize: 'clamp(1.4rem,4vw,2.5rem)' }}>{t.gate_groomName} {t.gate_groomQual}</p>
            <p className="font-playfair" style={{ color: '#d4af37', fontSize: 'clamp(1.6rem,4vw,2.5rem)', margin: '12px 0' }}>&amp;</p>
            <p className="font-playfair" style={{ color: '#4a2c1a', fontSize: 'clamp(1.4rem,4vw,2.5rem)' }}>{t.gate_brideName} {t.gate_brideQual}</p>
          </motion.div>

          <motion.p className="font-cormorant" {...fadeUp(0.38)}
            style={{ color: '#4a2c1a', fontSize: 'clamp(1rem,2.5vw,1.4rem)', fontStyle: 'italic', textAlign: 'center', lineHeight: 1.7, marginBottom: '24px' }}>
            {t.invitation_quote}
          </motion.p>

          {/* Venue highlight */}
          <motion.div {...fadeUp(0.48)} style={{
            borderRadius: '14px',
            padding: 'clamp(18px,3vw,28px)',
            background: 'linear-gradient(135deg,rgba(212,175,55,0.1),rgba(139,26,47,0.05))',
            border: '1px solid rgba(212,175,55,0.3)',
            textAlign: 'center',
          }}>
            <p style={{ color: '#b8860b', fontFamily: 'Lato,sans-serif', fontSize: 'clamp(9px,1.5vw,10px)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '10px' }}>
              {t.invitation_venueLabel}
            </p>
            <p className="font-playfair" style={{ color: '#4a2c1a', fontSize: 'clamp(1.1rem,2.5vw,1.4rem)', fontWeight: 700, marginBottom: '6px' }}>
              {t.invitation_venueName}
            </p>
            <p className="font-cormorant" style={{ color: '#5a3a1a', fontSize: 'clamp(0.95rem,2vw,1.15rem)', lineHeight: 1.7, fontStyle: 'italic', whiteSpace: 'pre-line' }}>
              {t.invitation_venueAddr}
            </p>
            <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <div style={{ height: '1px', width: '40px', background: 'rgba(212,175,55,0.5)' }} />
              <p style={{ color: '#d4af37', fontFamily: 'Lato,sans-serif', fontSize: 'clamp(9px,1.5vw,11px)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                {t.invitation_dateTime}
              </p>
              <div style={{ height: '1px', width: '40px', background: 'rgba(212,175,55,0.5)' }} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
