import React from 'react'
import '../../utils.css'
import { ReactComponent as Illustration } from '../../assets/illustration-intro.svg'

export default function Hero() {
    return (
        <section className='hero'>
            <div className="container">
                <div className="even-columns">
                    <div>
                        <h1 className="fs-primary-heading fw-bold">
                            Bring everyone
                            together to build
                            better products.
                        </h1>
                        <p>
                            Manage makes it simple for software teams
                            o plan day-to-day tasks while keeping the
                            larger team goals in view.
                        </p>
                        <button className='button'>
                            Get Started
                        </button>
                    </div>
                    <div>
                        <Illustration />
                    </div>
                </div>
            </div>
        </section>
    )
}
