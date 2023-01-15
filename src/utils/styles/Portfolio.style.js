import { Link } from 'react-router-dom';
import styled from 'styled-components';

const COLOR_PRIMARY = '#242424';
const COLOR_FEATURE = '#242424';
//0A5C6B
const COLOR_TEXT = '#9a9a9a';
const COLOR_BG = '#121212';

/* --- Portfolio Items --- */
export const PortfolioItemListItem = styled.li`
    display: flex;
    flex: 1;
    margin: 0 2rem;
    border-radius: 10px;
    background:${COLOR_PRIMARY};

    @media only screen and (max-width: 1024px) {
        margin-bottom: 2rem;
        width:100%;
        align-items: center;
        margin-left: 0;
    }
`

export const PortfolioLink = styled.a`
    display: flex;
    flex-flow: column;
    width: 100%;
    

    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
    :hover {
        box-shadow: 0 6px 20px rgba(4, 46, 53, 0.5);
        transition: 0.4s ease-in-out;
    }
`

export const PortfolioItemPicWrapper = styled.figure`
    position: relative;
    width: 100%;
    padding-top: 77%;
    overflow: hidden;

    :after {
        content: attr(data-category);
        position: absolute;
        top: 10px;
        right:0;
        padding: 15px 15px;
        max-width: calc((100%) - 50px);
        font-size: 14px;
        font-weight: 700;
        color: ${COLOR_TEXT};
        background-color: ${COLOR_PRIMARY};
        box-sizing: border-box;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);
    }
`

export const PortfolioItemPic = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;

    :hover {
        transform: scale(1.1);
        transition: 0.2s ease-in-out;
    }
`

export const PortfolioItemOverview = styled.div`
    padding: 50px 50px 50px;
`

export const PortfolioItemTitle = styled.h3`
    color: ${COLOR_TEXT};
    font-size: 20px;

`
export const PortfolioItemDesc = styled.h4`
    color: ${COLOR_TEXT};
    font-size: 16px;
    font-weight:400;
    margin-top:5px;
`
/* --- [End] Portfolio Items --- */

export const PortfolioPageWrapper = styled.div`
    padding: 4rem;
    background: #121212;
    

    h1 {
        text-align: center;
        color:#0A5C6B;
    }

    @media only screen and (max-width: 1024px) {
        padding: 2rem;
    }
    
`
export const PortfolioContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1420px;
    width: 90%;
    margin: 0 auto;
    min-height:73vh;

    @media only screen and (min-width: 1081px) {
        min-height:80vh;
    }

    @media only screen and (max-width: 1024px) {
        width: 100%;
    }
`
export const PortfolioItemWrapper = styled.div`
    position: relative;
    margin: 50px 0 45px;
    
`
export const PortfolioItemList = styled.ul`
    margin-bottom: 24px;

    @media only screen and (min-width: 1024px) {
        display: flex;
    }

    @media only screen and (max-width: 1024px) {
        margin-bottom: 2rem;

    }
`