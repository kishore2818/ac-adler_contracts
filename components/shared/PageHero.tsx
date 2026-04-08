'use client'

import React from 'react'

export default function PageHero({ 
  title, 
  subtitle, 
  image = "/images/hero/panel-2.jpg" 
}: { 
  title: string; 
  subtitle?: string; 
  image?: string; 
}) {
  return (
    <section className="relative pt-[140px] pb-[80px] overflow-hidden border-b border-[var(--border)]">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Dark translucent overlay instead of solid white */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Radial tint to preserve the brand glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary-glow)_0%,transparent_70%)] opacity-50" />
      </div>

      <div className="w-full mx-auto px-8 relative z-10 text-center">
        <h1 className="font-bebas text-[clamp(40px,6vw,72px)] text-white tracking-[0.04em] leading-[0.95] mb-4">
          {title} <span className="text-[var(--primary)]">.</span>
        </h1>
        {subtitle && (
          <p className="font-inter text-gray-200 max-w-2xl mx-auto text-lg font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

