import React from 'react'
import { user } from '../../constants/images'

const TestimonialCard = () => {
    return (
        <div className='testimonial_card'>
            <h1>Rating</h1>
            <span className='image_div'>
                <img src={user} alt="" />
                <h4>Name</h4>
            </span>
            <h3>Designation</h3>
        </div>
    )
}

export default TestimonialCard