import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/booking/BookingForm';
import ReservedCard from '../components/booking/ReservedCard';
import { defaultTimings } from '../constants';
import { INITIALIZE_TIMES, UPDATE_TIMES } from '../constants/constants';
import { fetchAPI, submitAPI } from '../helpers';

function reducer(state, action) {
    switch (action.type) {
        case INITIALIZE_TIMES:
            return action.payload;
        case UPDATE_TIMES:
            return state?.filter((item) => item !== action?.payload)
        default:
            return state;
    }
}

const Booking = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccation] = useState("");
    const saved = localStorage.getItem("saved-dates");
    const [savedDates, setSavedDates] = useState(saved ? JSON.parse(saved) : []);
    let navigate = useNavigate();
    const [availableTimes, dispatch] = useReducer(reducer, []);
    useEffect(() => {
        initializeTimes();
    }, [])
    function initializeTimes(date = "") {
        let response = fetchAPI(new Date(date) || new Date());
        let payload = [];
        response?.forEach((item) => {
            let check = true
            savedDates?.forEach((curDate) => {
                if (curDate?.date === date && item === curDate?.time) {
                    check = false
                }
            })
            if (check) {
                payload.push(item)
            }
        })
        dispatch({ type: INITIALIZE_TIMES, payload })
    }
    function updateTimes(item) {
        dispatch({ type: UPDATE_TIMES, payload: item })
    }
    function submitForm(formData) {
        let response = submitAPI(formData);
        if (response) {
            updateTimes(formData?.time);
            navigate("/confirm-booking");
            localStorage.setItem("saved-dates", JSON.stringify([...savedDates, formData]))
            setSavedDates([...savedDates, formData]);
        }
    }
    return (
        <>
            <BookingForm
                date={date}
                time={time}
                guests={guests}
                occasion={occasion}
                availableTimes={availableTimes}
                setDate={setDate}
                setTime={setTime}
                setGuests={setGuests}
                setOccation={setOccation}
                updateTimes={updateTimes}
                savedDates={savedDates}
                submitForm={submitForm}
                initializeTimes={initializeTimes} />
            <section className="reservedContainer">
                {savedDates?.map((item, ind) => (
                    <ReservedCard key={ind} item={item} />
                ))}
            </section>
        </>
    )
}

export default Booking