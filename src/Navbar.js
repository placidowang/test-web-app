import React from 'react';
import { NavLink } from 'react-router-dom';

const activeLink = {
  color: '#61dafb',
}

const Navbar = () => <div className='navbar'>
  <div style={{margin: '0 0px'}}>
    <h1>cidowang</h1>
  </div>
  <div className='navbar-links'>
    <NavLink to='/' exact className='navlink' activeStyle={activeLink}>Home</NavLink>
    <NavLink to='/about' exact className='navlink' activeStyle={activeLink}>About</NavLink>
    <NavLink to='/contact' exact className='navlink' activeStyle={activeLink}>Contact</NavLink>
  </div>
</div>

export default Navbar;