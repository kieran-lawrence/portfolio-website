import React from 'react'
import { PortfolioContainer, PortfolioItemList } from '../../utils/styles/Portfolio.style'
import PortfolioItem from './PortfolioItem'
import pfItems from '../../utils/data/portfolioItems'

const Portfolio = () => {
    return (
        <PortfolioContainer>
            <PortfolioItemList>
                {pfItems.map(function(item){
                    return <PortfolioItem key={item.id} id={item.id} src={item.imgSrc} text={item.title} desc={item.description} published={item.published} ariaLabel={item.ariaLabel} />
                }).reverse()}   
            </PortfolioItemList>
        </PortfolioContainer>
    )
}

export default Portfolio