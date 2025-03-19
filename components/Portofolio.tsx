"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import project1 from "@/assets/proj1.png"
import project2 from "@/assets/proj2.png"
import { useMotionTemplate, useMotionValue, motion, animate, easeInOut } from 'framer-motion';

const projects = [
  {
    id: 1, 
    year: 2025, 
    title:"Perfume Advertisement", 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 
    image: project1
  },
  {
    id: 2, 
    year: 2025, 
    title:"Course Website", 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    image: project2 
  },
]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "DD335C"]


export const Portofolio = () => {
  
  const [selectedProject, setSelectedProject] = useState(projects[0])
  
  const color = useMotionValue(COLORS_TOP[0])

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: easeInOut,
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    });
  }, [])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color}`;

  return (
    <motion.section id='#portofolio' className='mx-auto py-32 text-white' style={{backgroundImage}}>
      <div className="max-w-7xl grid lg:grid-cols-2 gap-12 px-15">
        <div>
          <h2 className='text-6xl font-bold mb-10'>Selected <span className='text-purple-400'>Project</span></h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => {setSelectedProject(project)}}
              className='cursor-pointer mb-8 group'
            >
              <p className='text-gray-400 text-lg mb-2'>{project.year}</p>
              <h3 className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors
                  ${selectedProject.id === project.id ? "text-purple-200" : ""} duration-300`}>
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <div className='border-b-2 border-purple-200 my-4'></div>
              )}
              {selectedProject.id === project.id && (
               <p className='text-gray-400 transition-all duration-500 ease-in-out'>
                  {project.description}
                </p>
              )}
            </div>
          ))}
      </div>
      <Image 
          src={selectedProject.image.src}
          alt={selectedProject.title}
          className='rounded-xl shadow-lg transition-opacity duration-500 ease-in-out mx-auto'
          width={400}
          height={200}
        />
      </div>
    </motion.section>
  )
}
