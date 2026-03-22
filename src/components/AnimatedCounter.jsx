import React from 'react'
import CountUp from 'react-countup'

// AnimatedCounter - Đếm số khi scroll vào view
// Sử dụng react-countup với enableScrollSpy
// Props: number (số cần đếm), suffix (hậu tố như +, %), label (nhãn hiển thị)
function AnimatedCounter({ number, suffix = '', label }) {
  return (
    <div className="text-center">
      {/* Số đếm màu gold */}
      <div className="font-montserrat font-extrabold text-4xl lg:text-5xl text-gold mb-2">
        <CountUp
          end={number}
          suffix={suffix}
          duration={2}
          // Tự động bắt đầu đếm khi element vào trong tầm nhìn
          enableScrollSpy={true}
          // Chỉ chạy một lần
          scrollSpyOnce={true}
        />
      </div>

      {/* Nhãn mô tả */}
      <p className="text-gray-300 font-medium text-sm lg:text-base">
        {label}
      </p>
    </div>
  )
}

export default AnimatedCounter
