import { motion } from 'framer-motion'
import useHighlight from '../hooks/useHighlight'
import { useLang } from '../context/LanguageContext'

const ECGIcon = () => (
  <svg viewBox="0 0 80 24" width="80" height="24">
    <path d="M0,12 L16,12 L22,2 L28,22 L34,6 L40,12 L80,12" stroke="#d4af37" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
)

function EventCard({ icon, title, date, time, accent, note, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderRadius: '20px',
        padding: 'clamp(24px,4vw,40px) clamp(20px,4vw,32px)',
        background: 'rgba(255,255,255,0.88)',
        border: `1px solid ${accent}40`,
        boxShadow: `0 10px 44px ${accent}18`,
        backdropFilter: 'blur(14px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '3px', borderRadius: '999px', background: `linear-gradient(90deg,transparent,${accent},transparent)` }} />

      <div style={{ fontSize: 'clamp(1.8rem,4vw,2.4rem)', marginBottom: '12px' }}>{icon}</div>
      <h3 className="font-playfair" style={{ color: '#4a2c1a', fontSize: 'clamp(1.1rem,2.8vw,1.5rem)', marginBottom: '12px' }}>{title}</h3>
      <ECGIcon />

      <p className="font-playfair" style={{ color: accent, fontSize: 'clamp(1rem,2.5vw,1.3rem)', fontWeight: 600, marginTop: '12px', marginBottom: '4px' }}>
        {date}
      </p>
      <p className="font-cormorant" style={{ color: '#5a3a1a', fontSize: 'clamp(1rem,2.5vw,1.25rem)', fontStyle: 'italic', lineHeight: 1.5, marginBottom: '10px' }}>
        {time}
      </p>
      {note && (
        <p style={{
          color: '#8b6914', fontFamily: 'Lato,sans-serif',
          fontSize: 'clamp(0.75rem,1.6vw,0.85rem)',
          marginTop: '10px', paddingTop: '10px',
          borderTop: `1px solid ${accent}25`,
        }}>
          {note}
        </p>
      )}
    </motion.div>
  )
}

export default function EventDetails() {
  const [ref, inView] = useHighlight(0.08)
  const { t } = useLang()

  return (
    <section
      ref={ref}
      className={`section-highlight${inView ? ' in-view' : ''}`}
      style={{ position: 'relative', width: '100%', padding: 'clamp(48px,8vw,96px) 0', background: 'linear-gradient(180deg,#faf8f3 0%,#f0e8d5 100%)' }}
    >
      <div className="section-line" />
      {inView && <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 70% 50% at 50% 0%,rgba(212,175,55,0.09) 0%,transparent 70%)' }} />}

      <div style={{ width: '100%', maxWidth: '1040px', margin: '0 auto', padding: '0 clamp(16px,5vw,40px)' }}>

        {/* Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: 'clamp(32px,5vw,56px)' }}
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
        >
          <p style={{ color: '#b8860b', fontFamily: 'Lato,sans-serif', fontSize: 'clamp(9px,1.5vw,11px)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '12px' }}>
            {t.event_label}
          </p>
          <h2 className="font-playfair" style={{ color: '#4a2c1a', fontSize: 'clamp(1.8rem,5vw,3rem)', marginBottom: '16px' }}>
            {t.event_heading}
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* 3 Event Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'clamp(16px,3vw,32px)',
        }}>
          <EventCard
            icon="💍"
            title={t.event_engTitle}
            date={t.event_engDate}
            time={t.event_engTime}
            accent="#b8860b"
            note={t.event_venueShort}
            delay={0.1}
            inView={inView}
          />
          <EventCard
            icon="🪔"
            title={t.event_muhTitle}
            date={t.event_muhDate}
            time={t.event_muhTime}
            accent="#8b1a2f"
            note={t.event_venueShort}
            delay={0.22}
            inView={inView}
          />
          <EventCard
            icon="🎉"
            title={t.event_recTitle}
            date={t.event_recDate}
            time={t.event_recTime}
            accent="#4a7c59"
            note={t.event_venueShort}
            delay={0.34}
            inView={inView}
          />
        </div>

        {/* Venue block */}
        <motion.div
          style={{ marginTop: 'clamp(28px,4vw,48px)', textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div style={{ display: 'inline-block', padding: 'clamp(16px,3vw,28px) clamp(24px,5vw,48px)', borderRadius: '16px', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(212,175,55,0.28)', backdropFilter: 'blur(12px)' }}>
            <p style={{ color: '#b8860b', fontFamily: 'Lato,sans-serif', fontSize: 'clamp(9px,1.4vw,10px)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '8px' }}>
              {t.invitation_venueLabel}
            </p>
            <p className="font-playfair" style={{ color: '#4a2c1a', fontSize: 'clamp(1rem,2.5vw,1.3rem)', fontWeight: 700, marginBottom: '4px' }}>
              {t.invitation_venueName}
            </p>
            <p className="font-cormorant" style={{ color: '#5a3a1a', fontSize: 'clamp(0.9rem,2vw,1.1rem)', fontStyle: 'italic', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
              {t.invitation_venueAddr}
            </p>
          </div>
        </motion.div>

        {/* ECG strip */}
        <motion.div
          style={{ marginTop: 'clamp(28px,4vw,48px)', display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.5 }}
        >
          <svg viewBox="0 0 600 40" style={{ width: '100%', maxWidth: '560px', height: '40px' }}>
            <path d="M0,20 L100,20 L118,20 L130,4 L142,36 L154,10 L166,20 L200,20 L300,20 L318,20 L330,4 L342,36 L354,10 L366,20 L400,20 L600,20"
              stroke="#d4af37" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
