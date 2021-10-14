import React from 'react';
import './Navbar.css'
import logo from '../../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt,faBell } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../hooks/useAuth'
import { NavLink } from 'react-router-dom';
import menuImg from '../../menu.svg'

const Navbar = () => {
    const {user,logOut} = useAuth()
    const linkActiveStyle = {
        color:'#4c90ff',
        borderBottom: '1px',
        borderColor: '#4c90ff',


    }

    const toogleMenu = () => {
     const ul =   document.getElementById('ul');
     ul.classList.toggle('ul-active')
    }
    const closeMenu = () => {
     const ul =   document.getElementById('ul');
        ul.classList.remove('ul-active')
    }
    return (
        <nav className='nav'>
        <img src={logo} alt=""/>
        <span onClick={toogleMenu} className='menu'><img src={menuImg} alt=""/></span>
        <ul id='ul'>
            <NavLink onClick={closeMenu} activeStyle={linkActiveStyle}  to='/home' className='link'>Home</NavLink>

            <NavLink onClick={closeMenu} activeStyle={linkActiveStyle} to='/about' className='link'>About</NavLink>

            <NavLink onClick={closeMenu} activeStyle={linkActiveStyle} to='/pricing' className='link'>Pricing</NavLink>

            <NavLink onClick={closeMenu} activeStyle={linkActiveStyle} to='/faq' className='link'>FAQ</NavLink>

            <NavLink onClick={closeMenu} activeStyle={linkActiveStyle} to='/contact' className='link'>Contact</NavLink>
            {
                user.email? <span></span>
                :
                <NavLink onClick={closeMenu} activeStyle={linkActiveStyle} to='/register' className='link'>Register</NavLink>
            }

            {
                user.email?
               <button  onClick={logOut} className='logout-btn'>Logout</button>
                 :
                 <NavLink onClick={closeMenu} to='/login' className='link'>Login</NavLink>
                 
            
            }
            {
                user.email? 
                <NavLink onClick={closeMenu} to='/profile' className='link'>Profile</NavLink>
                : <span></span>
            }

            

        </ul>
    </nav>
    );
};

export default Navbar;