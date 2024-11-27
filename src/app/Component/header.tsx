"use client";
import Link from 'next/link';
import React from 'react'
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <main className='main'>
                <nav className="navbar navbar-expand-md" style={{ backgroundColor: '#3B1E54' }}>
                    <div className="container-fluid">
                        <a className="navbar-brand font_color" href="#"><i className="bi bi-camera-reels-fill mx-1"></i>
                            Movie<span style={{ backgroundColor: '#9B7EBD' }} className='rounded px-1'>M</span>astery
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menubar" >
                            <span className="navbar-toggler-icon navbar-light"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="menubar">
                            <div className="navbar-nav" style={{ margin: '0px 200px' }}>
                                <NavLink to='/' className='nav-link font_color'>Home</NavLink>
                                <NavLink to="/movie/popular" className='nav-link font_color'>Popular</NavLink>
                                <NavLink to='/movie/top_rated' className='nav-link font_color'>Top Rated</NavLink>
                                <NavLink to='/movie/upcoming' className='nav-link font_color'>Upcoming</NavLink>
                            </div>

                            {/* Authentication */}
                            <div className='auth d-flex'>
                                <Link href='#' data-bs-toggle="modal" className='nav-link border_style' data-bs-target="#loginModel">
                                    SIGN IN
                                </Link>
                                <Link href='#' className='nav-link border_style mx-2' data-bs-toggle="modal" data-bs-target="#registerModel">
                                    SIGN UP
                                </Link>
                            </div>
                        </div>

                    </div>
                </nav>
            </main>

        </>
    )
}

export default Header