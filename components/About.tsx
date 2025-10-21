'use client';
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-16 px-4 md:px-8 bg-white dark:bg-gray-800">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    About Me
                </motion.h2>
                <div className="flex flex-col items-center gap-10">
                    <motion.img
                        src="/images/profile.jpg"
                        alt="Shravan Suresh profile photo"
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-300 dark:border-blue-900 shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                        transition={{ duration: 0.8, hover: { duration: 0.3 } }}
                    />
                    <motion.p
                        className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 text-center max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        I’m Shravan Suresh, a passionate software developer with a Master’s in Computer Applications (MCA) from Nirmala College, Muvattupuzha (2023). With experience at Technovia Info Solutions and as a FrontEnd Developer Intern at Gewan InfoTech Solutions, I specialize in building robust web applications using React, TypeScript, Next.js, and more. My projects, like the Online Library Management System and Semlin Language Learning App, reflect my commitment to solving real-world problems through technology. I’m also a music enthusiast, violinist, and football lover, always eager to learn and take on new challenges.
                    </motion.p>
                    <motion.div
                        className="flex flex-col items-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <a
                            href="/Shravan Suresh (1).pdf"
                            download
                            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}