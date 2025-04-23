'use client'
import GalaxyScene from './GalaxyScene'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className='relative h-screen flex items-center justify-center overflow-hidden'>
            <GalaxyScene />
            <div className='absolute z-10 text-center px-4'>
                <motion.h1
                    className='text-5xl md:text-7xl font-bold mb-4'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Shravan Suresh
                </motion.h1>
                <motion.p
                    className='text-xl md:text-2xl'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Software Developer | React | Typescript | Next.js
                </motion.p>
            </div>
        </section>
    )
}