import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter.jsx'

const features = [
  { id: 1, icon: '📖', title: 'Học qua ngữ cảnh thực tế', description: 'Mỗi trang sách là 1 mẩu chuyện ngắn kèm 2 từ mới cốt lõi. Hiểu sâu, nhớ lâu, có thể áp dụng dùng ngay lập tức.' },
  { id: 2, icon: '🧠', title: 'Kỹ thuật Spaced Repetition', description: 'Ứng dụng cơ chế Lặp lại ngắt quãng, tự động nhắc nhở não bộ ôn tập lại kiến thức ngay trước khi bạn kịp quên.' },
]

function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2D6A4F]/10 border border-[#2D6A4F]/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#2D6A4F] text-sm font-semibold">💡 Giải Pháp Đột Phá</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl lg:text-4xl text-[#1E293B] mb-6">
            Học Ít Hơn, Nhớ Lâu Hơn Cùng{' '}
            <span className="text-[#2D6A4F]">"5 Phút Tiếng Đức"</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-3xl mx-auto leading-relaxed">
            Cuốn sách được thiết kế đặc biệt giúp bạn hấp thụ tiếng Đức một cách thụ động, tự nhiên như tiếng mẹ đẻ.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div key={feature.id} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="bg-[#F6FAF7] rounded-2xl p-6 border border-[#2D6A4F]/10 hover:border-[#2D6A4F]/30 transition-colors">
              <div className="w-12 h-12 bg-[#2D6A4F]/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="font-montserrat font-bold text-lg text-[#1E293B] mb-2">{feature.title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 bg-[#2D6A4F] rounded-2xl p-8">
          <AnimatedCounter number={200} label="Trang Sách" />
          <AnimatedCounter number={200} label="Audio Luyện Nghe" />
          <AnimatedCounter number={500} suffix="+" label="Từ Vựng Cốt Lõi" />
        </motion.div>
      </div>
    </section>
  )
}

export default Solution
