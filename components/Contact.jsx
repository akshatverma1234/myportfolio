"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import axios from "axios"
import Image from "next/image"
import { assets } from "@/assets/assets"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("Sending...")

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      )
      if (response.status === 200) {
        setStatus("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      }
    } catch (error) {
      console.error(error)
      setStatus("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      id="contact"
      className="py-24 px-6 bg-dark-200 text-white relative scroll-mt-20"
    >
      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <h4 className="text-lg text-gray-400 mb-2 tag inline-block">
            Get In Touch
          </h4>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-lg mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to
            say hello!
          </p>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Contact info */}
            <div className="md:col-span-2 bg-gradient-to-br from-primary/20 to-accent/20 p-8">
              <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-1">Email</h4>
                    <a
                      href="mailto:vakshat421@gmail.com"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      vakshat421@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-1">Location</h4>
                    <p className="text-gray-300">Agra, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-base font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/akshatverma1234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://leetcode.com/u/vakshat421/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/30 transition-colors"
                  >
                    <Image src={assets.leetcode} alt="tool" className="w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akshat-verma-b559a625a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0H5C3.895 0 3 0.895 3 2v20c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2zM8 19H5v-7h3v7zm-1.5-8.25h-.028C5.843 10.75 5 9.878 5 8.75 5 7.61 5.847 6.75 6.987 6.75c1.16 0 1.992.86 1.992 2.011 0 1.128-.835 2.011-1.993 2.011zm12.5 8.25h-3v-4.5c0-1.06-.388-1.5-1.24-1.5-.625 0-.988.419-.988 1.06v4.44h-3v-7h3v1.44h-.028c.418-.66 1.143-1.073 2.07-1.073 1.895 0 3 1.234 3 3.33v3.93z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="md:col-span-3 bg-dark-100 p-8">
              <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2 "
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="your name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-dark-200 text-gray-300 border border-transparent focus:ring-2 focus:ring-primary border border-white"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abcd@gmail.com"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-dark-200 text-gray-300 border border-transparent focus:ring-2 focus:ring-primary border border-white"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="your message"
                    required
                    rows="5"
                    className="w-full px-4 py-2 rounded-lg bg-dark-200 text-gray-300 border border-transparent focus:ring-2 focus:ring-primary border border-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90  border border-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
              {status && (
                <p className="text-center mt-4 text-gray-300">{status}</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
