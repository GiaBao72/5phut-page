import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqItems = [
  {
    id: 1,
    question: 'Sách có phù hợp cho người chưa biết một chữ bẻ đôi nào không?',
    answer: 'Hoàn toàn phù hợp! Sách được tinh chỉnh lộ trình cực kỳ thân thiện cho người mới bắt đầu (từ con số 0), đi từ những mẩu chuyện đơn giản và cơ bản nhất.',
  },
  {
    id: 2,
    question: 'Tôi sẽ nhận 200 Audio và file PDF quà tặng bằng cách nào?',
    answer: 'Rất đơn giản. Khi nhận sách, bạn sẽ thấy một mã QR độc quyền. Chỉ cần dùng điện thoại quét mã là truy cập trọn đời vào kho Audio và tải file PDF nét căng về máy.',
  },
  {
    id: 3,
    question: 'Thời gian tôi nhận được sách là bao lâu?',
    answer: 'Sách sẽ được đóng gói cẩn thận và đến tay bạn chỉ trong 2-4 ngày làm việc tùy khu vực. Và đừng quên, Gia Bảo Books tài trợ 100% phí vận chuyển (Freeship)!',
  },
]

function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border border-[#2D6A4F]/10 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F6FAF7] transition-colors">
        <span className="font-montserrat font-semibold text-[#1E293B] pr-4">{item.question}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[#2D6A4F] text-xl flex-shrink-0">⌄</motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="overflow-hidden">
            <div className="px-5 pb-5 text-[#475569] leading-relaxed text-sm border-t border-[#2D6A4F]/10 pt-4">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQ() {
  return (
    <section className="py-20 px-4 bg-[#F6FAF7]">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <h2 className="font-montserrat font-extrabold text-3xl lg:text-4xl text-[#1E293B] mb-4">Giải Đáp Thắc Mắc (FAQ)</h2>
          <p className="text-[#475569]">Những câu hỏi phổ biến nhất từ độc giả</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-3">
          {faqItems.map(item => <FAQItem key={item.id} item={item} />)}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
