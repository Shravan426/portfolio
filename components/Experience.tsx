'use client';
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
    return (
        <section id="experience" className="py-16 px-4 md:px-8 bg-white dark:bg-gray-800">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                 className="text-3xl md:text-4xl font-bold mb-8 text-center"
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 transition={{duration:0.8}}
                 >
                    Experience
                 </motion.h2>
                 <div className="space-y-8">
                    {experiences.map((exp,index) => (
                        <motion.div
                        key={index}
                        className="flex"
                        initial={{opacity:0,x:-50}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:0.8}}
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                {index + 1}
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold">{exp.company}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{exp.role} | {exp.duration}</p>
                                <ul className="list-disc ml-5 mt-2">
                                    {exp.tasks.map((task,i) => (
                                        <li key={i}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                 </div>
            </div>
        </section>
    )
}