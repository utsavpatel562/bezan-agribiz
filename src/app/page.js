"use client"

import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import WhyChooseUs from "./components/WhyChooseUs"

export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutUs/>
    <WhyChooseUs/>
    <HowItWorks/>
    <ContactUs/>
    <Footer/>
    </>
  )
}
