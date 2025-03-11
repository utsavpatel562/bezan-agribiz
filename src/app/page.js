"use client"

import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import OurGallery from "./components/OurGallery"
import WhyChooseUs from "./components/WhyChooseUs"

export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutUs/>
    <WhyChooseUs/>
    <OurGallery/>
    <HowItWorks/>
    <ContactUs/>
    <Footer/>
    </>
  )
}
