import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height:100%;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.65);
    
    .navMenu {
        display: flex;
        justify-content: center;
        width:50%;
        margin-right: 10px;
        
        @media screen and (max-width: 960px) {
            justify-content: end;
            padding-right: 10px;
            width:25%;
        }
        
        
    }
    .navLogo {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width:50%;

        @media screen and (max-width: 960px) {
            display: flex;
            justify-content: left;
            width:75%;
        }

        .navIcon{
            display: flex;
            width: 100px;
            height:100px;
        }
    }
`
export const NavMenuList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 35px;
    list-style: none;
    text-align: center;
    font-size: 1.3rem;
    align-items: center;
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        grid-gap: 5px;
        background: red;
        height: 400px;
        position: fixed;
        transform: translateY( ${props => props.clicked ? "0" : "-100%" } );
        opacity:${props => props.clicked ? "1" : "0" };
        transition-delay: 2s;
        transition-property:opacity;
        top: 58px;
        left:0;
        padding: 0%;
        padding-top:150px;
        
        transition: all 0.5s ease;
        background: ${props => props.clicked ? "#242424" : "none" };
        z-index:-1;
        box-shadow: 0px 20px 10px rgba(0, 0, 0, 0.5);
    }
`
export const NavMenuListItem = styled.li`
    @media screen and (max-width: 960px) {
        &:nth-child(1),&:nth-child(2),&:nth-child(3) { 
            margin-bottom:0px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 2px solid #0A5C6B;
            width:75%;
            height:60px;
            padding: 5px;
        }
        &:nth-child(3) {
            margin-bottom: 30px;
        }
    }
`

export const NavbarLink = styled(Link)`
    color: #9a9a9a;
    text-decoration: none;

    :hover {
        color: #0A5C6B;
        transition: all 0.2s ease;
        transform: scale(1.2);
    }
`
export const NavbarMobileMenu = styled.div`
    display:none;
    
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 60px;
        height: 60px;    
        margin: 10px;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
    } 
`
export const NavSpan = styled.span`
    display: block;
    position: absolute;
    margin: 10px;
    height: 5px;
    width: 80%;
    background: #0A5C6B;
    border-radius: 10px;
    opacity: 1;
    -webkit-transition: 0.4s ease-in-out;
    -moz-transition: 0.4s ease-in-out;
    -o-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out; 
    
    &:nth-child(1) {
        top:0px;
        ${props => props.clicked === true && css`
            opacity:0;
            top:18px;
        `} 
    }
    &:nth-child(2) {
        top: 18px;
        -webkit-transform: rotate(${props => props.clicked ? "45deg" : "0deg" });
        -moz-transform: rotate(${props => props.clicked ? "45deg" : "0deg" });
        -o-transform: rotate(${props => props.clicked ? "45deg" : "0deg"});
        transform: rotate(${props => props.clicked ? "45deg" : "0deg"}); 
    }
    &:nth-child(3) {
        top: 18px;
        -webkit-transform: rotate(${props => props.clicked ? "-45deg" : "0deg" });
        -moz-transform: rotate(${props => props.clicked ? "-45deg" : "0deg" });
        -o-transform: rotate(${props => props.clicked ? "-45deg" : "0deg"});
        transform: rotate(${props => props.clicked ? "-45deg" : "0deg"});
    }
    &:nth-child(4) {
        top:36px;
        ${props => props.clicked === true && css`
            opacity:0;
            top:18px;
        `}
    }
`

export const NavbarLogo = styled(Link)`
    color: #0A5C6B;
    font-size: 2.8rem;
    text-decoration: none;

    @media screen and (max-width: 960px) { 
        font-size: 2rem;
        margin-left: 5px;
    }
`
export const ContactButton = styled.button`
    background: none;
    width:130px;
    height:45px;
    border-radius: 10px;
    border: 2px solid #0A5C6B;
    font-size:inherit;
    color:#9a9a9a;
    
    :hover {
        background: #0A5C6B;
        transition: all 0.4s ease-in-out;
    }
    @media screen and (max-width: 960px) { 
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width:250px;
        height:70px;
        padding: 10px;
        border-radius:10px;
    }
    
`