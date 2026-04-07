import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import PageHero from '@/components/shared/PageHero'
import { services } from '@/data/services'
import Link from 'next/link'

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main>
        <PageHero title={service.title} subtitle="Detailed breakdown of our engineering capabilities." />
        
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2">
               <div className="text-6xl text-[var(--primary)] mb-8 bg-[var(--primary-soft)] w-24 h-24 flex items-center justify-center rounded-sm">
                 {service.icon}
               </div>
               <h2 className="font-bebas text-4xl mb-4 text-[var(--black)]">What we do</h2>
               <p className="font-inter text-lg text-[var(--gray)] leading-relaxed mb-8">
                 {service.description}
               </p>

               <h3 className="font-rajdhani text-2xl font-bold uppercase mb-4 text-[var(--black)]">Key Sub-Services</h3>
               <ul className="space-y-3 mb-10">
                 {service.subServices.map((sub, i) => (
                   <li key={i} className="flex items-center gap-3 font-inter text-[var(--gray-dark)]">
                     <span className="w-2 h-2 bg-[var(--primary)] rounded-full"></span>
                     {sub}
                   </li>
                 ))}
               </ul>

               <h3 className="font-rajdhani text-2xl font-bold uppercase mb-4 text-[var(--black)]">Target Industries</h3>
               <div className="flex flex-wrap gap-3">
                 {service.industries.map((ind, i) => (
                   <span key={i} className="px-4 py-2 border border-[var(--border)] rounded-sm font-rajdhani uppercase tracking-wide text-sm font-bold text-[var(--gray)] bg-[var(--gray-bg)]">
                     {ind}
                   </span>
                 ))}
               </div>
            </div>

            <div>
              <div className="bg-[var(--black)] text-white p-8 rounded-sm sticky top-[100px] border-t-4 border-[var(--primary)]">
                <h3 className="font-bebas text-3xl mb-4">Need this service?</h3>
                <p className="font-inter text-sm text-[var(--gray-light)] mb-6">Contact our engineering team to outline your project scope and get a detailed execution timeline.</p>
                <Link href="/contact" className="block w-full text-center bg-[var(--primary)] font-rajdhani uppercase tracking-widest font-bold py-3 hover:bg-[var(--primary-dark)] transition-colors rounded-sm">
                  Request a Quote
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
