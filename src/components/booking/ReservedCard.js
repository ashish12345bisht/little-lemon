import React from 'react'

const ReservedCard = ({ item = {} }) => {
    return (
        <div>
            <h2>Occasion : {item?.occasion || "NA"}</h2>
            <span>
                <span>{item?.date || "NA"}</span>
                <span>{item?.time || "NA"}</span>
            </span>
            <p>No. of Guests : {item?.guests || "NA"}</p>
        </div>
    )
}

export default ReservedCard