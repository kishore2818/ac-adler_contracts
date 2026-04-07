'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '../shared/SectionLabel'

const faqs = [
  { q: "What types of electrical panels do you design?", a: "We design and manufacture LT Distribution Panels, HT Panels up to 33kV, Motor Control Centers (MCC), Power Control Centers (PCC), APFC, VCB Panels, and custom PLC automation desks." },
  { q: "Are your panels certified?", a: "Yes. All panels are designed and tested according to IS/IEC 61439 standards, and we operate under strict ISO 9001:2015 quality guidelines. We also carry CPRI approvals." },
  { q: "Do you offer Annual Maintenance Contracts (AMCs)?", a: "Absolutely. We provide comprehensive preventive and corrective AMCs, which include thermographic scanning, arc flash studies, and 24/7 emergency dispatch." },
  { q: "Which industries do you primarily serve?", a: "We serve heavy manufacturing, pharmaceuticals, commercial real estate, data centers, hospitals, and critical infrastructure projects (like metros and airports)." },
  { q: "How quickly can you deliver a custom panel?", a: "Depending on scale and complexity, standard distribution boards take 2-4 weeks, while complex MCC/PCC or VCB panels take 6-10 weeks from drawing approval to dispatch." },
  { q: "What brands of components do you use?", a: "We strictly use premium components from trusted global brands like Siemens, Schneider Electric, ABB, L&T, and C&S Electric based on client specifications." }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-[var(--gray-bg)] py-24">
      <div className="max-w-[800px] mx-auto px-8">
        
        <div className="text-center flex flex-col items-center mb-16">
          <SectionLabel text="Got Questions?" color="accent" />
          <h2 className="font-bebas text-5xl md:text-6xl text-[var(--accent)] tracking-wider">
            FREQUENTLY ASKED <span className="text-[var(--primary)]">QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="bg-white border border-[var(--border)] rounded-sm overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className={`font-rajdhani text-lg md:text-xl font-bold tracking-widest uppercase transition-colors ${isOpen ? 'text-[var(--primary)]' : 'text-[var(--black)]'}`}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-[var(--primary)] text-xl font-bold"
                  >
                    ↓
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 font-inter text-[var(--gray)] leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
