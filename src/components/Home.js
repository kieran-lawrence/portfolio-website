import React from 'react'
import { Link } from 'react-router-dom'
import { BackgroundSVG, ButtonOutline, ButtonSolid, HomeBlurbArea, HomeContainer, HomePageHeading, HomePageSubHeading, HomePictureArea, HomeSVGArea, SVGWave } from '../utils/styles/Home.style'

const Home = () => {
  return (
    <>
        <HomeContainer>
            <HomePictureArea>
                <div>
                    <img className='profilePicture' alt='Me' src='images/smee.png'/>  
                </div>
            </HomePictureArea>
            <HomeBlurbArea>
                <HomePageHeading>
                    Hi, <br />
                    My name is Kieran
                </HomePageHeading>
                <HomePageSubHeading>I have a passion for coding, and I am looking for a Junior Developer role</HomePageSubHeading>
                <div className='buttonArea'>
                    <Link to='/portfolio'><ButtonSolid large className='buttons'>Portfolio</ButtonSolid></Link>
                    <Link to='/contact'><ButtonOutline large className='buttons'>Contact</ButtonOutline></Link>
                </div>
            </HomeBlurbArea>
            
        </HomeContainer>
        <HomeSVGArea>
            <BackgroundSVG xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 1 v44h-352z" />
                </defs>
                <SVGWave class="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(18,18,18,0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(18,18,18,0.4)" />
                    <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(18,18,18,0.2)" />
                    <use xlinkHref="#gentle-wave" x="48" y="9" fill="#121212" />
                </SVGWave>
            </BackgroundSVG>
        </HomeSVGArea>
    </>
  )
}

export default Home