'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectFilters from "./ProjectFilters";

export default function Projects() {
    const [filter,setFilter] = useState('all')

    const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

    return (
        <section id="projects" className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                 className="text-3xl md:text-4xl font-bold mb-8 text-center"
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 transition={{duration:0.8}}
                 >
                    Projects
                 </motion.h2>
                 <ProjectFilters activeFilter={filter} setFilter={setFilter}/>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project,index) => (
                        <motion.div
                         key={index}
                         className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
                         initial={{opacity:0,y:20}}
                         whileInView={{opacity:1,y:0}}
                         transition={{duration:0.8,delay:index * 0.1}}
                         >
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                            <p className="mt-2 text-sm text-blue-500">{project.technologies.join(',')}</p>
                         </motion.div>
                    ))}
                 </div>
            </div>
        </section>
    )
}