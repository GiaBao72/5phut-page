import React from 'react'
import { motion } from 'framer-motion'

// Link Facebook của Gia Bảo Books
const FACEBOOK_LINK = 'https://www.facebook.com/GiaBaoBooks'

// Footer - Kêu gọi hành động cuối cùng và thông tin liên hệ
function Footer() {
  // Scroll đến pricing section khi click CTA
  const handleCTA = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-navy border-t border-white/10 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* CTA cuối trang */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-montserrat font-extrabold text-2xl lg:text-3xl text-white mb-4">
            San sang bat dau hanh trinh tieng Duc?
          </h2>
          <p className="text-gray-400 mb-6">
            Dat mua ngay hom nay voi gia uu dai chi con trong thang 3
          </p>

          {/* Nút CTA màu gold */}
          <motion.button
            onClick={handleCTA}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gold hover:bg-yellow-500 text-navy font-montserrat font-bold text-lg px-10 py-4 rounded-xl shadow-lg shadow-gold/30 transition-all duration-200"
          >
            Dat Mua Ngay - 179.000d
          </motion.button>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Logo */}
          <p className="font-montserrat font-bold text-gold text-lg mb-3">
            Gia Bao Books
          </p>

          {/* Link Facebook */}
          <a
            href={FACEBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric-blue hover:text-blue-400 text-sm transition-colors mb-4 inline-block"
          >
            Facebook: facebook.com/GiaBaoBooks
          </a>

          {/* Copyright */}
          <p className="text-gray-600 text-xs mt-4">
            &copy; {new Date().getFullYear()} Gia Bao Books. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
