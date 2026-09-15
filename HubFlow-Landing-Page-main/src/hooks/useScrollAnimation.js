/**
 * Returns a consistent set of Framer Motion props for scroll-triggered
 * fade-in-up animations. Centralizing this keeps animation timing/easing
 * consistent across every section instead of each component reinventing it.
 *
 * @param {number} delay - optional stagger delay in seconds
 * @param {number} y - starting vertical offset in pixels
 */
export function useScrollAnimation(delay = 0, y = 24) {
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

export const fadeInItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}
