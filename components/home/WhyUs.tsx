'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '../shared/SectionLabel'
import ScrollReveal, { staggerContainer, fadeUp } from '../shared/ScrollReveal'

const reasons = [
  { icon: '📐', title: 'Meticulous Planning', desc: 'Every project begins with detailed design and execution strategies for precision delivery.' },
  { icon: '🛡️', title: 'Quality & Safety', desc: 'Uncompromising standards at every stage — from material selection to final commissioning.' },
  { icon: '⚡', title: 'Speed of Delivery', desc: 'Streamlined project management ensures we meet the tightest deadlines without compromise.' },
  { icon: '💎', title: 'Optimum Cost', desc: 'Transparent partnerships built on trust, delivering maximum value at competitive pricing.' },
]

export default function WhyUs() {
  return (
    <section className="bg-[var(--gray-bg)] py-24 md:py-32 border-y border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Centered Section Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <SectionLabel text="The Adler Advantage" color="accent" />
          <h2 className="font-bebas text-5xl md:text-6xl mb-4 text-[var(--accent)] tracking-wider">
            WHY CHOOSE <span className="text-[var(--primary)]">US</span>?
          </h2>
          <p className="font-inter text-[var(--gray)] text-lg mb-8 leading-relaxed max-w-2xl">
            Our reputation is built on meticulous planning, robust project management, and a relentless focus on quality, safety, and speed. We deliver turnkey electrical solutions from design to commissioning — on time and within budget.
          </p>
          <Link href="/about">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-[var(--primary)] text-white font-rajdhani uppercase tracking-widest font-bold px-8 py-3 rounded-sm shadow-lg shadow-[var(--primary-glow)]"
            >
              Learn More
            </motion.button>
          </Link>
        </div>

        {/* 2x2 Feature Grid */}
        <ScrollReveal animation={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03, borderColor: 'var(--primary)' }}
              className="bg-white p-8 rounded-sm shadow-sm border border-[var(--border)] transition-colors hover:bg-[var(--primary-soft)] cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--primary-glow)] flex items-center justify-center text-2xl mb-6 border border-[var(--primary)]/20 group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                {r.icon}
              </div>
              <h3 className="font-rajdhani text-xl font-bold uppercase mb-3 text-[var(--accent)]">{r.title}</h3>
              <p className="font-inter text-sm text-[var(--gray)] line-clamp-3">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </ScrollReveal>

      </div>
    </section>
  )
}
