import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import './Dropdown.css'

const Dropdown = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>{item.icon}{item.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Dropdown
