'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import SectionLabel from '../shared/SectionLabel'
import { products } from '@/data/products'

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="bg-[var(--gray-bg)] py-24 md:py-32 border-y border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-8 mb-16 text-center flex flex-col items-center">
        <SectionLabel text="Our Products" color="accent" />
        <h2 className="font-bebas text-5xl md:text-6xl text-[var(--accent)] tracking-wider mt-4">
          High Performance <span className="text-[var(--primary)]">Panels</span>
        </h2>
        
        <div className="flex gap-4 mt-8">
          <button 
             onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
             className="w-14 h-14 border border-[var(--border)] rounded-full flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all bg-white shadow-md group"
             aria-label="Previous Products"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
          </button>
          <button 
             onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
             className="w-14 h-14 border border-[var(--border)] rounded-full flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all bg-white shadow-md group"
             aria-label="Next Products"
          >
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Strip */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-8 pb-12 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="w-[calc((100vw-1280px)/2)] shrink-0 hidden xl:block" />
        
        {products.map((product, i) => (
          <motion.div
            key={product.slug}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
            className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-white border border-[var(--border)] rounded-sm overflow-hidden group transition-shadow"
          >
            <div className="h-48 overflow-hidden relative border-b border-[var(--border)] bg-[var(--gray-bg)]">
              <img 
                src={`/images/products/product-${(i % 8) + 1}.jpg`} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[var(--primary)] text-white font-rajdhani text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm shadow-md">
                {product.category}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-rajdhani text-xl font-bold uppercase text-[var(--accent)] mb-2 tracking-wider group-hover:text-[var(--primary)] transition-colors">
                {product.name}
              </h3>
              <p className="font-inter text-sm text-[var(--gray)] mb-6 line-clamp-2">
                {product.description}
              </p>
              
              <Link 
                href={`/products/${product.slug}`}
                className="inline-flex items-center text-[var(--black)] font-rajdhani uppercase tracking-widest font-bold text-sm bg-[var(--gray-bg)] px-4 py-2 border border-[var(--border)] rounded-sm group-hover:bg-[var(--primary)] group-hover:text-white group-hover:border-[var(--primary)] transition-all"
              >
                View Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
        
        <div className="w-8 shrink-0 md:hidden" />
      </div>
      
      <div className="text-center mt-16 md:mt-20">
        <Link href="/products">
          <motion.button
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 bg-[var(--black)] text-white font-rajdhani font-bold tracking-[0.2em] uppercase rounded-sm shadow-xl hover:bg-[var(--accent)] transition-all"
          >
            Explore All Products
          </motion.button>
        </Link>
      </div>

    </section>
  )
}
