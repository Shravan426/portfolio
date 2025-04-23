'use client';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export default function Skills() {
    return (
        <section id="skills" className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Skills
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ 
                                scale: 1.05, 
                                rotate: 0, 
                                transition: { duration: 0 }
                            }}
                            transition={{ duration: 0.5, delay: index * 0 }}
                        >
                            <span>{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}