import styled from 'styled-components';

/* --- PortfolioItem.js --- */
export const PortfolioItemListItem = styled.li`
    width: 30%;

    background:#242424;
    padding:0px;
    border-radius: 10px;
    transition: all 0.4s ease-in-out;
    :hover {
        box-shadow: 0px 0px 7px rgba(154, 154, 154, 0.5);
    }
    @media screen and (max-width: 960px) {
        width:95%;
        margin: 10px;
    }
`

export const PortfolioLink = styled.a`
    color:#9a9a9a;
    text-decoration:none;
    display: flex;
    flex-flow: column;
`

export const PortfolioItemPic = styled.img`
    max-width: 100%;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid #121212;
`

export const PortfolioItemOverview = styled.div`
    padding:10px;
    min-height: 150px;
`

export const PortfolioItemTitle = styled.h3`
    font-size: 20px;

`
export const PortfolioItemDesc = styled.h4`
    font-size: 16px;
    font-weight:400;
    margin-top:5px;
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