"use client"
import { assets } from "@/assets/assets"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isScroll, setScroll] = useState(false)
  const [isSwitch, setSwitch] = useState(false)
  const menuRef = useRef(null)

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.transform = "translateX(-16rem)"
    }
  }

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.transform = "translateX(16rem)"
    }
  }

  const switchDarkMode = () => {
    setSwitch(!isSwitch)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
      closeMenu()
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full fixed px-5 lg:px-8 py-4 flex justify-between items-center z-50 ${
          isScroll ? "backdrop-blur-lg bg-dark-300/50 shadow-md" : ""
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("top")
          }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-poppins font-bold text-xl">
            <Image src={assets.logo} alt="logo" className="rounded-3xl" />
          </div>
          <span className="font-poppins font-semibold text-lg">
            Akshat<span className="gradient-text">Verma</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 rounded-full px-8 py-3 glass">
          <li className="hover:text-primary transition-colors">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("top")
              }}
            >
              Home
            </a>
          </li>
          <li className="hover:text-primary transition-colors">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("about")
              }}
            >
              About
            </a>
          </li>
          <li className="hover:text-primary transition-colors">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("projects")
              }}
            >
              Projects
            </a>
          </li>
          <li className="hover:text-primary transition-colors">
            <a
              href="#tech"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("tech")
              }}
            >
              Technical
            </a>
          </li>
          <li className="hover:text-primary transition-colors">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
          {/* <button
            onClick={switchDarkMode}
            className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full glass hover:bg-dark-100 transition-colors"
          >
            <Image src={assets.moon_icon} alt="Theme" width={20} height={20} />
          </button> */}

          <button
            onClick={openMenu}
            className="block md:hidden ml-3 cursor-pointer w-8 h-8 flex items-center justify-center rounded-full glass hover:bg-dark-100 transition-colors"
          >
            <Image src={assets.menu_black} alt="Menu" width={20} height={20} />
          </button>
        </div>

        <ul
          ref={menuRef}
          className="flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen glass transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close"
              className="cursor-pointer"
              width={20}
              height={20}
            />
          </div>
          <li className="hover:text-primary transition-colors">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("top")
              }}
            >
              Home
            </a>
          </li>
          <li className="hover:text-primary transition-colors">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("about")
              }}
            >
              About
            </a>
          </li>
          <li className="hover:text-primary transition-colors">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("projects")
              }}
            >
              Projects
            </a>
          </li>
          <li className="hover:text-primary transition-colors">
            <a
              href="#tech"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("tech")
              }}
            >
              Technical
            </a>
          </li>
          <li className="hover:text-primary transition-colors">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </motion.nav>
    </div>
  )
}

export default Navbar
