'use client'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
}

export default function Template({ children } : { children: React.ReactNode } ) {
  window.scrollTo(0, 0)
  return (
    <main>
      {children}
    </main>
  )
}