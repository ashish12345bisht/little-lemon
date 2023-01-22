import React from 'react'
import { shahi_paneer } from '../../constants/images'

const SpecialsCard = () => {
    return (
        <div className='special_card'>
            <section className='image_container'>
                <img src={shahi_paneer} alt="special_image" />
            </section>
            <section className='card_body'>
                <span>
                    <p>Shahi Paneer</p>
                    <span>Rs. 200.00</span>
                </span>
                <article>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</article>
                <a>Order Online</a>
            </section>
        </div>
    )
}

export default SpecialsCard