import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { title, hamburger } from '../../constants/images'


const Header = () => {
    const [visible, setVisible] = useState(false)
    return (
        <header className='header'>
            <img className='logo' src={title} alt="title" />
            <ul className={`${visible ? "visible" : ""}`}>
                <li className='cursor-pointer'>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className='cursor-pointer'>
                    About
                </li>
                <li className='cursor-pointer'>
                    Menu
                </li>
                <li className='cursor-pointer'>
                    <Link to="/booking">
                        Reservations
                    </Link>
                </li>
                <li className='cursor-pointer'>
                    Order Online
                </li>
                <li className='cursor-pointer'>
                    Login
                </li>
            </ul>
            <img onClick={() => setVisible(!visible)} className='ham' src={hamburger} alt="hamburger" />
        </header>
    )
}

export default Header