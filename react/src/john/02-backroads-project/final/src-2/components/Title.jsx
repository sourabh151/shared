import React from 'react'

function Title({ one, two }) {
    return (
        <div className="section-title">
            <h2>{one} <span>{two}</span></h2>
        </div>
    )
}

export default Title