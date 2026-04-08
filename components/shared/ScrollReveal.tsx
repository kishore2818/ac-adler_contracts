'use client'

import { motion } from 'framer-motion'

export const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeLeft: any = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeRight: any = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const staggerContainer: any = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export default function ScrollReveal({
  children,
  animation = fadeUp,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  animation?: any
  className?: string
  delay?: number
}) {
  const variantWithDelay = {
    ...animation,
    visible: {
      ...animation.visible,
      transition: { ...animation.visible.transition, delay },
    },
  }

  return (
    <motion.div
      variants={variantWithDelay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
