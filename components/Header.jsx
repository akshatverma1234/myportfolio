"use client"
import React from "react"
import { motion } from "framer-motion"
import { assets } from "@/assets/assets"
import Image from "next/image"

const Heading = () => {
  const scrollToContact = (e) => {
    e.preventDefault()
    const contact = document.getElementById("contact")
    if (contact) contact.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-6 grid-pattern"
      id="top"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="triangle-decoration"
          style={{
            borderWidth: "0 100px 200px 100px",
            borderColor: "transparent transparent #6366F1 transparent",
            top: "20%",
            left: "10%",
            opacity: "0.15",
            position: "absolute",
          }}
        ></div>
        <div
          className="triangle-decoration"
          style={{
            borderWidth: "200px 0 0 100px",
            borderColor: "transparent transparent transparent #EC4899",
            bottom: "20%",
            right: "10%",
            opacity: "0.15",
            position: "absolute",
          }}
        ></div>
        <div
          className="triangle-decoration"
          style={{
            borderWidth: "150px 150px 0 0",
            borderColor: "#8B5CF6 transparent transparent transparent",
            bottom: "40%",
            left: "30%",
            opacity: "0.15",
            position: "absolute",
          }}
        ></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full text-center flex flex-col items-center relative z-10"
      >
        <motion.div
          className="mb-8 relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white bg-gradient-to-br from-primary to-accent p-1">
            <Image
              src={assets.profile_img}
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
              width={128}
              height={128}
            />
          </div>
          <motion.div
            className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full glass flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            <span className="text-xl">👋</span>
          </motion.div>
        </motion.div>

        <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-medium">
          Hi! I'm{" "}
          <span className="gradient-text font-semibold">Akshat Verma</span>
        </h3>

        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-poppins font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="relative">
            Full Stack Developer
            <div className="absolute h-1 w-full bg-gradient-to-r from-primary to-accent bottom-0 left-0 rounded opacity-80"></div>
          </span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-gray-300 text-lg mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I'm a passionate fullstack developer from Agra, India, specializing in
          creating secure, scalable, and user-friendly web applications.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a
            href="#contact"
            onClick={scrollToContact}
            className="group px-10 py-3 rounded-full text-white bg-gradient-to-r from-primary to-accent hover-glow transition-all duration-300 flex items-center gap-2"
          >
            Contact me
            <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <Image
                src={assets.right_arrow}
                alt="arrow"
                width={20}
                height={20}
              />
            </motion.span>
          </a>

          <a
            href="/resume.pdf"
            download
            className="group px-10 py-3 rounded-full border border-gray-500 hover:border-white flex items-center gap-2 transition-all duration-300 bg-transparent hover:bg-gray-800"
          >
            My Resume
            <motion.span whileHover={{ y: 4 }} transition={{ duration: 0.2 }}>
              <Image
                src={assets.download_icon}
                alt="download"
                width={20}
                height={20}
              />
            </motion.span>
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center mt-16 space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Heading
