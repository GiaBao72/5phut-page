import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Danh sách các chủ đề trong sách
const bookChapters = [
  'Chuong 1: Chao hoi va gioi thieu ban than',
  'Chuong 2: Gia dinh va moi quan he',
  'Chuong 3: Mau sac, so dem, thoi gian',
  'Chuong 4: Di lai va phuong tien',
  'Chuong 5: An uong va mua sam'
]

// Delay animation cho mỗi soundwave bar (ms)
const soundwaveDelays = [0, 0.15, 0.3, 0.15, 0]

// InsideBook Section - Giới thiệu nội dung bên trong sách
function InsideBook() {
  // State điều khiển audio player demo
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  // Toggle play/pause audio demo
  const togglePlay = () => setIsPlaying(!isPlaying)

  return (
    <section className="py-20 px-4 bg-navy">
      <div className="max-w-6xl mx-auto">

        {/* Tiêu đề section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-montserrat font-extrabold text-3xl lg:text-4xl text-white mb-4">
            Ben Trong Cuon Sach
          </h2>
          <p className="text-gray-400 text-lg">
            Kham pha noi dung chi tiet va trai nghiem audio chuyen nghiep
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Cột trái - Mockup sách với danh sách chương */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Mockup sách */}
            <div className="bg-surface rounded-2xl p-6 border border-gold/20 mb-6">
              <div className="flex items-center gap-3 mb-4">
                {/* Icon sách */}
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                  <span className="text-gold text-xl">&#128218;</span>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-white text-sm">
                    5 Phut Tieng Duc
                  </h3>
                  <p className="text-gray-400 text-xs">200 trang + 200 audio</p>
                </div>
              </div>

              {/* Danh sách chương */}
              <div className="space-y-3">
                {bookChapters.map((chapter, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {/* Số chương */}
                    <span className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center text-gold text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    {chapter}
                  </div>
                ))}
                {/* Hiển thị còn nhiều chương khác */}
                <p className="text-gray-500 text-xs pl-9">... va nhieu chu de khac</p>
              </div>
            </div>
          </motion.div>

          {/* Cột phải - Audio Player Demo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Card Audio Player */}
            <div className="bg-surface rounded-2xl p-8 border border-gold/20">
              <h3 className="font-montserrat font-bold text-white mb-2">
                Nghe Thu Audio
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Bai 1: Chao hoi co ban trong tieng Duc
              </p>

              {/* Soundwave Animation */}
              <div className="flex items-center justify-center gap-1.5 h-16 mb-6">
                {soundwaveDelays.map((delay, index) => (
                  <motion.div
                    key={index}
                    className="w-2 bg-gold rounded-full"
                    // Animation soundwave - chỉ chạy khi đang play
                    animate={
                      isPlaying
                        ? {
                            scaleY: [0.3, 1, 0.3],
                            height: ['12px', '48px', '12px']
                          }
                        : { height: '12px', scaleY: 0.3 }
                    }
                    transition={
                      isPlaying
                        ? {
                            duration: 0.8,
                            delay: delay,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }
                        : { duration: 0.3 }
                    }
                    style={{ height: '12px' }}
                  />
                ))}
              </div>

              {/* Progress bar giả */}
              <div className="w-full h-1.5 bg-navy rounded-full mb-4">
                <motion.div
                  className="h-full bg-gold rounded-full"
                  animate={isPlaying ? { width: '60%' } : { width: '0%' }}
                  transition={{ duration: 3, ease: 'linear' }}
                />
              </div>

              {/* Thời gian */}
              <div className="flex justify-between text-xs text-gray-400 mb-6">
                <span>0:00</span>
                <span>0:45</span>
              </div>

              {/* Nút Play/Pause */}
              <button
                onClick={togglePlay}
                className="w-full bg-gold hover:bg-yellow-500 text-navy font-montserrat font-bold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span className="text-xl">
                  {isPlaying ? '&#9646;&#9646;' : '&#9654;'}
                </span>
                {isPlaying ? 'Dang phat...' : 'Nghe Thu'}
              </button>

              {/* Thông tin thêm */}
              <p className="text-center text-gray-500 text-xs mt-3">
                * Day la demo. Sach thuc co 200 file audio day du
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default InsideBook
