"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { assets } from "@/assets/assets"

const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-dark-300 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#top" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-poppins font-bold text-xl">
                <Image src={assets.logo} alt="logo" className="rounded-3xl" />
              </div>
              <span className="font-poppins font-semibold text-lg">
                Akshat<span className="gradient-text">Verma</span>
              </span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Full-stack developer specializing in creating secure, scalable,
              and user-friendly web applications.
            </p>
          </div>

          <div>
            <div className="flex gap-6">
              <motion.a
                href="https://github.com/akshatverma1234"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
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
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/akshat-verma-b559a625a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.36 15h-1.7v-5.5h1.7V17zm-.85-6.55a.91.91 0 01-.88-.93.91.91 0 01.88-.93.91.91 0 01.88.93.91.91 0 01-.88.93zM17 17h-1.7v-3c0-.66-.25-1.1-1-1.1-.7 0-1 .5-1 1.1v3h-1.7v-5.5h1.7v.7a1.8 1.8 0 011.5-.8c1.5 0 2.2.9 2.2 2.5V17z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Akshat Verma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
