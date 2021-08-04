import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import './Header.css'
import Dropdown from './Dropdown'
import img1 from '../../img/pizzaLogo.png'

import CloseIcon from '@material-ui/icons/Close';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Navbar() {

    const [click, setClick] = useState(false)

    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'><img src={img1} alt='' /></Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <CloseIcon className='fa-times' /> : <MenuOpenIcon className='fa-bars' />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>منو<ArrowDropDownIcon className='dropicon'/></Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/address' className='nav-links' onClick={closeMobileMenu}>آدرس</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>خانه</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
