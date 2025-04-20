import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import TechnicalSkills from "@/components/TechnicalSkills"

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <TechnicalSkills />
      <Contact />
      <Footer />
    </>
  )
}
