import React from 'react'
import { useParams } from 'react-router-dom'
import pfItems from '../../utils/data/portfolioItems'
import { FaGithubSquare } from 'react-icons/fa';
import { DetailsContainer, PFContainer, PFContentPanel, PFPicturePanel } from '../../utils/styles/Portfolio.style';

const PortfolioOverview = () => {
    const { id } = useParams()
    const pfItem = pfItems.filter((item) => {
        return item.id === parseInt(id) })
    return (
        <>
            <PFContainer>
                <PFPicturePanel>
                    <img src={pfItem[0].imgSrc} alt={pfItem[0].title}></img>
                </PFPicturePanel>
                <PFContentPanel>
                    <h1>{pfItem[0].title}</h1>
                    <DetailsContainer>
                        <div className='description'>{pfItem[0].description}</div>
                        <div className='tags'>
                            Libraries and Languages:
                            <ul>{pfItem[0].tags.map((tag) => {return <li>{tag}</li>})}</ul>
                        </div>
                        <a href={pfItem[0].gitHubLink}><FaGithubSquare /> View the source code</a>
                        </DetailsContainer>
                </PFContentPanel>
            </PFContainer>
        </>
    )
}

export default PortfolioOverview