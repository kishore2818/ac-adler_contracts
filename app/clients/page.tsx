import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import PageHero from '@/components/shared/PageHero'
import ClientsCarousel from '@/components/home/ClientsCarousel'
import { clients } from '@/data/clients'

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="OUR CLIENTS" 
          subtitle="We are incredibly proud to partner with some of India's most respected organizations." 
        />
        
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-8">
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
               {clients.map((client, i) => (
                 <div key={i} className="aspect-square bg-[var(--gray-bg)] border border-[var(--border)] flex flex-col items-center justify-center p-4 hover:border-[var(--primary)] hover:shadow-lg transition-all group">
                   <span className="font-bebas text-2xl text-[var(--black)] group-hover:text-[var(--primary)] transition-colors text-center">{client.name}</span>
                   <span className="font-inter text-[10px] text-[var(--gray-light)] uppercase tracking-wider text-center mt-2">{client.industry}</span>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Reuse the automated carousel as an infinite showcase at the bottom */}
        <ClientsCarousel />

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
