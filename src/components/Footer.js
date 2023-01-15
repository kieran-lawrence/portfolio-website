import React from 'react';
import { FaGithubSquare,FaLinkedin } from 'react-icons/fa';
import { FooterContainer,SocialContainer,SocialWrap,SiteRightsFooter,SocialIcons,SocialLinks } from '../utils/styles/Footer.style';
function Footer() {
    return (
        <FooterContainer>
            <SocialContainer>
                <SocialWrap>
                    <SiteRightsFooter>Code by Kieran © 2023</SiteRightsFooter>
                    <SocialIcons>
                        <SocialLinks href='https://github.com/nfctargus' aria-label='GitHub'>
                            <FaGithubSquare />
                        </SocialLinks>
                        <SocialLinks href='https://www.linkedin.com/in/kieran-lawrence-892027202/' aria-label='LinkedIn'>
                            <FaLinkedin />
                        </SocialLinks>
                    </SocialIcons>
                </SocialWrap>
            </SocialContainer>
        </FooterContainer>
    );
}

export default Footer;