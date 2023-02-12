import React from 'react'
import { PortfolioContainer, PortfolioItemList } from '../../utils/styles/Portfolio.style'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return (
        <PortfolioContainer>
            <PortfolioItemList>
                <PortfolioItem src='images/medialibrary.png' text='Book Collection Reviewer' desc='A tool to keep track of your book collection. Data is stored in MongoDB and is fetched from the Google Books API. This project was written in Angular which I really enjoyed!' published='Feb 2023' href='https://github.com/nfctargus/book-collection-reviewer' ariaLabel='Contact Page' />
                <PortfolioItem src='images/thiswebsite.png' text='This website' desc='I made this website using React, whilst not extremely complex this was a lot of fun designing and then building from scratch.' published='Jan 2023' href='https://github.com/nfctargus/my-website-v2' ariaLabel='GitHub Project Repo' />
                <PortfolioItem src='images/shard.png' text='Improved Obsidian' desc='A Minecraft mod I made which has over 500 downloads. This was the first project I started and helped me get back into my programming groove.' href='https://github.com/nfctargus/improved-obsidian-1.19' published='Dec 2022' ariaLabel='GitHub Project Repo' />
            </PortfolioItemList>
        </PortfolioContainer>
  )
}

export default Portfolio