'use client'

import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const IMAGES = [
  '/images/hero/panel-1.jpg',
  '/images/hero/panel-2.jpg',
  '/images/hero/panel-3.jpg',
  '/images/hero/panel-4.jpg',
  '/images/hero/panel-5.jpg',
]

function StatCounter({ end, label, suffix = '' }: { end: number, label: string, suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end]);

  return (
    <div className="flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-[var(--border)] pb-4 lg:pb-0 lg:pr-8 last:border-0 last:pb-0 pt-4 lg:pt-0 first:pt-0">
      <div className="font-bebas text-4xl text-[var(--primary)] text-center">
        {count}{suffix}
      </div>
      <div className="font-rajdhani text-sm text-[var(--gray)] uppercase tracking-wider font-bold text-center mt-1">
        {label}
      </div>
    </div>
  )
}

function Particles() {
  const [particles, setParticles] = useState<{ id: number, x: number, y: number, size: number, delay: number, duration: number }[]>([])

  useEffect(() => {
    const arr = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5
    }))
    setParticles(arr)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-30">
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, x: `${p.x}vw`, y: `${p.y}vh` }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [`${p.y}vh`, `${p.y - 15}vh`]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bg-[var(--primary)] rounded-full"
          style={{ width: p.size, height: p.size }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const { scrollY } = useScroll()
  const scaleX = useSpring(useTransform(scrollY, [0, 1000], [0, 1]), { stiffness: 100, damping: 30 })

  const words = "POWERING POSSIBILITIES. DELIVERING END TO END ELECTRICAL SOLUTIONS.".split(" ")

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[var(--gray-bg)]">
      
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentSlide}
            src={IMAGES[currentSlide]}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Clear background overlay with subtle dark tint for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="scanline opacity-10" />
      </div>

      <Particles />

      {/* Since 2009 Vertical */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left z-20 hidden lg:block">
        <span className="font-bebas text-[var(--primary)] tracking-[6px] opacity-80">SINCE 2014</span>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 h-full relative z-20 flex flex-col justify-center items-center pt-24 pb-12">
        
        <div className="flex flex-col items-center justify-center gap-16 mt-12 w-full">
          
          {/* Main Content - Centered */}
          <div className="max-w-4xl flex flex-col items-center text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-black/40 backdrop-blur-sm border border-white/20 mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span className="font-rajdhani text-white text-xs uppercase tracking-widest font-bold">
                ISO Certified Electrical Specialists
              </span>
            </motion.div>

            <h1 className="font-bebas text-[clamp(36px,10vw,88px)] text-white leading-[0.95] tracking-tight mb-8 flex flex-wrap justify-center gap-x-4 drop-shadow-xl w-full">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className={word.includes('POSSIBILITIES') || word.includes('SOLUTIONS') ? 'text-[var(--primary)]' : ''}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="font-inter text-gray-100 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium drop-shadow-md mx-auto"
            >
              A Class I Electrical contractor with deep expertise in turnkey End to End Electrical solutions. Committed to deliver from design to planning and installation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 w-full px-4 sm:px-0"
            >
              <Link href="/services" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ y: -3, boxShadow: '0 10px 25px rgba(124,179,66,0.3)' }}
                  className="shimmer-btn bg-[var(--primary)] text-white font-rajdhani uppercase tracking-widest font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-sm shadow-lg w-full sm:min-w-[200px]"
                >
                  Explore Expertise
                </motion.button>
              </Link>
              <Link href="/projects" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  className="border-2 border-white text-white bg-black/20 backdrop-blur font-rajdhani uppercase tracking-widest font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-sm hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors w-full sm:min-w-[200px]"
                >
                  Our Projects
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Horizontal Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="w-full max-w-5xl bg-white/95 backdrop-blur-xl border-t-[6px] border-[var(--primary)] rounded-sm p-8 shadow-2xl flex flex-col lg:flex-row justify-around items-center"
          >
             <StatCounter end={17} label="Projects" />
             <StatCounter end={10} label="Years" suffix="+" />
             <StatCounter end={14} label="Clients" />
             <StatCounter end={2} label="Offices" />
          </motion.div>

        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-sm transition-all border border-[var(--border)] shadow-sm ${currentSlide === i ? 'w-10 bg-[var(--primary)] border-transparent' : 'w-3 bg-white'}`}
            />
          ))}
        </div>

      </div>

      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="absolute bottom-0 left-0 right-0 h-[6px] bg-[var(--primary)] z-30"
      />

    </section>
  )
}
