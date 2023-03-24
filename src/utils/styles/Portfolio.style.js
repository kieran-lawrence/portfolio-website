import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* --- PortfolioItem.js --- */
export const PortfolioItemListItem = styled.li`
    width: 19%;
    background:#242424;
    padding:0px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    border: 1px solid #ffffff99;
    :hover {
        transform: scale(1.03);
        box-shadow: none;
    }
    @media screen and (max-width: 960px) {
        width:95%;
        margin: 10px;
    }
`

export const PortfolioLink = styled(Link)`
    color:#9a9a9a;
    text-decoration:none;
    display: flex;
    flex-flow: column;
`

export const PortfolioItemPic = styled.img`
    width:100%;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid #121212;
    aspect-ratio: 4/3;
	object-fit: cover;
`

export const PortfolioItemOverview = styled.div`
    padding:10px;
    min-height: 100px;
`
export const PortfolioItemTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`
export const PortfolioItemTitle = styled.h3`
    font-size: 20px;
`
export const PortfolioItemPublished = styled.h3`
    font-size: 20px;
    padding:7px 10px;
    border-radius: 10px;
    border: 1px solid #0A5C6B;
`
/* --- [End] PortfolioItem.js  --- */


/* --- Portfolio.js --- */
export const PortfolioContainer = styled.div`  
    margin:10vh 1vh;
`
export const PortfolioItemList = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;  
    align-items: center;
    align-content: center;
    list-style: none;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
    }
`
/* --- PortfolioOverview.js --- */
export const PFContainer = styled.div`
    display: flex;
    flex-direction: row;
    height:85vh;
    padding: 0 4rem;
`
export const PFPicturePanel = styled.div`
    width:60%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        aspect-ratio: 4/3;
        height:75%;
        border-radius:1rem;
        border:1px solid #acacac;
        object-fit: cover;
    }
`
export const SandboxWrap = styled.div`
    width:95%;
    height:70%;
    border-bottom:1px solid #242424;
    
    header {
        background-color: #242424;
        font-size:1rem;
        text-align: center;
        height:4%;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }
    iframe {
        width:100%;
        height:96%;
        border:none;
    }
`
export const PFContentPanel = styled.div`
    width:40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height:10%;
        font-size: 2rem;
        background-color: #242424;
        border-radius:1rem;   
    }
`
export const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width:100%;
    height:40%;
    background-color: #242424;
    border-radius:1rem;   
    padding:2rem 0;

    a {
        font-size:1.3rem;
        display: flex;
        color:#9a9a9a;
        gap:0.7rem;
        text-decoration: none;
        justify-content: space-between;
        align-items: center; 
    }
    a:hover {
        color:#0A5C6B;
        transition: all 0.2s ease;
    }
    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        gap:1rem;
        width:90%;
    }
    li {
        font-size:1rem;
        background-color: #121212;
        padding:1rem;
        border-radius: 1rem;
    }
    .description {
        padding:0 1rem;
    }
    .tags {
        font-size:1.3rem;
        width:100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }

`
/* --- [End] PortfolioOverview.js  --- */

