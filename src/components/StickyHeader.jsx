import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// StickyHeader - Hiện ra khi người dùng scroll xuống 600px
// Fixed top, backdrop blur, animation mượt với Framer Motion
function StickyHeader() {
  // State kiểm soát hiển thị header
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Lắng nghe sự kiện scroll để hiện/ẩn header
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Xử lý click nút Mua Ngay - scroll đến section pricing
  const handleBuyNow = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          // Animation hiện ra từ trên xuống
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-navy/90 border-b border-white/10"
        >
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo bên trái */}
            <span className="font-montserrat font-bold text-lg text-gold">
              Gia Bao Books
            </span>

            {/* Nút Mua Ngay bên phải */}
            <button
              onClick={handleBuyNow}
              className="bg-gold hover:bg-yellow-500 text-navy font-montserrat font-bold px-5 py-2 rounded-lg transition-all duration-200 text-sm"
            >
              Mua Ngay
            </button>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

export default StickyHeader
