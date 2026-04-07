import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import PageHero from '@/components/shared/PageHero'
import AboutSnapshot from '@/components/home/AboutSnapshot'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="ABOUT ADLER" 
          subtitle="Building the backbone of India's electrical infrastructure for over 10 years with uncompromising quality." 
        />
        {/* Reuse the home snapshot as part of the about page for simplicity and consistency */}
        <AboutSnapshot />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
