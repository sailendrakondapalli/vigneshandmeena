import { useRef, useEffect } from 'react'

/**
 * ParallaxDivider
 *
 * Desktop (≥768px): background-attachment:fixed — native CSS, image pins to viewport.
 * Mobile  (<768px): JS scroll listener moves the <img> in the OPPOSITE direction
 *                   at the same speed the strip scrolls, making it appear fixed.
 */
export default function ParallaxDivider({
  image,
  height = '340px',
  overlay = 'rgba(20,10,4,0.48)',
  children,
}) {
  const wrapRef = useRef(null)
  const imgRef  = useRef(null)
  const rafRef  = useRef(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (!isMobile) return           // desktop uses CSS fixed — no JS needed

    const update = () => {
      const wrap = wrapRef.current
      const img  = imgRef.current
      if (!wrap || !img) return

      const rect = wrap.getBoundingClientRect()
      // Counter-scroll: as the strip moves up by rect.top (negative),
      // we shift the image down by the same amount so it appears fixed.
      // Clamp to keep the image from going too far from center.
      const offset = Math.max(-200, Math.min(200, -rect.top))
      img.style.top = `calc(30% + ${offset}px)`
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="parallax-strip"
      style={{
        position: 'relative',
        width: '100%',
        height: `clamp(260px, 40vw, ${height})`,
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* ── Desktop: CSS fixed background ── */}
      <div
        className="parallax-bg-desktop"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* ── Mobile: JS counter-scroll image ── */}
      <img
        ref={imgRef}
        className="parallax-bg-mobile"
        src={image}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '100vh',          // full viewport height so there's room to pin
          objectFit: 'cover',
          objectPosition: 'center 20%',   // keep faces/top subjects visible
          pointerEvents: 'none',
          userSelect: 'none',
          willChange: 'top',
        }}
      />

      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: overlay, zIndex: 2 }} />

      {/* Ornament / quote */}
      {children && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 3,
        }}>
          {children}
        </div>
      )}
    </div>
  )
}
