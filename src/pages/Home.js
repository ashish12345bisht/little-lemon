import React from 'react';
import { logo } from '../constants/images';
import SpecialsCard from '../components/home/SpecialsCard';

const Home = () => {
    let arr = [1, 2, 3]
    return (
        <>
            <section className='banner'>
                <div>
                    <h1>Little Lemon</h1>
                    <p>Chicago</p>
                    <article>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</article>
                    <button className='black_btn'>Start Free Trial</button>
                </div>
                <div>
                    <img src={logo} alt="logo" />
                </div>
            </section>
            <section className='specials'>
                <div>
                    <h1>Specials</h1>
                    <button className='black_btn'>Start Free Trial</button>
                </div>
                <section className='card_container'>
                    {arr.map((item) => (
                        <SpecialsCard key={item} />
                    ))}
                </section>
            </section>
        </>
    )
}

export default Home