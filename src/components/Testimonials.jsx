import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Data testimonials - dạng mockup tin nhắn Zalo/Messenger
const reviews = [
  {
    name: 'Minh Tuấn',
    tag: 'Kỹ sư IT · Hà Nội',
    avatar: '👨‍💻',
    time: '2 ngày trước',
    msg: 'Mình bận lắm, không có thời gian học bài bản. Nhưng cuốn này chỉ 5 phút/ngày, đọc lúc ăn sáng là xong. Sau 3 tuần nhớ được ~60 từ mà không cần cố gắng 🔥',
    platform: 'messenger',
  },
  {
    name: 'Thu Hương',
    tag: 'Sinh viên · TP.HCM',
    avatar: '👩‍🎓',
    time: '5 ngày trước',
    msg: 'Mình đang chuẩn bị du học Đức năm sau. Cuốn sách + audio giúp mình nghe quen phát âm bản xứ luôn. Giá 149k mà được cả kho audio thì quá hời 😍',
    platform: 'zalo',
  },
  {
    name: 'Hoàng Nam',
    tag: 'Nhân viên văn phòng · Đà Nẵng',
    avatar: '👨‍💼',
    time: '1 tuần trước',
    msg: 'Trước giờ học tiếng Đức toàn bỏ ngang vì ngữ pháp khó quá. Cuốn này học theo câu chuyện nên tự nhiên hẳn. Đã mua thêm 1 cuốn cho bạn 👍',
    platform: 'messenger',
  },
]

function TestimonialCard({ review, delay }) {
  const isMessenger = review.platform === 'messenger'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
    >
      {/* Header giả lập app chat */}
      <div className={`px-4 py-2.5 flex items-center gap-2 ${isMessenger ? 'bg-[#0084FF]' : 'bg-[#0068FF]'}`}>
        <div className="w-2 h-2 rounded-full bg-white/60" />
        <div className="w-2 h-2 rounded-full bg-white/60" />
        <div className="w-2 h-2 rounded-full bg-white/60" />
        <span className="text-white text-xs font-medium ml-1 opacity-90">
          {isMessenger ? '💬 Messenger' : '💙 Zalo'}
        </span>
      </div>

      {/* Nội dung tin nhắn */}
      <div className="p-4">
        {/* Info người gửi */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-9 h-9 rounded-full bg-[#F6FAF7] border border-[#2D6A4F]/10 flex items-center justify-center text-base">
            {review.avatar}
          </div>
          <div>
            <p className="text-[#1E293B] text-sm font-semibold">{review.name}</p>
            <p className="text-[#475569] text-xs">{review.tag}</p>
          </div>
          <span className="ml-auto text-[#475569]/50 text-xs">{review.time}</span>
        </div>

        {/* Bubble tin nhắn */}
        <div className="bg-[#F6FAF7] rounded-2xl rounded-tl-sm px-4 py-3">
          <p className="text-[#1E293B] text-sm leading-relaxed">{review.msg}</p>
        </div>

        {/* Tick đã đọc */}
        <p className="text-right text-[#475569]/40 text-xs mt-1.5">✓✓ Đã xem</p>
      </div>
    </motion.div>
  )
}

function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#2D6A4F]/10 border border-[#2D6A4F]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#2D6A4F] text-sm font-semibold">⭐ Độc giả nói gì?</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl lg:text-4xl text-[#1E293B] mb-3">
            Hàng Trăm Người Đã Tin Dùng
          </h2>
          <p className="text-[#475569]">Phản hồi thực tế từ độc giả GiaBaoBooks</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <TestimonialCard key={i} review={review} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
