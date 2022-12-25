import React from 'react'
import HeaderBottom from './header-bottom/HeaderBottom'
import HeaderFixed from './header-fixed/HeaderFixed'
import HeaderTop from './header-top/HeaderTop'

const Header = () => {
  return (
    <>
        <HeaderTop/>
        <HeaderFixed/>
        <HeaderBottom/>
    </>
  )
}

export default Header