import React from 'react'
import { motion } from 'framer-motion'
import CountdownTimer from './CountdownTimer.jsx'

// Link Facebook để đặt mua sách
const FACEBOOK_LINK = 'https://www.facebook.com/GiaBaoBooks'

// Danh sách những gì có trong gói sách
const packageItems = [
  '200 trang sach voi noi dung bai ban',
  '200 file audio nguoi ban ngu doc chuan',
  'Huong dan phuong phap Spaced Repetition'
]

// Pricing Section - Kêu gọi hành động mua hàng
function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-surface">
      <div className="max-w-3xl mx-auto">

        {/* Tiêu đề section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-montserrat font-extrabold text-3xl lg:text-4xl text-white mb-4">
            Don Gian De So Huu
          </h2>
          <p className="text-gray-400 text-lg">
            Uu dai thang 3 - Gia chi ap dung trong thoi gian co han
          </p>
        </motion.div>

        {/* CountdownTimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          {/* Label đếm ngược */}
          <p className="text-center text-gray-400 text-sm mb-4 uppercase tracking-wider">
            Uu dai ket thuc sau
          </p>
          <CountdownTimer />
        </motion.div>

        {/* Card giá */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-navy rounded-2xl border-2 border-gold/40 overflow-hidden shadow-2xl shadow-gold/10"
        >
          {/* Tag ưu đãi tháng 3 */}
          <div className="bg-gold text-navy text-center py-2 font-montserrat font-bold text-sm tracking-wider">
            UU DAI THANG 3
          </div>

          <div className="p-8">
            {/* Tên sản phẩm */}
            <h3 className="font-montserrat font-extrabold text-2xl text-white mb-2">
              5 Phut Tieng Duc
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Sach + 200 Audio Files - Giao hang toan quoc
            </p>

            {/* Giá */}
            <div className="flex items-baseline gap-3 mb-6">
              {/* Giá gốc gạch đỏ */}
              <span className="text-red-400 line-through text-lg">249.000d</span>
              {/* Giá ưu đãi */}
              <span className="font-montserrat font-extrabold text-4xl text-gold">
                179.000d
              </span>
            </div>

            {/* Danh sách những gì có trong gói */}
            <div className="space-y-3 mb-8">
              {packageItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  {/* Dấu check màu gold */}
                  <span className="text-gold text-lg flex-shrink-0 mt-0.5">&#10003;</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Nút CTA - link đến Facebook */}
            <motion.a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full bg-gold hover:bg-yellow-500 text-navy font-montserrat font-bold text-lg py-4 rounded-xl text-center transition-all duration-200 shadow-lg shadow-gold/30"
            >
              Dat Mua Ngay Qua Facebook
            </motion.a>

            {/* Cam kết hoàn tiền */}
            <p className="text-center text-gray-500 text-xs mt-4">
              Bao dam hoan tien 100% trong 7 ngay neu khong hai long
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Pricing
