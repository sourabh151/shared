import React from 'react'
import Title from './Title'
import about from "../images/about.jpeg"

function About() {
    return (
        <section className="section" id="about">
            <Title one="about" two="us"/>

            <div className="section-center about-center">
                <div className="about-img">
                    <img
                        src={about}
                        className="about-photo"
                        alt="awesome beach"
                    />
                </div>
                <article className="about-info">
                    <h3>explore the difference</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                        quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                        unde dolor?
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                        quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                        unde dolor?
                    </p>
                    <a href="#" className="btn">read more</a>
                </article>
            </div>
        </section>
    )
}

export default About