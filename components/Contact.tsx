'use client'

import { motion } from "framer-motion"

export default function Contact() {
    return (
        <section id="contact" className="py-16 px-4 md:px-8 bg-white dark:bg-gray-800">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                 className="text-3xl md:text-4xl font-bold mb-8 text-center"
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 transition={{duration:0.8}}
                 >
                    Contact Me
                 </motion.h2>
                 <motion.div
                  className="max-w-lg mx-auto text-center"
                  initial={{opacity:0,y:20}}
                  whileInView={{opacity:1,y:0}}
                  transition={{duration:0.8}}
                  >
                    <p className="text-lg mb-4">E-mail:shravansuresh558@gmail.com</p>
                    <p className="text-lg mb-4">Phone:+91 8086602766</p>
                    <p className="text-lg mb-4">Address: Santhalayam, Thekkumbhagam, Tripunthura,Ernakulam,PinCode: 682301</p>
                    <div className="mt-6">
                        <a
                         href="mailto:shravansuresh558@gmail.com"
                         className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                         >
                            Send Email
                         </a>
                    </div>
                  </motion.div>
            </div>
        </section>
    )
}