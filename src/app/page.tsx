import FeaturedCourses from "@/components/FeaturedCourses"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import Instructors from "@/components/Instructors"
import MusicSchoolTestimonials from "@/components/TestimonialCards"
import UpcomingWebinar from "@/components/UpcomingWebinar"
import WhyChooseUs from "@/components/WhyChooseUs"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinar/>
      <Instructors/>
      <Footer/>
      </main>
  )
}