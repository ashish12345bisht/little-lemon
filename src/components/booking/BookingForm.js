import React, { useState } from 'react'

const BookingForm = ({ date, time, guests, occasion, availableTimes, setDate, setTime, setGuests, setOccation, updateTimes, savedDates, initializeTimes, submitForm }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!date || !time || !guests || !occasion) {
            alert("You have not selected all the fields");
            return;
        }
        submitForm({ date, time, guests, occasion })
    }
    const handleDateChange = (e) => {
        setDate(e.target.value);
        setTime("");
        initializeTimes(e.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
                <label htmlFor="res-date">Choose date</label>
                <input className='cursor-pointer' value={date} onChange={handleDateChange} placeholder="select date" type="date" id="res-date" />
                <label htmlFor="res-time">Choose time</label>
                <select className='cursor-pointer' value={time} onChange={e => { setTime(e.target.value) }} id="res-time ">
                    <option value="">Select Time</option>
                    {availableTimes?.map((item, index) => {
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input className='cursor-pointer' value={guests} onChange={e => setGuests(e.target.value)} type="number" placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select className='cursor-pointer' onChange={e => setOccation(e.target.value)} id="occasion">
                    <option value="">Select Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input className='cursor-pointer' type="submit" value="Make Your reservation" />
            </form>
        </>
    )
}

export default BookingForm