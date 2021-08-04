import React from 'react'
import { MenuList1 } from '../menu/menuItems'
import MenuItem from '../../components/menu/MenuItem'
import '../menu/Menu.css'

const Pizza = () => {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Rozhin's Pizza</h1>
            <div className='menuList'>
            {MenuList1.map((item, key) => {
                    return (
                        <MenuItem key={key} img={item.image} title={item.title} price={item.price} className='menuItem'/>
                    )
                })}
            </div>
        </div>
    )
}

export default Pizza