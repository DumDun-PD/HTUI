

import '../styles/header.css'

function NavigationLinks() {
  return (
    <>
      <a className="nav-link" href="#gioi-thieu">Giới thiệu</a>
      <a className="nav-link" href="#dich-vu">Tư vấn doanh nghiệp</a>
      <details className="services-menu">
        <summary className="nav-link">Dịch vụ khác <span className="menu-chevron" /></summary>
        <div className="services-dropdown">
          <a href="#dich-vu">Tư vấn luật doanh nghiệp</a>
          <a href="#dich-vu">Tư vấn luật thuế</a>
        </div>
      </details>
      <span className="nav-link nav-placeholder" aria-disabled="true">Tin tức</span>
    </>
  )
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="container d-flex align-items-center justify-content-between">
        <a className="brand d-flex align-items-center text-decoration-none" href="#trang-chu" aria-label="Minh Luật - Trang chủ">
          <svg className="brand-mark" viewBox="0 0 50 56" fill="none" aria-hidden="true">
            <path d="M25 2 47 14v28L25 54 3 42V14Z" stroke="currentColor" strokeWidth="2.5" />
            <path d="m25 7 16 9v23l-16 9-16-9V16Z M15 18v18l10 6 10-6V18 M25 12v23 M18 22h14 M19 22l-5 11h10l-5-11Zm12 0-5 11h10l-5-11Z M20 38h10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <span className="brand-copy">
            <span className="brand-name">MINH LUẬT</span>
            <span className="brand-tagline">Hiệu quả lan toả niềm tin</span>
          </span>
        </a>
        <nav className="desktop-navigation align-items-center" aria-label="Điều hướng chính">
          <NavigationLinks />
        </nav>
        <a className="btn consultation-button header-consultation" href="#tu-van">Liên hệ tư vấn</a>
        <details className="mobile-navigation">
          <summary aria-label="Mở menu điều hướng"><span /><span /><span /></summary>
          <nav aria-label="Điều hướng di động">
            <NavigationLinks />
            <a className="btn consultation-button mt-2" href="#tu-van">Liên hệ tư vấn</a>
          </nav>
        </details>
      </div>
    </header>
  )
}
