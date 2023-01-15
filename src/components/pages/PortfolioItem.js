import React from 'react'
import { PortfolioItemDesc, PortfolioItemListItem, PortfolioItemOverview, PortfolioItemPic, PortfolioItemPicWrapper, PortfolioItemTitle, PortfolioLink } from '../../utils/styles/Portfolio.style'

function PortfolioItem(props) {
  return (
    <>
            <PortfolioItemListItem>
                <PortfolioLink href={props.href} aria-label={props.ariaLabel}>
                    <PortfolioItemPicWrapper data-category={props.label}>
                        <PortfolioItemPic alt='Project cover photo' src={props.src} />
                    </PortfolioItemPicWrapper>
                    <PortfolioItemOverview>
                        <PortfolioItemTitle>{props.text}</PortfolioItemTitle>
                        <PortfolioItemDesc>{props.desc}</PortfolioItemDesc>
                    </PortfolioItemOverview>
                </PortfolioLink>
            </PortfolioItemListItem>
        </>
  )
}

export default PortfolioItem