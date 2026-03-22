import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  const handleCTA = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center pt-16 pb-12 px-4 bg-[#F6FAF7]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <div className="inline-flex items-center gap-2 bg-[#2D6A4F]/10 border border-[#2D6A4F]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#2D6A4F] text-sm font-semibold">🚀 Phương pháp học thông minh cho người bận rộn</span>
            </div>

            <h1 className="font-montserrat font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 text-[#1E293B]">
              Chinh Phục Tiếng Đức{' '}
              <span className="text-[#2D6A4F]">Chỉ Với 5 Phút</span>{' '}
              Mỗi Ngày
            </h1>

            <p className="text-[#475569] text-lg mb-8 leading-relaxed">
              Không nhồi nhét ngữ pháp khô khan. Ghi nhớ tự nhiên, sâu sắc qua các mẩu chuyện ngắn và phương pháp Lặp lại ngắt quãng (Spaced Repetition).
            </p>

            <motion.button onClick={handleCTA} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-montserrat font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-[#F59E0B]/30 transition-all duration-200 mb-4 block w-fit">
              Mua Ngay - Nhận Ưu Đãi
            </motion.button>

            <motion.a href="https://m.me/GiaBaoBooks" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-[#2D6A4F]/10 hover:bg-[#2D6A4F]/20 border border-[#2D6A4F]/30 text-[#2D6A4F] font-semibold px-6 py-3 rounded-xl transition-all duration-200 mb-6">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.504 3.688 7.2V22l3.374-1.853c.9.25 1.854.384 2.938.384 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.007 12.453l-2.548-2.72-4.97 2.72 5.473-5.808 2.61 2.72 4.908-2.72-5.473 5.808z"/>
              </svg>
              Nhắn tin qua Messenger
            </motion.a>

            <div className="flex items-center gap-2 text-[#475569] text-sm">
              <span>🚚</span>
              <span>Miễn phí giao hàng toàn quốc</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }} className="flex justify-center">
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="relative">
              <div className="absolute inset-0 bg-[#2D6A4F]/10 rounded-2xl blur-3xl scale-110" />
              <img src="/5phut-page/bia-sach.jpg" alt="Sách 5 Phút Tiếng Đức" loading="lazy"
                className="relative w-64 lg:w-80 xl:w-96 rounded-2xl shadow-2xl shadow-[#2D6A4F]/20 object-cover" />
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: 'spring' }}
                className="absolute -top-4 -right-4 bg-[#F59E0B] text-white font-montserrat font-bold text-xs px-3 py-1.5 rounded-full shadow-lg">
                HOT!
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
