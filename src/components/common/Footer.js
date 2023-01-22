import React from 'react'
import { logo } from '../../constants/images';

const Footer = () => {
    return (
        <footer>
            <section>
                <img className='footer_logo' src={logo} alt="" />
            </section>
            <section>
                <h4>Doormat Navigation</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </section>
            <section>
                <h4>Contact</h4>
                <ul>
                    <li>Adress</li>
                    <li>Phone</li>
                    <li>Email</li>
                </ul>
            </section>
            <section>
                <h4>Social Media Links</h4>
                <ul>
                    <li>Adress</li>
                    <li>Phone</li>
                    <li>Email</li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer