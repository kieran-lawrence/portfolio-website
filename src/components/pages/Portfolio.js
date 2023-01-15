import React from 'react'
import { PortfolioContainer, PortfolioItemList, PortfolioItemWrapper, PortfolioPageWrapper } from '../../utils/styles/Portfolio.style'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return (
    <PortfolioPageWrapper>
        <PortfolioContainer>
                <PortfolioItemWrapper>
                    <PortfolioItemList>
                        <PortfolioItem src='images/shard.png' text='Improved Obsidian' desc='A Minecraft mod I made which has over 400 downloads' label='Java' href='https://github.com/nfctargus/improved-obsidian-1.19' ariaLabel='GitHub Project Repo' />
                        <PortfolioItem src='images/medialibrary.png' text='Digital Library Checker (WIP)' desc='A tool to keep track of your CD, DVD or game collection. This is a work in progress!' label='Express' href='/contact' ariaLabel='Contact Page' />
                        <PortfolioItem src='images/thiswebsite.png' text='This website!' desc='I made this website using React, it is a testimony to my skills' label='React' href='https://github.com/nfctargus/my-website-v1' ariaLabel='GitHub Project Repo' />
                    </PortfolioItemList>
                </PortfolioItemWrapper>
            </PortfolioContainer>
    </PortfolioPageWrapper>
  )
}

export default Portfolio