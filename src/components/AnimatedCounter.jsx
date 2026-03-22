import React from 'react'
import CountUp from 'react-countup'

// AnimatedCounter - trắng cho dùng trên nền xanh đậm
function AnimatedCounter({ number, suffix = '', label }) {
  return (
    <div className="text-center">
      <div className="font-montserrat font-extrabold text-4xl lg:text-5xl text-white mb-2">
        <CountUp end={number} suffix={suffix} duration={2} enableScrollSpy={true} scrollSpyOnce={true} />
      </div>
      <p className="text-green-100 font-medium text-sm lg:text-base">{label}</p>
    </div>
  )
}

export default AnimatedCounter
