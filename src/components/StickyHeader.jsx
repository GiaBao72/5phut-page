import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -80, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-[#2D6A4F]/10 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-montserrat font-bold text-lg text-[#2D6A4F]">GiaBaoBooks</span>
            <a href="https://m.me/GiaBaoBooks" target="_blank" rel="noopener noreferrer"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-montserrat font-bold px-5 py-2 rounded-lg transition-all duration-200 text-sm">
              Mua Ngay
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

export default StickyHeader
