import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const painPoints = [
  { id: 1, title: 'Học trước, quên sau', description: 'Nhồi nhét từ vựng vô tội vạ nhưng thiếu ngữ cảnh khiến não bộ nhanh chóng đào thải chỉ sau vài ngày.' },
  { id: 2, title: 'Ám ảnh ngữ pháp', description: 'Bị ngợp bởi các quy tắc phức tạp, rườm rà làm mất đi sự hứng thú và động lực học tự nhiên.' },
  { id: 3, title: 'Quá thiếu thời gian', description: 'Công việc và học tập bận rộn khiến bạn không thể vắt kiệt sức ngồi hàng giờ đồng hồ trước bàn giấy.' },
]

function PainPointCard({ point, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-4">
        <span className="text-red-500 text-xl font-bold">✕</span>
      </div>
      <h3 className="font-montserrat font-bold text-lg text-[#1E293B] mb-2">{point.title}</h3>
      <p className="text-[#475569] leading-relaxed text-sm">{point.description}</p>
    </motion.div>
  )
}

function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <section className="py-20 px-4 bg-[#F6FAF7]">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="font-montserrat font-extrabold text-3xl lg:text-4xl text-[#1E293B] mb-4">
            Học tiếng Đức mãi vẫn "giậm chân tại chỗ"?
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto">Nếu bạn đã từng có những cảm giác này, bạn không đơn độc đâu...</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => <PainPointCard key={point.id} point={point} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export default Problem
