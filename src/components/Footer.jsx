import React from 'react'
import { motion } from 'framer-motion'

const FACEBOOK_LINK = 'https://www.facebook.com/GiaBaoBooks'
const MESSENGER_LINK = 'https://m.me/GiaBaoBooks'

function Footer() {
  return (
    <footer className="bg-[#1E293B] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="font-montserrat font-extrabold text-2xl lg:text-3xl text-white mb-2">Gia Bảo Books</h2>
          <p className="text-gray-400 mb-8">Lan tỏa tri thức, phá vỡ rào cản ngôn ngữ.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a href={MESSENGER_LINK} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-montserrat font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-[#F59E0B]/20 transition-all duration-200">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.504 3.688 7.2V22l3.374-1.853c.9.25 1.854.384 2.938.384 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.007 12.453l-2.548-2.72-4.97 2.72 5.473-5.808 2.61 2.72 4.908-2.72-5.473 5.808z"/></svg>
              Mua Ngay - Chỉ 179k
            </motion.a>
          </div>
        </motion.div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex justify-center gap-4 mb-4">
            <a href={MESSENGER_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Messenger</a>
            <span className="text-white/20">|</span>
            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Facebook</a>
          </div>
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Gia Bảo Books. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
