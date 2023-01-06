import React from 'react'
import Header from "../components/header/Header"
import SidebarDesktop from "../components/sidebar-desktop/SidebarDesktop"
import SidebarMobile from "../components/sidebar-mobile/SidebarMobile"
import CompanySwiper from "../components/company-swiper/CompanySwiper"
import CatalogSlider from "../components/catalog-slider/CatalogSlider"
import Main from "../components/main-products/Main"
import AppInstall from "../components/app-install/AppInstall"
import Footer from "../components/footer/Footer"
import NavbarMobile from "../components/navbar-mobile/NavbarMobile"
import Pdp from "./pdp/Pdp"
import { Route } from 'react-router-dom'

const Router = () => {
    return (
        <>
        <Header/>
            <Route exact path='/'>
                <SidebarDesktop />
                <SidebarMobile />
                <CompanySwiper />
                <CatalogSlider />
                <Main />
                <AppInstall />
            </Route>
            <Route exact path='/product/:id'>
                <Pdp />
            </Route>
            <Footer />
            <NavbarMobile />
        </>
    )
}

export default Router