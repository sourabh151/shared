import React from 'react'
import Title from './Title'
import {tours} from "./data"
import Tour from "./Tour"
function Tours() {
    return (
        <section className="section" id="tours">
            <Title one="featured" two="tours" />

            <div className="section-center featured-center">

                {
                    tours.map((tour) => {
                        return <Tour {...tour} key={tour.id} />
                    })
                }
            </div>
        </section>
    )
}

export default Tours