'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../shared/SectionLabel'
import ScrollReveal, { staggerContainer, fadeUp } from '../shared/ScrollReveal'

const industries = [
  { icon: '✈️', name: 'Aerospace', desc: 'Precision electrical infrastructure for aerospace manufacturing and assembly.' },
  { icon: '🏭', name: 'Industrial Manufacturing', desc: 'End-to-end solutions for large-scale production and processing facilities.' },
  { icon: '🍽️', name: 'Food & Beverage', desc: 'Specialized cold storage and food processing electrical systems.' },
  { icon: '🏗️', name: 'Real Estate & Construction', desc: 'Residential townships, luxury villas, and commercial complexes.' },
  { icon: '🏫', name: 'Institutional', desc: 'Schools, colleges, and campus infrastructure electrification.' },
  { icon: '🏨', name: 'Hospitality', desc: 'Resorts, hotels, and premium hospitality electrical solutions.' },
]

export default function Industries() {
  return (
    <section className="bg-[var(--gray-bg)] py-24 md:py-32 border-y border-[var(--border)]">
      <div className="w-full mx-auto px-8">
        
        <div className="text-center flex flex-col items-center mb-16">
          <SectionLabel text="Industries We Serve" color="accent" />
          <h2 className="font-bebas text-5xl md:text-6xl uppercase text-[var(--accent)] tracking-wider">Powering <span className="text-[var(--primary)]">Every Sector</span></h2>
        </div>

        <ScrollReveal animation={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02, borderColor: 'var(--primary)' }}
              className="group relative bg-white border border-[var(--border)] p-8 overflow-hidden rounded-sm transition-all duration-300"
            >
              {/* Hover Diagonal Overlay */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-soft)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
              />
              
              <div className="relative z-10 text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">
                {ind.icon}
              </div>
              <h3 className="relative z-10 font-rajdhani text-2xl font-bold uppercase tracking-wider mb-2 text-[var(--accent)]">
                {ind.name}
              </h3>
              <p className="relative z-10 font-inter text-sm text-[var(--gray)]">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </ScrollReveal>

      </div>
    </section>
  )
}
