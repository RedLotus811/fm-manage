import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg'

export default function Header() {
    return (
        <header className='main-header'>
            <div className="container">
                <a href="#">
                    <Logo />
                </a>
                <nav className="primary-navigation">
                    <ul className="nav-list" role="list">
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </nav>
                <button className="btn">Get Started</button>
            </div>
        </header>
    )
}
