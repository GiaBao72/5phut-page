import React from 'react'
import { motion } from 'framer-motion'
import StickyHeader from './components/StickyHeader.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Solution from './components/Solution.jsx'
import InsideBook from './components/InsideBook.jsx'
import Pricing from './components/Pricing.jsx'
import Author from './components/Author.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

// Nút Messenger cố định góc dưới phải màn hình
function MessengerFAB() {
  return (
    <motion.a
      href="https://m.me/GiaBaoBooks"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#2D6A4F] hover:bg-[#1B4D37] rounded-full shadow-lg shadow-[#2D6A4F]/40 flex items-center justify-center transition-colors duration-200"
      title="Nhắn tin qua Messenger"
    >
      {/* Hiệu ứng ping xung quanh */}
      <span className="absolute w-full h-full rounded-full bg-[#2D6A4F] animate-ping opacity-30" />
      <svg className="w-7 h-7 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.504 3.688 7.2V22l3.374-1.853c.9.25 1.854.384 2.938.384 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.007 12.453l-2.548-2.72-4.97 2.72 5.473-5.808 2.61 2.72 4.908-2.72-5.473 5.808z"/>
      </svg>
    </motion.a>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#F6FAF7]">
      <StickyHeader />
      <Hero />
      <Problem />
      <Solution />
      <InsideBook />
      <Pricing />
      <Author />
      <FAQ />
      <Footer />

      {/* Nút Messenger FAB - cố định góc dưới phải */}
      <MessengerFAB />
    </div>
  )
}

export default App
