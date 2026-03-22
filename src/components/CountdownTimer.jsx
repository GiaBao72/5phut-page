import React, { useState, useEffect } from 'react'

const DEADLINE = new Date('2026-03-31T23:59:59')

function getTimeLeft() {
  const diff = DEADLINE - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#2D6A4F] rounded-xl w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-2 shadow-md">
        <span className="font-montserrat font-extrabold text-2xl lg:text-3xl text-white">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[#475569] text-xs font-medium uppercase tracking-wide">{label}</span>
    </div>
  )
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center gap-3 lg:gap-4">
      <TimeBox value={timeLeft.days} label="Ngày" />
      <span className="text-[#2D6A4F] font-bold text-2xl mb-6">:</span>
      <TimeBox value={timeLeft.hours} label="Giờ" />
      <span className="text-[#2D6A4F] font-bold text-2xl mb-6">:</span>
      <TimeBox value={timeLeft.minutes} label="Phút" />
      <span className="text-[#2D6A4F] font-bold text-2xl mb-6">:</span>
      <TimeBox value={timeLeft.seconds} label="Giây" />
    </div>
  )
}

export default CountdownTimer
