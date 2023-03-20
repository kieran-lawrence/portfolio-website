import React from 'react'
import { PortfolioItemListItem, PortfolioItemOverview, PortfolioItemPic, PortfolioItemPublished, PortfolioItemTitle, PortfolioItemTitleContainer, PortfolioLink } from '../../utils/styles/Portfolio.style'

function PortfolioItem(props) {
    return (
        <PortfolioItemListItem >
            <PortfolioLink to={`/portfolio/${props.id}`}>
                <PortfolioItemPic alt='Project cover photo' src={props.src} />
                <PortfolioItemOverview>
                    <PortfolioItemTitleContainer>
                        <PortfolioItemTitle>{props.text}</PortfolioItemTitle>
                        <PortfolioItemPublished>{props.published}</PortfolioItemPublished>
                    </PortfolioItemTitleContainer>
                </PortfolioItemOverview>
            </PortfolioLink>
        </PortfolioItemListItem>
    )   
}

export default PortfolioItem