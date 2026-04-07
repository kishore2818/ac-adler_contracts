'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#111827] border-t-2 border-[var(--primary)] pt-16">
      
      {/* Newsletter Strip (above sub-footer) */}
      <div className="max-w-[1280px] mx-auto px-8 mb-16">
        <div className="bg-[var(--primary)] rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bebas text-3xl tracking-wide text-white mb-1">STAY UPDATED</h3>
            <p className="font-inter text-blue-100 text-sm">Subscribe to our newsletter for industry updates and technical guides.</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border border-white/20 text-white placeholder-white/60 font-inter px-4 py-2 outline-none focus:border-white w-full md:w-64 rounded-l-sm"
            />
            <button className="bg-white text-[var(--primary)] font-bold font-rajdhani tracking-widest uppercase px-6 py-2 rounded-r-sm hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[var(--primary)] rounded-sm flex items-center justify-center shrink-0">
              <span className="font-bebas text-xl text-white">AC</span>
            </div>
            <div>
              <div className="font-bebas text-lg text-white tracking-[0.15em] leading-none">ADLER CONTRACTS</div>
            </div>
          </Link>
          <p className="font-inter text-sm text-[var(--gray-light)] mb-6 leading-relaxed">
            Engineering precision electrical solutions for industrial, commercial, and residential clients across India.
          </p>
          <div className="flex gap-3">
            {['In', 'Ig', 'Fb', 'Wa'].map(s => (
              <a key={s} href="#" className="w-8 h-8 flex items-center justify-center border border-gray-700 text-[var(--gray-light)] rounded hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-rajdhani font-bold text-xs tracking-[0.2em] uppercase text-[var(--primary)] mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {['Home', 'About Us', 'Projects', 'Clients', 'Contact'].map(link => (
              <Link key={link} href={`/${link.toLowerCase().replace(' ', '-')}`} className="font-inter text-sm text-[var(--gray-light)] hover:text-[var(--primary)] transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
           <h4 className="font-rajdhani font-bold text-xs tracking-[0.2em] uppercase text-[var(--primary)] mb-4">Services</h4>
           <div className="flex flex-col gap-2">
            {['Electrical Panel Design', 'Panel Installation', 'AMC Services', 'Turnkey Projects', 'Consultancy'].map(link => (
              <Link key={link} href="/services" className="font-inter text-sm text-[var(--gray-light)] hover:text-[var(--primary)] transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
           <h4 className="font-rajdhani font-bold text-xs tracking-[0.2em] uppercase text-[var(--primary)] mb-4">Products</h4>
           <div className="flex flex-col gap-2">
            {['LT Distribution Panels', 'HT Panels', 'MCC/PCC Panels', 'VCB Panels', 'Bus Ducts'].map(link => (
              <Link key={link} href="/products" className="font-inter text-sm text-[var(--gray-light)] hover:text-[var(--primary)] transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact info */}
        <div>
           <h4 className="font-rajdhani font-bold text-xs tracking-[0.2em] uppercase text-[var(--primary)] mb-4">Contact</h4>
           <div className="flex flex-col gap-3 font-inter text-sm text-[var(--gray-light)]">
             <p><strong className="text-white">Phone:</strong> <br/>+91 90350 27395</p>
             <p><strong className="text-white">Email:</strong> <br/>Priya@adlercontracts.com</p>
             <p><strong className="text-white">Address:</strong> <br/>Plot No 1/A RS No. 43/2A, Saraf Enclave, Azam Nagar Circle, Belagavi – 590 010</p>
           </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-[1280px] mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-inter text-xs text-gray-500">
          <p>© {year} Adler Contracts. All rights reserved.</p>
          <p>Made with ❤️ in India</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
