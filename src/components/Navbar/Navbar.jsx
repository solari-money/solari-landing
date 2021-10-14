import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../images/solari_logo.png';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    LogoImg
} from './Navbar.elements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => window.addEventListener('scroll', changeNav), [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
      <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo onClick={toggleHome}>
                    <LogoImg src={Logo} alt="Chains"/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="docs" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Documentation</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="eco" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Ecosystem</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="roadmap" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Roadmap</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink href="https://app.solari.money/">Launch App</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>  
    );
}

export default Navbar;