import React, { useState } from 'react'

const BookingForm = ({ date, time, guests, occasion, availableTimes, setDate, setTime, setGuests, setOccation, updateTimes, savedDates, initializeTimes, submitForm }) => {
    const [errors, setErrors] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        debugger
        if (!date || !time || !guests || !occasion) {
            let tempErr = {};
            if (!date) {
                tempErr["date"] = "Please select date";
            }
            else {
                tempErr["date"] = "";
            }
            if (!time) {
                tempErr["time"] = "Please select time";
            }
            else {
                tempErr["time"] = "";
            }
            if (!guests) {
                tempErr["guests"] = "Please select guest(more than 1 , less than 10)";
            }
            else {
                tempErr["guests"] = "";
            }
            if (!occasion) {
                tempErr["occasion"] = "Please select occasion";
            }
            else {
                tempErr["occasion"] = "";
            }
            setErrors(tempErr)
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
            <h4>Book Now</h4>
            <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
                <label htmlFor="res-date">Choose date</label>
                <input data-testid="initialiseTime" className='cursor-pointer' value={date} onChange={handleDateChange} placeholder="select date" type="date" id="res-date" />
                {errors?.date && <p style={{ color: "red", padding: "0px", margin: "0px", fontSize: "0.8rem" }}>{errors?.date}</p>}
                <label htmlFor="res-time">Choose time</label>
                <select className='cursor-pointer' value={time} onChange={e => { setTime(e.target.value) }} id="res-time ">
                    <option value="">Select Time</option>
                    {availableTimes?.map((item, index) => {
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                    })}
                </select>
                {errors?.time && <p style={{ color: "red", padding: "0px", margin: "0px", fontSize: "0.8rem" }}>{errors?.time}</p>}
                <label htmlFor="guests">Number of guests</label>
                <input className='cursor-pointer' value={guests} onChange={e => setGuests(e.target.value)} type="number" placeholder="1" min="1" max="10" id="guests" />
                {errors?.guests && <p style={{ color: "red", padding: "0px", margin: "0px", fontSize: "0.8rem" }}>{errors?.guests}</p>}
                <label htmlFor="occasion">Occasion</label>
                <select className='cursor-pointer' onChange={e => setOccation(e.target.value)} id="occasion">
                    <option value="">Select Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                {errors?.occasion && <p style={{ color: "red", padding: "0px", margin: "0px", fontSize: "0.8rem" }}>{errors?.occasion}</p>}
                <input className='cursor-pointer' type="submit" value="Make Your reservation" />
            </form>
        </>
    )
}

export default BookingForm