'use client'

import React from 'react'

export default function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative pt-[140px] pb-[80px] overflow-hidden border-b border-[var(--border)]">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/panel-2.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* White frost overlay */}
        <div className="absolute inset-0 bg-white/88 backdrop-blur-[3px]" />
        {/* Radial tint */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary-glow)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-8 relative z-10 text-center">
        <h1 className="font-bebas text-[clamp(40px,6vw,72px)] text-[var(--accent)] tracking-[0.04em] leading-[0.95] mb-4">
          {title} <span className="text-[var(--primary)]">.</span>
        </h1>
        {subtitle && (
          <p className="font-inter text-[var(--gray)] max-w-2xl mx-auto text-lg font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

