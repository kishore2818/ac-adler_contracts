import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

import Hero from '@/components/home/Hero'
import Ticker from '@/components/home/Ticker'
import AboutSnapshot from '@/components/home/AboutSnapshot'
import Services from '@/components/home/Services'
import Products from '@/components/home/Products'
import Industries from '@/components/home/Industries'
import OngoingProjects from '@/components/home/OngoingProjects'
import WhyUs from '@/components/home/WhyUs'
import Certifications from '@/components/home/Certifications'
import ClientsCarousel from '@/components/home/ClientsCarousel'
import Testimonials from '@/components/home/Testimonials'
import FAQ from '@/components/home/FAQ'
import Enquiry from '@/components/home/Enquiry'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <AboutSnapshot />
        <Services />
        <Products />
        <Industries />
        <OngoingProjects />
        <WhyUs />
        <Certifications />
        <ClientsCarousel />
        <Testimonials />
        <FAQ />
        <Enquiry />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
