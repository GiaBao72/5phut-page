import React from 'react'
import { motion } from 'framer-motion'

// Hero Section - Thu hút sự chú ý ngay lập tức
// Layout 2 cột desktop, 1 cột mobile
function Hero() {
  // Xử lý click CTA - scroll đến pricing
  const handleCTA = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center pt-16 pb-12 px-4 bg-navy">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Cột trái - Nội dung chính */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Badge giới thiệu */}
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 mb-6">
              <span className="text-gold text-sm font-semibold">
                Phuong Phap Khoa Hoc
              </span>
              <span className="text-gold text-lg">&#127891;</span>
            </div>

            {/* Tiêu đề chính */}
            <h1 className="font-montserrat font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 text-white">
              Hoc Tieng Duc{' '}
              <span className="text-gold">Chi Voi 5 Phut</span>{' '}
              Moi Ngay
            </h1>

            {/* Subheadline - Mô tả ngắn */}
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Khong can den lop. Khong can thay. Chi can 5 phut moi ngay voi 
              phuong phap Spaced Repetition - ban se nam vung tieng Duc trong 
              vong 3 thang!
            </p>

            {/* Nút CTA chính */}
            <motion.button
              onClick={handleCTA}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gold hover:bg-yellow-500 text-navy font-montserrat font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-gold/30 transition-all duration-200 mb-6"
            >
              Dat Mua Ngay - 179.000d
            </motion.button>

            {/* Trust badge giao hàng */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="text-2xl">&#128666;</span>
              <span>Giao hang toan quoc - Bao dam hoan tien trong 7 ngay</span>
            </div>
          </motion.div>

          {/* Cột phải - Ảnh bìa sách với animation floating */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center"
          >
            {/* Container ảnh với hiệu ứng floating */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Vòng sáng phía sau ảnh */}
              <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-3xl scale-110" />

              {/* Ảnh bìa sách */}
              <img
                src="/5phut-page/bia-sach.jpg"
                alt="5 Phut Tieng Duc - Bia sach"
                className="relative w-64 lg:w-80 xl:w-96 rounded-2xl shadow-2xl shadow-gold/20 object-cover"
                onError={(e) => {
                  // Fallback khi không load được ảnh
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />

              {/* Placeholder khi ảnh lỗi */}
              <div
                className="hidden w-64 lg:w-80 h-80 lg:h-96 bg-surface rounded-2xl border-2 border-gold/30 items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">&#128218;</div>
                  <p className="text-gold font-bold">5 Phut Tieng Duc</p>
                </div>
              </div>

              {/* Badge nổi - số lượng đã bán */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="absolute -top-4 -right-4 bg-gold text-navy font-montserrat font-bold text-xs px-3 py-1.5 rounded-full shadow-lg"
              >
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
