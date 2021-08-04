import React from 'react'
import './Address.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Address = () => {
    return (
        <div className='address'>
            <div className='leftSide'></div>
            <div className='rightSide'>
                <h3> آدرس </h3>

                <h4>خیابان مرداویج<LocationOnIcon /></h4>
            </div>

        </div>
    )
}

export default Address
