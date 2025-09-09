import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Button } from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../redux/authSlice';

export default function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const dispatch = useDispatch();
    const { isSignedIn, userName } = useSelector(state =>state.auth);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return () => {
            window.removeEventListener('resize', showButton);
        };
    }, []);

    const handleLogout = () => {
         dispatch(signOut());
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    TRVL <i className='fab fa-typo3'></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        {isSignedIn ? (
                            <span className="nav-links-mobile">Welcome, {userName}!</span>
                        ) : (
                            <>
                                <Link to="/login" className="nav-links-mobile">Login</Link>
                                <Link to="/sign-up" className="nav-links-mobile">Sign Up</Link>
                            </>
                        )}
                    </li>
                </ul>

                {button && !isSignedIn && (
                    <>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <Button to="/login" ButtonStyle="btn--outline" style={{ display: 'flex', gap: '12px' }}>
                                LOGIN
                            </Button>
                            <Button to="/sign-up" ButtonStyle="btn--outline" style={{ display: 'flex', gap: '12px' }}>
                                SIGN UP
                            </Button>
                        </div>
                    </>
                )}

                {button && isSignedIn && (
                    <button onClick={handleLogout} className="btn btn--outline">
                        LOGOUT
                    </button>
                )}
            </div>
        </nav>
    );
}