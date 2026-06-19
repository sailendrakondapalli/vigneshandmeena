import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, inView] — attach ref to the section element.
 * Once the section enters the viewport it stays "in-view" permanently.
 * Uses a low threshold so it triggers even on short mobile screens.
 */
export default function useHighlight(threshold = 0.05) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Use rootMargin to trigger slightly before the element enters view
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -5% 0px' }
    )
    obs.observe(el)

    // Fallback: if element is already visible on mount, set inView immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true)
      obs.disconnect()
    }

    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}
