import React from 'react'
import CatalogSlider from './components/catalog-slider/CatalogSlider'
import CompanySwiper from './components/company-swiper/CompanySwiper'
import Header from './components/header/Header'
import SidebarDesktop from './components/sidebar-desktop/SidebarDesktop'
import SidebarMobile from "./components/sidebar-mobile/SidebarMobile"
import Main from "./components/main-products/Main"

const App = () => {
  return (
    <>
      <Header/>
      <SidebarDesktop/>
      <SidebarMobile/>
      <CompanySwiper/>
      <CatalogSlider/>
      <Main/>
    </>
  )
}

export default App
