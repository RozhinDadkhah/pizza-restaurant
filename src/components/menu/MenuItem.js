import React from 'react'

const MenuItem = ({ img, title, price }) => {
    return (
        <div className='menuItem'>
            <img src={img} alt='' style={{ height: '200px'}} />
            <h1>{title}</h1>
            <p>{price}</p>
        </div>
    )
}

export default MenuItem
