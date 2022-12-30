import React from 'react'
import CatalogMobile from './components/catalog-mobile/CatalogMobile'
import CatalogSlider from './components/catalog-slider/CatalogSlider'
import CompanySwiper from './components/company-swiper/CompanySwiper'
import Header from './components/header/Header'
import SidebarDesktop from './components/sidebar-desktop/SidebarDesktop'
import SidebarMobile from "./components/sidebar-mobile/SidebarMobile"

const App = () => {
  return (
    <>
      <Header/>
      <SidebarDesktop/>
      <SidebarMobile/>
      <CompanySwiper/>
      <CatalogSlider/>
    </>
  )
}

export default App
