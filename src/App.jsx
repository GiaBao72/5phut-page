import React from 'react'
import StickyHeader from './components/StickyHeader.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Solution from './components/Solution.jsx'
import InsideBook from './components/InsideBook.jsx'
import Pricing from './components/Pricing.jsx'
import Author from './components/Author.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

// Component gốc - render toàn bộ landing page theo cấu trúc AIDA
function App() {
  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Header cố định xuất hiện sau khi scroll */}
      <StickyHeader />

      {/* Phần Hero - Attention */}
      <Hero />

      {/* Phần Problem - Interest (pain points) */}
      <Problem />

      {/* Phần Solution - Desire */}
      <Solution />

      {/* Bên trong cuốn sách */}
      <InsideBook />

      {/* Phần Pricing - Action */}
      <Pricing />

      {/* Về tác giả */}
      <Author />

      {/* Câu hỏi thường gặp */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
