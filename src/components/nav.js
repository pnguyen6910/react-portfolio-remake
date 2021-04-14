import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h1 className="navbar-brand" href="#">Paul Nguyen</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" href="#">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" href="#">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav