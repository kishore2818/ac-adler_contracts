import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import PageHero from '@/components/shared/PageHero'
import ServicesSection from '@/components/home/Services'

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="OUR SERVICES" 
          subtitle="Comprehensive electrical contracting solutions from design and planning to execution and maintenance." 
        />
        <ServicesSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
