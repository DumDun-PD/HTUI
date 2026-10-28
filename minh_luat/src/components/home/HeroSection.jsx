import StatsSection from './StatsSection.jsx'

export default function HeroSection() {
  return (
    <main className="hero-section container">
      <section className="hero-content" aria-labelledby="dich-vu">
        <p className="hero-eyebrow">CHÀO MỪNG BẠN ĐẾN VỚI MINH LUẬT</p>
        <h1 className="hero-title" id="dich-vu">
          <span>DỊCH VỤ TƯ VẤN</span>
          <span>LUẬT DOANH NGHIỆP,</span>
          <span>LUẬT THUẾ CHUYÊN SÂU</span>
        </h1>
        <p className="hero-description" id="gioi-thieu">
          Minh Luật - Một vài câu giới thiệu công ty, tối đa 5 dòng. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
        </p>
        <button className="btn consultation-button hero-consultation d-inline-flex align-items-center" id="tu-van" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            <path d="m13 3 8 8-3 3-8-8 3-3ZM4 12l8 8M7 9l8 8M10 14l-5 5M3 22h18M3 19v3" />
          </svg>
          Tư vấn miễn phí
        </button>
      </section>
      <StatsSection />
    </main>
  )
}
