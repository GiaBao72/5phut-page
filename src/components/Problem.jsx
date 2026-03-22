import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Danh sách các vấn đề người học tiếng Đức thường gặp
const painPoints = [
  {
    id: 1,
    title: 'Hoc xong lai quen ngay',
    description: 'Ban da thu nhieu app, nhieu khoa hoc nhung sau 1 tuan la quen sach. Nao bo khong giu duoc tu vung.'
  },
  {
    id: 2,
    title: 'Ton qua nhieu thoi gian',
    description: 'Cac phuong phap truyen thong doi hoi hoc hang tieng moi ngay ma van khong thay tien bo ro rang.'
  },
  {
    id: 3,
    title: 'Kho xay dung thoi quen',
    description: 'Moi lan mo sach ra la thay qua nhieu, khong biet bat dau tu dau, roi bo cuoc sau vai buoi dau tien.'
  }
]

// Component hiển thị một pain point với scroll reveal animation
function PainPointCard({ point, index }) {
  const ref = useRef(null)
  // Phát hiện khi card vào trong tầm nhìn
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      // Animation từ dưới lên khi scroll vào view
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-surface rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-colors"
    >
      {/* Icon X đỏ */}
      <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
        <span className="text-red-500 text-xl font-bold">&#10005;</span>
      </div>

      {/* Tiêu đề pain point */}
      <h3 className="font-montserrat font-bold text-lg text-white mb-2">
        {point.title}
      </h3>

      {/* Mô tả */}
      <p className="text-gray-400 leading-relaxed text-sm">
        {point.description}
      </p>
    </motion.div>
  )
}

// Problem Section - Gây cộng hưởng với vấn đề của người đọc
function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

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
            Ban Co Dang Gap Nhung Van De Nay?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Neu ban da tung co nhung cam giac nay, ban khong don doc dau...
          </p>
        </motion.div>

        {/* Grid 3 pain points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <PainPointCard key={point.id} point={point} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Problem
