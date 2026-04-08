'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import PageHero from '@/components/shared/PageHero'
import { projects } from '@/data/projects'
import SectionLabel from '@/components/shared/SectionLabel'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')
  
  const filters = ['All', 'In Progress', 'Completed']
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.status === filter)

  const ongoing = projects.filter(p => p.status === 'In Progress')
  const completed = projects.filter(p => p.status === 'Completed')

  return (
    <>
      <Navbar />
      <main>
        <PageHero image="/images/page-headers/projects.png" 
          title="OUR PROJECT PORTFOLIO" 
          subtitle="A demonstration of our capability across Industrial, Commercial, and Institutional sectors." 
        />
        
        <section className="py-24 bg-white min-h-[800px]">
          <div className="w-full mx-auto px-8">
            
            {/* Ongoing Projects Section */}
            <div className="mb-20">
              <div className="flex flex-col items-center justify-center gap-4 mb-10 text-center">
                <h2 className="font-bebas text-4xl text-[var(--black)] tracking-wider">Ongoing <span className="text-[var(--primary)]">Endeavors</span></h2>
                <div className="h-[2px] w-24 bg-[var(--primary)]" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {ongoing.map((project, i) => (
                  <motion.div
                    key={project.name + i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[var(--gray-bg)] border-l-4 border-[var(--primary)] p-6 rounded-sm shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-rajdhani text-xs font-bold text-[var(--primary)] uppercase tracking-widest">{project.location}</span>
                      <span className="flex items-center gap-1 text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold uppercase">
                        <span className="w-1 h-1 bg-orange-500 rounded-full animate-pulse" />
                        In Progress
                      </span>
                    </div>
                    <h3 className="font-bebas text-2xl mb-2 text-[var(--black)]">{project.name}</h3>
                    <p className="font-rajdhani text-xs font-bold text-[var(--gray)] mb-4 uppercase tracking-tighter">{project.client}</p>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-bold uppercase text-[var(--gray)]">
                        <span>Execution Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full h-1 bg-white rounded-full overflow-hidden">
                        <div className="h-full bg-[var(--primary)]" style={{ width: `${project.progress}%` }} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <hr className="border-[var(--border)] mb-20" />

            {/* Filterable Project History */}
            <div className="flex flex-col items-center justify-center mb-12 flex-wrap gap-6 text-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="font-bebas text-4xl text-[var(--black)] tracking-wider">Project <span className="text-[var(--accent)]">History</span></h2>
                <div className="h-[2px] w-24 bg-[var(--accent)]" />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {filters.map(f => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`font-rajdhani uppercase tracking-widest font-bold px-5 py-1.5 text-xs rounded-sm border transition-all ${
                      filter === f 
                        ? 'bg-[var(--accent)] border-[var(--accent)] text-white' 
                        : 'bg-white border-[var(--border)] text-[var(--gray)] hover:border-[var(--accent)]'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.name + i}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white border border-[var(--border)] rounded-sm p-5 hover:shadow-lg transition-shadow group flex flex-col h-full"
                  >
                    <div className="mb-4 overflow-hidden h-40 bg-[var(--gray-bg)] rounded-sm">
                      <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-rajdhani text-[10px] font-bold text-[var(--primary)] uppercase tracking-wider">{project.type}</span>
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                        {project.status}
                      </span>
                    </div>
                    <h4 className="font-bebas text-xl mb-1 text-[var(--black)]">{project.name}</h4>
                    <p className="font-inter text-[11px] text-[var(--gray)] mb-4 flex-grow">{project.description}</p>
                    <div className="pt-4 border-t border-[var(--border)] mt-auto flex justify-between items-center">
                      <span className="font-rajdhani text-[9px] font-bold text-[var(--black)] uppercase tracking-widest">{project.client}</span>
                      <span className="font-rajdhani text-[9px] font-bold text-[var(--gray)] uppercase tracking-widest">{project.location}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
