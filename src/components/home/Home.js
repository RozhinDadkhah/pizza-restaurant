import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import img2 from '../../img/pizza.jpeg'

const Home = () => {
    return (
        <div className='home'>
            <div className='title'>
                <h1 className='homeH1'>Rozhin's Pizza</h1>
                <p className='homeP'>"شما میتوانید در محیطی دوستانه از غذای خود لذت ببرید"</p>
                <p className='homeP'>"You can enjoy your Food in the friendly place"</p>
                <Link to='/menu' className='homeLink'><button className='homeBtn'>Order Now/سفارش</button></Link>
            </div>
        </div>
    )
}

export default Home
