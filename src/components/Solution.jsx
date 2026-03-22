import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter.jsx'

// Danh sách tính năng nổi bật của sách
const features = [
  {
    id: 1,
    icon: '&#9654;',
    title: '200 File Audio Chuyen Nghiep',
    description: 'Nghe nguoi ban ngu phat am chuan, luyen tai nghe va phat am dung ngay tu dau.'
  },
  {
    id: 2,
    icon: '&#127941;',
    title: 'Phuong Phap Khoa Hoc',
    description: 'Spaced Repetition - ky thuat ghi nho da duoc chung minh boi khoa hoc than kinh hoc.'
  }
]

// Solution Section - Trình bày giải pháp và lợi ích
function Solution() {
  const ref = useRef(null)
  // Phát hiện khi section vào tầm nhìn
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Tiêu đề section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Badge solution */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 mb-4">
            <span className="text-gold text-sm font-semibold">Giai Phap</span>
          </div>

          <h2 className="font-montserrat font-extrabold text-3xl lg:text-4xl text-white mb-6">
            Hoc Thong Minh Voi{' '}
            <span className="text-gold">Spaced Repetition</span>
          </h2>

          {/* Mô tả phương pháp Spaced Repetition */}
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Spaced Repetition la phuong phap hoc dua tren khoa hoc ve bo nho. 
            Thay vi nhet nhoi mot lan, ban se on tap theo khoang thoi gian tang dan - 
            giup tu vung luu tru sau trong long-term memory.{' '}
            <strong className="text-white">Chi 5 phut moi ngay la du!</strong>
          </p>
        </motion.div>

        {/* Grid 2 tính năng */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="bg-navy rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-colors"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                <span
                  className="text-gold text-2xl"
                  dangerouslySetInnerHTML={{ __html: feature.icon }}
                />
              </div>

              {/* Tiêu đề tính năng */}
              <h3 className="font-montserrat font-bold text-lg text-white mb-2">
                {feature.title}
              </h3>

              {/* Mô tả */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3 AnimatedCounter - con số ấn tượng */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 bg-navy rounded-2xl p-8 border border-gold/20"
        >
          {/* 200 Trang Sách */}
          <AnimatedCounter number={200} label="Trang Sach" />

          {/* 200 File Audio */}
          <AnimatedCounter number={200} label="File Audio" />

          {/* 500+ Từ Vựng */}
          <AnimatedCounter number={500} suffix="+" label="Tu Vung" />
        </motion.div>

      </div>
    </section>
  )
}

export default Solution
