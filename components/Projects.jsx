"use client"
import React from "react"
import { motion } from "framer-motion"
import { assets, projects } from "@/assets/assets"
import Image from "next/image"

const Projects = () => {
  return (
    <div
      id="projects"
      className="py-24 px-6 bg-dark-300 text-white relative scroll-mt-20"
    >
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-lg text-gray-400 mb-2 tag inline-block">
            My Work
          </h4>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card group rounded-2xl overflow-hidden relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="h-48 bg-dark-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  {project.demoLink != "#" ||
                  project.title == "Log Analysis Tool for Security Events" ? (
                    <Image src={project.image} alt="image" />
                  ) : (
                    <img src={project.image} alt="image" className="w-26" />
                  )}
                </div>

                {index === 0 && (
                  <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.demoLink !== "#" ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors group-hover:underline cursor-pointer"
                  >
                    <span>View Live Demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-gray-500 cursor-not-allowed">
                    <span>Demo Unavailable</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="https://github.com/akshatverma1234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full glass hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300"
          >
            <span>View All Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
