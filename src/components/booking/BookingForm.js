import React, { useState } from 'react'

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccation] = useState("");
    const [availableTimes, setAvailableTimes] = useState([
        {
            value: "17:00",
            label: "17:00"
        },
        {
            value: "18:00",
            label: "18:00"
        },
        {
            value: "19:00",
            label: "19:00"
        },
        {
            value: "20:00",
            label: "20:00"
        },
        {
            value: "21:00",
            label: "21:00"
        },
        {
            value: "22:00",
            label: "22:00"
        }
    ]);
    return (
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label for="res-date">Choose date</label>
            <input className='cursor-pointer' value={date} onChange={e => setDate(e.target.value)} type="date" id="res-date" />
            <label for="res-time">Choose time</label>
            <select className='cursor-pointer' value={time} onChange={e => setTime(e.target.value)} id="res-time ">
                {availableTimes?.map((item, index) => {
                    return (
                        <option key={index} value={item.value}>{item?.label}</option>
                    )
                })}
            </select>
            <label for="guests">Number of guests</label>
            <input className='cursor-pointer' value={guests} onChange={e => setGuests(e.target.value)} type="number" placeholder="1" min="1" max="10" id="guests" />
            <label for="occasion">Occasion</label>
            <select className='cursor-pointer' value={occasion} onChange={e => setOccation(e.target.value)} id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input className='cursor-pointer' type="submit" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm