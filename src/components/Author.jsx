import React from 'react'
import { motion } from 'framer-motion'

const FACEBOOK_LINK = 'https://www.facebook.com/GiaBaoBooks'
const MESSENGER_LINK = 'https://m.me/GiaBaoBooks'

function Author() {
  return (
    <section className="py-20 px-4 bg-[#F6FAF7]">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 lg:p-12 border border-[#2D6A4F]/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-24 h-24 bg-[#2D6A4F]/10 rounded-full flex items-center justify-center mb-4 border-2 border-[#2D6A4F]/20">
                <span className="text-4xl">📚</span>
              </div>
              <h3 className="font-montserrat font-bold text-[#1E293B] text-lg mb-1">GiaBaoBooks</h3>
              <p className="text-[#475569] text-sm">Chắp cánh ước mơ tri thức</p>
            </div>
            <div className="lg:col-span-2">
              <h2 className="font-montserrat font-extrabold text-2xl lg:text-3xl text-[#1E293B] mb-4">Câu Chuyện Từ GiaBaoBooks</h2>
              <p className="text-[#475569] leading-relaxed mb-4">
                Chúng tôi thấu hiểu những rào cản to lớn của người Việt khi bắt đầu tiếp cận một ngôn ngữ mới như tiếng Đức. "5 Phút Tiếng Đức" ra đời không chỉ đơn thuần là một ấn phẩm, mà là một giải pháp thực chiến, được đúc kết để tối ưu hóa thời gian của bạn.
              </p>
              <p className="text-[#475569] leading-relaxed mb-6">
                Với khao khát mang đến những tài liệu chất lượng và dễ tiếp cận nhất, GiaBaoBooks cam kết sẽ luôn đồng hành cùng bạn trên mọi chặng đường chinh phục ngôn ngữ.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={MESSENGER_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#1B4D37] text-white font-semibold px-4 py-2 rounded-xl transition-colors text-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.504 3.688 7.2V22l3.374-1.853c.9.25 1.854.384 2.938.384 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.007 12.453l-2.548-2.72-4.97 2.72 5.473-5.808 2.61 2.72 4.908-2.72-5.473 5.808z"/></svg>
                  Nhắn tin Messenger
                </a>
                <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2D6A4F] hover:text-[#1B4D37] font-semibold border border-[#2D6A4F]/30 px-4 py-2 rounded-xl transition-colors text-sm">
                  👤 Facebook Page →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Author
