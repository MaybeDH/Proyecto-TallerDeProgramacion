import React from 'react'
import {BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify} from 'react-icons/bs'
import './Header.css'
const Header = ({OpenSidebar}) => {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        {/* <div className='header-left'>
        <BsSearch className='icon'/>
        </div> */}
        <div className='header-text'>
        <h5>¡Hazlo con pasión y crea el cambio!</h5>
        </div>
    </header>
  )
}

export default Header