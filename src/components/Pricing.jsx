import React from 'react'
import { motion } from 'framer-motion'
import CountdownTimer from './CountdownTimer.jsx'

const MESSENGER_LINK = 'https://m.me/GiaBaoBooks'
const FACEBOOK_LINK = 'https://www.facebook.com/GiaBaoBooks'

const packageItems = [
  '1 Sách in cao cấp (200 trang, màu sắc nét)',
  'Kho 200 Audio luyện nghe chuẩn giọng bản xứ',
  '🎁 TẶNG KÈM: PDF 500 từ vựng tiếng Đức thông dụng',
]

function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
          <h2 className="font-montserrat font-extrabold text-3xl lg:text-4xl text-[#1E293B] mb-4">Đầu Tư Nhỏ, Bước Tiến Lớn</h2>
          <p className="text-[#475569] text-lg">Sở hữu trọn bộ công cụ học tiếng Đức tối ưu nhất với mức giá không thể tốt hơn.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-10">
          <p className="text-center text-[#475569] text-sm mb-4 uppercase tracking-wider">⏳ Ưu đãi Tháng 3 sẽ kết thúc sau:</p>
          <CountdownTimer />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#F6FAF7] rounded-2xl border-2 border-[#2D6A4F]/30 overflow-hidden shadow-xl">
          <div className="bg-[#2D6A4F] text-white text-center py-2.5 font-montserrat font-bold text-sm tracking-wider">
            BEST SELLER
          </div>
          <div className="p-8">
            <h3 className="font-montserrat font-extrabold text-2xl text-[#1E293B] mb-1">Combo Chinh Phục Tiếng Đức</h3>
            <p className="text-[#475569] text-sm mb-6">Tiết kiệm tối đa thời gian &amp; chi phí học tập</p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-red-400 line-through text-lg">249.000đ</span>
              <span className="font-montserrat font-extrabold text-5xl text-[#F59E0B]">179.000đ</span>
            </div>

            <div className="space-y-3 mb-8">
              {packageItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#2D6A4F] text-lg flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-[#1E293B] text-sm">{item}</span>
                </div>
              ))}
            </div>

            <motion.a href={MESSENGER_LINK} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-montserrat font-bold text-lg py-4 rounded-xl text-center transition-all duration-200 shadow-lg shadow-[#F59E0B]/30 mb-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.504 3.688 7.2V22l3.374-1.853c.9.25 1.854.384 2.938.384 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.007 12.453l-2.548-2.72-4.97 2.72 5.473-5.808 2.61 2.72 4.908-2.72-5.473 5.808z"/>
              </svg>
              Đặt Hàng Ngay - Chỉ 179.000đ
            </motion.a>

            <motion.a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-2 w-full bg-white hover:bg-[#F6FAF7] border border-[#2D6A4F]/20 text-[#2D6A4F] font-semibold py-3 rounded-xl text-center transition-all duration-200 text-sm">
              📘 Hoặc nhắn tin qua Facebook Page
            </motion.a>

            <p className="text-center text-[#475569] text-xs mt-4">
              🛡️ Yên tâm tuyệt đối: Nhận sách, kiểm tra ưng ý rồi mới thanh toán.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
