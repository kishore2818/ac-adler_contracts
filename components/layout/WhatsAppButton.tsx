'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-[2000] flex items-center justify-end">
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 20 }}
        className="bg-[var(--black)] text-white font-inter text-sm py-2 px-4 rounded-full mr-4 whitespace-nowrap shadow-lg border border-[var(--gray-dark)]"
      >
        Chat with us on WhatsApp!
      </motion.div>

      <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {/* Double Pulse rings */}
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
          className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none"
        />

        {/* Button */}
        <motion.a
          href="https://wa.me/919035027395"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_6px_24px_rgba(37,211,102,0.45)] cursor-pointer"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 2.5C7.648 2.5 2.5 7.648 2.5 14c0 2.032.553 3.93 1.512 5.565L2.5 25.5l6.14-1.488A11.47 11.47 0 0014 25.5c6.352 0 11.5-5.148 11.5-11.5S20.352 2.5 14 2.5z"
              fill="white"
            />
            <path
              d="M19.5 16.875c-.3-.15-1.77-.873-2.045-.972-.273-.099-.472-.15-.67.15-.198.3-.77.972-.944 1.171-.174.2-.348.225-.645.075-.3-.15-1.264-.466-2.407-1.485-.89-.794-1.49-1.774-1.664-2.074-.174-.3-.018-.462.131-.61.134-.133.3-.348.447-.522.15-.175.2-.3.3-.499.1-.2.05-.374-.025-.522-.075-.15-.672-1.62-.92-2.22-.242-.582-.488-.503-.672-.512-.173-.009-.373-.011-.57-.011-.2 0-.522.075-.795.374-.273.3-1.04 1.017-1.04 2.48 0 1.465 1.065 2.88 1.213 3.079.15.2 2.097 3.203 5.083 4.491.71.307 1.264.49 1.696.628.712.226 1.361.194 1.874.117.571-.085 1.77-.723 2.02-1.422.248-.7.248-1.3.173-1.423-.074-.124-.273-.199-.57-.348z"
              fill="#25D366"
            />
          </svg>
        </motion.a>
      </div>
    </div>
  )
}
