import React from 'react'
import { motion } from 'framer-motion'

// Link Facebook của Gia Bảo Books
const FACEBOOK_LINK = 'https://www.facebook.com/GiaBaoBooks'

// Author Section - Giới thiệu về Gia Bảo Books
function Author() {
  return (
    <section className="py-20 px-4 bg-navy">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface rounded-2xl p-8 lg:p-12 border border-white/10"
        >
          {/* Layout 2 cột */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

            {/* Avatar / Logo */}
            <div className="flex flex-col items-center lg:items-start">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mb-4 border-2 border-gold/40">
                <span className="text-4xl">&#128218;</span>
              </div>
              <h3 className="font-montserrat font-bold text-white text-lg mb-1">
                Gia Bao Books
              </h3>
              <p className="text-gray-400 text-sm">
                Chap canh uoc mo tri thuc
              </p>
            </div>

            {/* Nội dung giới thiệu */}
            <div className="lg:col-span-2">
              <h2 className="font-montserrat font-extrabold text-2xl lg:text-3xl text-white mb-4">
                Ve Gia Bao Books
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                Gia Bao Books la don vi chuyen xuat ban sach hoc ngoai ngu theo phuong phap khoa hoc. 
                Chung toi tin rang viec hoc ngoai ngu khong can phai kho khan hay ton kem - 
                chi can co phuong phap dung dan.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Bo sach "5 Phut Tieng Duc" duoc nghien cuu va bien soan boi cac giao vien 
                tieng Duc co kinh nghiem, ket hop voi phuong phap Spaced Repetition da duoc 
                chung minh khoa hoc de giup ban hoc hieu qua nhat.
              </p>

              {/* Link Facebook */}
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                // Màu electric blue cho link Facebook
                className="inline-flex items-center gap-2 text-electric-blue hover:text-blue-400 font-semibold transition-colors"
              >
                {/* Icon Facebook */}
                <span className="text-xl">&#128100;</span>
                Theo doi Gia Bao Books tren Facebook
                <span className="text-sm">&#10132;</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Author
