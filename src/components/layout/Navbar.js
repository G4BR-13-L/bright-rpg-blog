import React from 'react'

import {Link} from 'react-router-dom';
import './config.css'
import SignedInLinks from './SignedinLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () =>{
    return(
        <nav className="nav-wrapper bright darken-3">
            

            <div className='container'>
            <Link  to="/"  className="logo">Bright</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav> 
        
        
    )
}
export default Navbar;