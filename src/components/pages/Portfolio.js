import React from 'react'
import { PortfolioContainer, PortfolioItemList } from '../../utils/styles/Portfolio.style'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return (
        <PortfolioContainer>
            <PortfolioItemList>
                <PortfolioItem src='images/shard.png' text='Improved Obsidian' desc='A Minecraft mod I made which has over 400 downloads. I learnt Java during my Diploma and this was a great refresher in Object Oriented Programming' href='https://github.com/nfctargus/improved-obsidian-1.19' ariaLabel='GitHub Project Repo' />
                <PortfolioItem src='images/medialibrary.png' text='Digital Library Checker (WIP)' desc='A tool to keep track of your CD, DVD or game collection. This will be my biggest project and will likely be done in ExpressJS'  href='/contact' ariaLabel='Contact Page' />
                <PortfolioItem src='images/thiswebsite.png' text='This website!' desc='I made this website using React, it is an example of my skills to date. This site was made in React and is actually my second version of the site.'  href='https://github.com/nfctargus/my-website-v2' ariaLabel='GitHub Project Repo' />
            </PortfolioItemList>
        </PortfolioContainer>
  )
}

export default Portfolio