import React, { useState } from 'react';
import { NavbarLogo, NavContainer, NavMenuList,NavbarLink, ContactButton, NavbarMobileMenu, NavSpan, NavMenuListItem } from '../utils/styles/Navbar.style';

const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => { setClick(!click); }
    const closeMobileMenu = () => setClick(false);

  return (
    <NavContainer>
        <div className='navLogo'>
            <svg className ='navIcon' onClick={closeMobileMenu}>
                <circle cx="50" cy="50" r="33" stroke="#0A5C6B" stroke-width="2" fill="none" />
                <text x="50" y="70" text-anchor="middle" font-size="64" fill="#0A5C6B">K</text>
            </svg>
            <NavbarLogo to="/" onClick={closeMobileMenu}>Code by Kieran</NavbarLogo>
        </div>
        <div className='navMenu'>
            <NavMenuList clicked={click} onClick={handleClick}>
                <NavMenuListItem> <NavbarLink to="/"> Home </NavbarLink> </NavMenuListItem>
                <NavMenuListItem> <NavbarLink to="/portfolio"> Portfolio </NavbarLink> </NavMenuListItem>
                <NavMenuListItem> <NavbarLink to="/resume"> Resume </NavbarLink> </NavMenuListItem>
                <NavMenuListItem> <NavbarLink to="/contact"><ContactButton>Contact</ContactButton></NavbarLink></NavMenuListItem>
            </NavMenuList>
            <NavbarMobileMenu onClick={handleClick}>
                <NavSpan clicked={click}/>
                <NavSpan clicked={click}/>
                <NavSpan clicked={click}/>
                <NavSpan clicked={click}/>
            </NavbarMobileMenu>
        </div>
    </NavContainer>
  )
}

export default Navbar