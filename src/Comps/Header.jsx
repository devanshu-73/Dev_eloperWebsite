/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(!!localStorage.getItem('username'));
    }, []); // Run only once on component mount

    const logout = () => {
        alert('logout');
        localStorage.clear();
        setIsAuthenticated(false);
        navigate('/login');
    };
    

    return (
        <>
            <div>
                {/* Header Start */}
                <div className="container-fluid bg-dark px-0">
                    <div className="row gx-0">
                        <div className="col-lg-3 bg-dark d-none d-lg-block">
                            <NavLink to="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                <h1 className="m-0 text-primary text-uppercase">Dev_eloper</h1>
                            </NavLink>
                        </div>
                        <div className="col-lg-9">
                            <div className="row gx-0 bg-white d-none d-lg-flex">
                                <div className="col-lg-5 px-5 text-end">
                                    <div className="d-inline-flex align-items-center py-2">
                                        <a className="me-3" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="me-3" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="me-3" href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a className="me-3" href="#"><i className="fab fa-instagram" /></a>
                                        <a className="me-3" href="#"><i className="fab fa-youtube" /></a>
                                    </div>
                                </div>
                            </div>
                            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                <NavLink to='/' className="navbar-brand d-block d-lg-none">
                                    <h1 className="m-0 text-primary text-uppercase">Dev_eloper</h1>
                                </NavLink>
                                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                    <div className="navbar-nav mr-auto py-0">
                                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                        <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                                        <NavLink to="/rooms" className="nav-item nav-link">Rooms</NavLink>
                                        <div className="nav-item dropdown">
                                            <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                                            <div className="dropdown-menu rounded-0 m-0">
                                                <Link to="/booking" className="dropdown-item">Booking</Link>
                                                <Link to="/team" className="dropdown-item">Our Team</Link>
                                                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                            </div>
                                        </div>
                                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                                        {
                                            isAuthenticated ? (
                                                <>
                                                    <Link className="nav-item nav-link" to='/profile'>{localStorage.getItem('username')}</Link>
                                                    <button className="nav-item nav-link" onClick={logout}>Logout</button>
                                                </>
                                            ) : (
                                                <>
                                                    <NavLink className="nav-item nav-link" to="/signup">SignUp</NavLink>
                                                    <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                                                </>
                                            )
                                        }
                                    </div>
                                    <a href="https://htmlcodex.com/hotel-html-template-pro" className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Premium Version<i className="fa fa-arrow-right ms-3" /></a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </div>
        </>
    );
};

export default Header;
