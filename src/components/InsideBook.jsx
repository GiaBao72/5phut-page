import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const soundwaveDelays = [0, 0.15, 0.3, 0.15, 0]

function InsideBook() {
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 px-4 bg-[#F6FAF7]">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="font-montserrat font-extrabold text-3xl lg:text-4xl text-[#1E293B] mb-4">Trải Nghiệm Thực Tế Bên Trong Sách</h2>
          <p className="text-[#475569] text-lg">Sự kết hợp hoàn hảo giữa Đọc hiểu và Nghe phát âm chuẩn để phát triển toàn diện.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-white rounded-2xl p-6 border border-[#2D6A4F]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#2D6A4F]/10 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📚</span>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#1E293B] text-sm">5 Phút Tiếng Đức</h3>
                  <p className="text-[#475569] text-xs">200 trang + 200 audio</p>
                </div>
              </div>
              <div className="bg-[#F6FAF7] rounded-xl p-4 border border-[#2D6A4F]/10">
                <p className="text-[#2D6A4F] text-xs font-bold mb-2">TRANG MẪU — Bài 1</p>
                <p className="text-[#1E293B] text-sm leading-relaxed mb-3"><em>"Anna geht zum Supermarkt. Sie kauft Brot und Milch."</em></p>
                <p className="text-[#475569] text-xs italic mb-3">(Anna đi đến siêu thị. Cô ấy mua bánh mì và sữa.)</p>
                <div className="border-t border-[#2D6A4F]/10 pt-3 grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-lg p-2 border border-[#2D6A4F]/10">
                    <p className="text-[#2D6A4F] text-xs font-bold">der Supermarkt</p>
                    <p className="text-[#475569] text-xs">siêu thị</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-[#2D6A4F]/10">
                    <p className="text-[#2D6A4F] text-xs font-bold">das Brot</p>
                    <p className="text-[#475569] text-xs">bánh mì</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="bg-white rounded-2xl p-8 border border-[#2D6A4F]/10 shadow-sm">
              <h3 className="font-montserrat font-bold text-[#1E293B] mb-2">🎧 Nghe thử: Câu chuyện "Buổi sáng ở Berlin"</h3>
              <p className="text-[#475569] text-sm mb-6">Giọng đọc chuẩn bản xứ, rõ ràng, dễ nghe</p>
              <div className="flex items-center justify-center gap-1.5 h-16 mb-6">
                {soundwaveDelays.map((delay, index) => (
                  <motion.div key={index} className="w-2 bg-[#2D6A4F] rounded-full"
                    animate={isPlaying ? { height: ['12px', '48px', '12px'] } : { height: '12px' }}
                    transition={isPlaying ? { duration: 0.8, delay, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
                    style={{ height: '12px' }} />
                ))}
              </div>
              <div className="w-full h-1.5 bg-[#F6FAF7] rounded-full mb-4">
                <motion.div className="h-full bg-[#2D6A4F] rounded-full" animate={isPlaying ? { width: '60%' } : { width: '0%' }} transition={{ duration: 3, ease: 'linear' }} />
              </div>
              <div className="flex justify-between text-xs text-[#475569] mb-6"><span>0:00</span><span>0:45</span></div>
              <button onClick={() => setIsPlaying(!isPlaying)}
                className="w-full bg-[#2D6A4F] hover:bg-[#1B4D37] text-white font-montserrat font-bold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
                <span>{isPlaying ? '⏸' : '▶'}</span>
                {isPlaying ? 'Đang phát...' : 'Nghe Thử'}
              </button>
              <p className="text-center text-[#475569]/60 text-xs mt-3">* Demo. Sách thực có 200 file audio đầy đủ</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InsideBook
