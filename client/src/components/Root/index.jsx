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
                            UserPortal
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/One">
                            One
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/Two">
                            Two
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/Three">
                            Three
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/Four">
                            Four
                        </Link>
                    </li>
                </ul>
            )}
  
            <Outlet />
        </div>
    );
  };

export default Root

