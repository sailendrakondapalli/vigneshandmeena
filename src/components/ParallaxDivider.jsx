/**
 * Full-width parallax image strip between sections.
 * The image is fixed (background-attachment: fixed) so it stays put
 * while the next section scrolls over it from below.
 */
export default function ParallaxDivider({ image, height = '340px', overlay = 'rgba(20,10,4,0.45)', children }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: `clamp(200px, 30vw, ${height})`,
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        overflow: 'hidden',
      }}
    >
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: overlay }} />

      {/* Optional centered text / ornament */}
      {children && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 2,
        }}>
          {children}
        </div>
      )}
    </div>
  )
}
