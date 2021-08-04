import React from 'react'
import { MenuList } from './menuItems'
import MenuItem from './MenuItem'
import './Menu.css'

const Menu = () => {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Rozhin's Pizza</h1>
            <div className='menuList'>
                {MenuList.map((item, key) => {
                    return (
                        <MenuItem key={key} img={item.image} title={item.title} price={item.price} className='menuItem'/>
                    )
                })}
            </div>
        </div>
    )
}

export default Menu