import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import "./nav.css"
import { useState } from 'react';

const Root = () => {

    return (
        <div className="menu">
  
                <ul className="navBar">
                    <li>
                        <Link className="navItem" to="/">
                            UserPortal
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/Two">
                            Two
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/Pickup">
                            Request Pickup
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/Price">
                            Request Price
                        </Link>
                    </li>
                    
                </ul>
            
  
            <Outlet />
        </div>
    );
  };

export default Root

