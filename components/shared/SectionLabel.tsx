'use client'

import { motion } from 'framer-motion'

export default function SectionLabel({
  text,
  color = 'accent',
  centered = false,
}: {
  text: string
  color?: 'primary' | 'accent' | 'white' | 'gray'
  centered?: boolean
}) {
  const getTextColor = () => {
    switch (color) {
      case 'white': return 'text-white'
      case 'gray': return 'text-gray-500'
      case 'primary': return 'text-[var(--primary)]'
      case 'accent': default: return 'text-[var(--accent)]'
    }
  }

  const getLineColor = () => {
    switch (color) {
      case 'white': return 'bg-white'
      case 'gray': return 'bg-gray-400'
      case 'primary': return 'bg-[var(--primary)]'
      case 'accent': default: return 'bg-[var(--accent)]'
    }
  }

  if (centered) {
    return (
      <div className="flex items-center justify-center gap-3 mb-4 font-rajdhani">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 24 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`h-[2px] ${getLineColor()}`}
        />
        <span className={`text-sm tracking-[0.2em] font-bold uppercase ${getTextColor()}`}>
          {text}
        </span>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 24 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`h-[2px] ${getLineColor()}`}
        />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 mb-4 font-rajdhani">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 32 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`h-[2px] ${getLineColor()}`}
      />
      <span className={`text-sm tracking-[0.2em] font-bold uppercase ${getTextColor()}`}>
        {text}
      </span>
    </div>
  )
}
