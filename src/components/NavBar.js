import React, {use, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Button } from './Button';
import '../App.js';

export default function NavBar({isSignedIn, userName}) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth<=960)
        {
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);
    
    window.addEventListener('resize', showButton);
    console.log('Signed in:', isSignedIn, 'Username:', userName);
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
                <li className='nav-item'>
                {isSignedIn ? (
                <span className='nav-links-mobile'>Welcome, {userName}!</span>
                    ) : (
                    <Link to="/sign-up" className='nav-links-mobile'>Sign Up</Link>
                    )}
                   
                </li>
            </ul>
            {button && !isSignedIn && (
            <Link to="/sign-up">
        <Button to="/sign-up" ButtonStyle='btn--outline'>SIGN UP</Button>
        </Link>
        )}
        </div>  

    </nav>

  )
}

