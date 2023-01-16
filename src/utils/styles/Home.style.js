import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    height:85%;
    background: linear-gradient(180deg, rgba(10,92,107,1) 0%, rgb(4, 46, 53) 100%);
    align-items: center;
    
    @media screen and (max-width: 960px) { 
        display: flex;
        flex-direction: column; 
        align-items: center;
        height:85%;
        
    }
`
export const HomePictureArea = styled.div`
    width: 35%;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .profilePicture {
        max-width: 75%;
        
        @media screen and (max-width: 960px) {
            max-height: 85%;
            display: flex;
        }
    }
        
    @media screen and (max-width: 960px) { 
        width:100%;
        height:35%;
        
    }
`
export const HomeBlurbArea = styled.div`
    width:65%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    padding-left: 10px;
    @media screen and (max-width: 960px) { 
        width:95%;
    }

    .buttonArea {
        display: flex;
    }
`
export const HomePageHeading = styled.h1`
    font-weight:300;
    letter-spacing: 2px;
    font-size:48px;

    @media screen and (max-width: 960px) { 
        font-size:32px;
        width:90%;
    }
`
export const HomePageSubHeading = styled.h2`
    font-size:24px;
    font-weight:300;
    margin:20px;

    @media screen and (max-width: 960px) { 
        font-size:20px;
    }
`
export const ButtonSolid = styled.button`
    background: #242424;
    color:#9a9a9a;
    border:none;
    outline: 2px solid #242424;
    width:160px;
    height:60px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    font-size:20px;
    margin:10px;
    :hover {
        background: none;
        outline: 2px solid #9a9a9a;
        
    }
`
export const ButtonOutline = styled.button`
    background: none;
    border:none;
    outline: 2px solid #9a9a9a;
    color:#9a9a9a;
    width:160px;
    height:60px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    font-size:20px;
    margin:10px;
    :hover {
        background: #242424;
        outline: 2px solid #242424;
        color:#9a9a9a;
        border:none;
    }
`
export const HomeSVGArea = styled.div`
    width: 100%;
    height: 13%;
    z-index: 5;
    background: rgb(4, 46, 53);

    @media screen and (max-width: 960px) { 
        height:10%;
    }
`
export const BackgroundSVG = styled.svg`
    width: 100%;
    height:100%; 
`
const waves = keyframes`
    0%,100% {
        transform: translate3d(0px,0px,0);
    }
    50% { 
        transform: translate3d(90px,0px,0);
    }
`

export const SVGWave = styled.g`
    animation: ${waves} infinite 25s cubic-bezier(0.0, 0.0, 1.0, 1.0) ;

    &:nth-child(1) {
        animation-delay: -5s;
        animation-duration: 20s;
    }
    &:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 22s;
    }
    &:nth-child(3) {
        animation-delay: -5s;
        animation-duration: 20s;
    }
`