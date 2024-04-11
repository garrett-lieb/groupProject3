import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import "./nav.css"
import { useState } from 'react';

const Root = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div class="menu">
            <button className="menuButton" onClick={toggleMenu}>
                Menu
            </button>
  
            {isMenuOpen && (
                <ul className="dropBar">
                    <li>
                        <Link className="navItem" to="/">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/resume">
                            Resume
                        </Link>
                    </li>
                </ul>
            )}
  
            <Outlet />
        </div>
    );
  };

export default Root

