"use client"
import { assets, infoList, toolsData } from "@/assets/assets"
import Image from "next/image"
import React, { useState } from "react"
import { motion } from "framer-motion"

const TabButton = ({ active, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 sm:px-6 py-2 rounded-full font-medium whitespace-nowrap ${
        active
          ? "bg-primary text-white"
          : "text-gray-300 hover:text-white transition-colors"
      }`}
    >
      {children}
    </button>
  )
}

const About = () => {
  const [activeTab, setActiveTab] = useState("about")

  const tabContent = {
    about: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          Hey! I'm Akshat Verma, a passionate and driven Computer Science
          student. With a solid foundation in full-stack development using the
          MERN stack, I enjoy building secure, scalable, and user-friendly web
          applications.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I've developed several impactful projects, including ZipNFile — a file
          conversion and compression platform — and a real-time Log Analysis
          Dashboard that helps monitor and visualize security events from web
          applications.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I'm deeply interested in web security, ethical hacking, and cloud
          security, and I'm constantly learning how to make systems more robust
          and secure. From creating clean, responsive UIs to designing secure
          backend systems, I love every part of the development process.
        </p>
      </div>
    ),
    experience: (
      <div className="space-y-6">
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3">
            Full-Stack Developer Training – Aasan Mart
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Sep 2024 - Nov 2024 | Virtual Internship
          </p>
          <p className="text-gray-300">
            Developed a Tourist Spots app with MongoDB, HTML, CSS, and
            JavaScript, enabling exploration, rating, and saving of
            destinations.
          </p>
        </div>
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3">
            Web Development – Coding Raja Technologies
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Jun 2024 - Jul 2024 | Virtual Internship
          </p>
          <p className="text-gray-300">
            Worked on responsive web development projects, gaining hands-on
            experience with front-end technologies and real-world project
            exposure.
          </p>
        </div>
      </div>
    ),
    education: (
      <div className="space-y-6">
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3">
            Bachelor of Technology in Computer Science with Specialization in
            Cybersecurity & Forensics
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            2022 - 2026 | GLA University, Mathura
          </p>
          <p className="text-gray-300">
            Pursuing a degree focused on cybersecurity, forensics, and advanced
            web development. Actively participating in CTFs, hackathons, and
            security projects.
          </p>
        </div>
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3">
            Web Development – Internshala Trainings
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Jun 2024 - Jul 2024 | Online
          </p>
          <p className="text-gray-300">
            Completed a hands-on training program focused on HTML, CSS,
            JavaScript, and responsive design, along with project-based
            learning.
          </p>
        </div>
      </div>
    ),
  }

  return (
    <div
      id="about"
      className="w-full px-4 sm:px-6 lg:px-[10%] py-24 relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 z-0 bg-dark-300 opacity-50"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-lg text-gray-400 mb-2 tag inline-block">
            Introduction
          </h4>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row flex-wrap items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            className="w-full max-w-[320px] sm:max-w-sm mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden glass-card hover:rotate-2 transition-all duration-500">
                <Image
                  src={assets.user_image}
                  alt="user"
                  width={320}
                  height={480}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-accent to-secondary opacity-20 blur-2xl"></div>
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex overflow-x-auto gap-4 mb-8 pb-2 scrollbar-hide">
              <TabButton
                active={activeTab === "about"}
                onClick={() => setActiveTab("about")}
              >
                About Me
              </TabButton>
              <TabButton
                active={activeTab === "experience"}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </TabButton>
              <TabButton
                active={activeTab === "education"}
                onClick={() => setActiveTab("education")}
              >
                Education
              </TabButton>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {tabContent[activeTab]}
            </motion.div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {infoList.map(({ icon, title, description }, index) => (
                <motion.div
                  key={index}
                  className="glass-card rounded-xl p-6 cursor-pointer"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <Image src={icon} alt={title} width={24} height={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm">{description}</p>
                </motion.div>
              ))}
            </div>

            {/* Tools Grid */}
            <div className="mt-10">
              <h4 className="text-lg font-medium mb-6">Tools I Use</h4>
              <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-4">
                {toolsData.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="glass-card w-12 h-12 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <Image src={tool} alt="tool" width={24} height={24} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
