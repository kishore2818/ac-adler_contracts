import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import PageHero from '@/components/shared/PageHero'
import Enquiry from '@/components/home/Enquiry'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="CONTACT US" 
          subtitle="Get in touch with our engineering experts for quotes, technical support, and partnership inquiries." 
        />
        
        <section className="bg-white py-24">
          <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="space-y-8">
               <div className="bg-[var(--gray-bg)] p-8 border-l-4 border-[var(--primary)]">
                 <h3 className="font-rajdhani text-xl font-bold uppercase mb-2">Head Office – Belagavi</h3>
                 <p className="font-inter text-[var(--gray)]">Plot No 1/A RS No. 43/2A,<br/>Saraf Enclave, Azam Nagar Circle,<br/>Belagavi – 590 010, Karnataka</p>
               </div>
               
               <div className="bg-[var(--gray-bg)] p-8 border-l-4 border-[var(--accent)]">
                 <h3 className="font-rajdhani text-xl font-bold uppercase mb-2">Branch Office – Bengaluru</h3>
                 <p className="font-inter text-[var(--gray)]">Bengaluru, Karnataka</p>
               </div>

               <div className="bg-[var(--gray-bg)] p-8 border-l-4 border-[var(--primary)]">
                 <h3 className="font-rajdhani text-xl font-bold uppercase mb-2">Phone & Email</h3>
                 <p className="font-inter text-[var(--gray)]"><a href="tel:+919035027395" className="hover:text-[var(--primary)] transition-colors">+91 90350 27395</a></p>
                 <p className="font-inter text-[var(--gray)]"><a href="mailto:Priya@adlercontracts.com" className="hover:text-[var(--primary)] transition-colors">Priya@adlercontracts.com</a></p>
               </div>

               <div className="bg-[var(--gray-bg)] p-8 border-l-4 border-[var(--primary)]">
                 <h3 className="font-rajdhani text-xl font-bold uppercase mb-2">Business Hours</h3>
                 <p className="font-inter text-[var(--gray)]">Monday - Saturday: 9:00 AM - 6:30 PM (IST)</p>
                 <p className="font-inter text-[var(--gray)]">Contact: Mrs. Priya Acharya</p>
               </div>
            </div>

            <div className="w-full h-[500px] bg-[var(--gray-bg)] border border-[var(--border)] flex items-center justify-center relative overflow-hidden group">
               {/* Decorative map placeholder */}
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxwYXR0ZXJuIGlkPSdwJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnPjxwYXRoIGQ9J00zMCAwdjMwSDBWMCcgb3BhY2l0eT0nMC4wNScgZmlsbD0nbm9uZScgc3Ryb2tlPSdibGFjaycgc3Ryb2tlLXdpZHRoPScxJy8+PC9wYXR0ZXJuPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J3VybCgjcCknLz48L3N2Zz4=')] opacity-20" />
               <div className="bg-white p-6 shadow-xl border-t-2 border-[var(--primary)] text-center relative z-10">
                 <h4 className="font-rajdhani font-bold text-lg">Belagavi HQ & Bengaluru Branch</h4>
                 <p className="font-inter text-sm text-[var(--gray)] mt-2">Serving Karnataka & Pan-India</p>
               </div>
            </div>

          </div>
        </section>

        <Enquiry />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
