import React, { useState, useEffect } from 'react'

// Deadline đếm ngược - kết thúc ưu đãi tháng 3/2026
const DEADLINE = new Date('2026-03-31T23:59:59')

// Tính thời gian còn lại so với deadline
function getTimeLeft() {
  const now = new Date()
  const diff = DEADLINE - now

  // Nếu đã qua deadline, trả về 0 tất cả
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000)
  }
}

// Component hiển thị một ô đếm ngược
function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      {/* Số đếm - nền surface, chữ gold */}
      <div className="bg-surface border border-gold/30 rounded-xl w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-2">
        <span className="font-montserrat font-extrabold text-2xl lg:text-3xl text-gold">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      {/* Nhãn */}
      <span className="text-gray-400 text-xs font-medium uppercase tracking-wide">
        {label}
      </span>
    </div>
  )
}

// CountdownTimer - Đếm ngược đến 2026-03-31T23:59:59
function CountdownTimer() {
  // State chứa thời gian còn lại
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    // Cập nhật mỗi giây bằng setInterval
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    // Cleanup khi component unmount
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center gap-3 lg:gap-4">
      {/* 4 ô đếm ngược */}
      <TimeBox value={timeLeft.days} label="Ngay" />

      {/* Dấu phân cách */}
      <span className="text-gold font-bold text-2xl mb-6">:</span>

      <TimeBox value={timeLeft.hours} label="Gio" />

      <span className="text-gold font-bold text-2xl mb-6">:</span>

      <TimeBox value={timeLeft.minutes} label="Phut" />

      <span className="text-gold font-bold text-2xl mb-6">:</span>

      <TimeBox value={timeLeft.seconds} label="Giay" />
    </div>
  )
}

export default CountdownTimer
