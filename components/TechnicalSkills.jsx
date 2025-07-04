"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = {
  frontend: [
    { name: "React.js", percentage: 75 },
    { name: "HTML/CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "Next.js", percentage: 75 },
    { name: "Redux", percentage: 70 },
  ],
  backend: [
    { name: "Node.js", percentage: 75 },
    { name: "Express.js", percentage: 80 },
    { name: "MongoDB", percentage: 75 },
    { name: "RESTful APIs", percentage: 80 },
    { name: "Web Security", percentage: 75 },
  ],
  tools: [
    { name: "Git & GitHub", percentage: 80 },
    { name: "Postman", percentage: 75 },
    { name: "Vite", percentage: 70 },
    { name: "ESLint & Prettier", percentage: 75 },
    { name: "Chrome DevTools", percentage: 85 },
  ],
};

const SkillBar = ({ name, percentage }) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        ></motion.div>
      </div>
    </div>
  );
};

const TechnicalSkills = () => {
  return (
    <div
      id="tech"
      className="py-24 px-6 bg-dark-200 text-white relative scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-lg text-gray-400 mb-2 tag inline-block">
            My Skills
          </h4>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8 relative">
              Frontend Development
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mt-2 rounded"></div>
            </h3>

            <div className="space-y-6">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <SkillBar name={skill.name} percentage={skill.percentage} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8 relative">
              Backend Development
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mt-2 rounded"></div>
            </h3>

            <div className="space-y-6">
              {skills.backend.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <SkillBar name={skill.name} percentage={skill.percentage} />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8 relative">
              Tools & Technologies
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mt-2 rounded"></div>
            </h3>

            <div className="space-y-6">
              {skills.tools.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <SkillBar name={skill.name} percentage={skill.percentage} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
