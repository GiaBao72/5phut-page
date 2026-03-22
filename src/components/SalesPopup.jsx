import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Data popup - các đơn hàng giả lập
const salesData = [
  { name: 'T.V.A', city: 'Hà Nội', time: '3 phút' },
  { name: 'N.T.B', city: 'TP. Hồ Chí Minh', time: '7 phút' },
  { name: 'P.Q.H', city: 'Đà Nẵng', time: '12 phút' },
  { name: 'L.T.N', city: 'Cần Thơ', time: '18 phút' },
  { name: 'V.M.K', city: 'Hải Phòng', time: '25 phút' },
  { name: 'T.H.L', city: 'Huế', time: '31 phút' },
  { name: 'Đ.T.T', city: 'Nha Trang', time: '45 phút' },
]

function SalesPopup() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    let showTimer, hideTimer, cycleTimer
    let index = 0

    // Hiện lần đầu sau 15 giây
    showTimer = setTimeout(() => {
      setVisible(true)
      setCurrent(index)

      // Tắt sau 4 giây
      hideTimer = setTimeout(() => {
        setVisible(false)

        // Lặp lại mỗi 30 giây
        cycleTimer = setInterval(() => {
          index = (index + 1) % salesData.length
          setCurrent(index)
          setVisible(true)

          setTimeout(() => setVisible(false), 4000)
        }, 30000)
      }, 4000)
    }, 15000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
      clearInterval(cycleTimer)
    }
  }, [])

  const item = salesData[current]

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed z-50 bottom-24 left-4 md:bottom-6 md:left-6 max-w-[280px]"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-[#2D6A4F]/10 p-3 flex items-center gap-3">
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center shrink-0 text-lg">
              📦
            </div>
            {/* Nội dung */}
            <div className="flex-1 min-w-0">
              <p className="text-[#1E293B] text-xs font-semibold leading-tight">
                {item.name} — {item.city}
              </p>
              <p className="text-[#475569] text-xs mt-0.5 leading-tight">
                vừa đặt mua <span className="text-[#2D6A4F] font-semibold">Combo 5 Phút Tiếng Đức</span>
              </p>
              <p className="text-[#475569]/60 text-xs mt-0.5">{item.time} trước</p>
            </div>
            {/* Nút đóng */}
            <button
              onClick={() => setVisible(false)}
              className="text-[#475569]/40 hover:text-[#475569] text-lg leading-none shrink-0 ml-1"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SalesPopup
