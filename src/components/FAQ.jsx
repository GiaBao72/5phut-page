import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Danh sách câu hỏi thường gặp
const faqItems = [
  {
    id: 1,
    question: 'Sach co phu hop voi nguoi moi bat dau hoan toan khong?',
    answer: 'Co, tuyet doi phu hop! Sach duoc thiet ke dac biet cho nguoi bat dau tu zero. Khong can biet bat ky kien thuc tieng Duc nao truoc. Chung toi bat dau tu nhung tu va cau don gian nhat, tung buoc mot.'
  },
  {
    id: 2,
    question: 'Lam sao de nhan file audio sau khi mua?',
    answer: 'Sau khi dat mua qua Facebook va thanh toan, ban se nhan duoc link tai 200 file audio qua Messenger ngay lap tuc. File dinh dang MP3, tuong thich voi moi thiet bi.'
  },
  {
    id: 3,
    question: 'Co bao hanh hoac doi tra khong?',
    answer: 'Co! Chung toi bao dam hoan tien 100% trong vong 7 ngay neu ban khong hai long voi san pham. Day la cam ket cua chung toi voi chat luong - ban mua hoac la thich, khong thi hoan tien toan bo.'
  }
]

// Component Accordion cho từng câu hỏi
function FAQItem({ item }) {
  // State điều khiển mở/đóng accordion
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      {/* Nút câu hỏi - click để toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-montserrat font-semibold text-white pr-4">
          {item.question}
        </span>

        {/* Icon mũi tên xoay khi mở */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gold text-xl flex-shrink-0"
        >
          &#8964;
        </motion.span>
      </button>

      {/* Nội dung trả lời - animate height */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-gray-400 leading-relaxed text-sm border-t border-white/10 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// FAQ Section - Giải đáp thắc mắc phổ biến
function FAQ() {
  return (
    <section className="py-20 px-4 bg-surface">
      <div className="max-w-3xl mx-auto">

        {/* Tiêu đề section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-montserrat font-extrabold text-3xl lg:text-4xl text-white mb-4">
            Cau Hoi Thuong Gap
          </h2>
          <p className="text-gray-400">
            Nhung thac mac pho bien nhat cua khach hang
          </p>
        </motion.div>

        {/* Danh sách câu hỏi accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          {faqItems.map(item => (
            <FAQItem key={item.id} item={item} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default FAQ
