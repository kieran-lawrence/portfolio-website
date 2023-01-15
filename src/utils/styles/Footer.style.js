import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const SocialContainer = styled.section`
    max-width: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:5px;
`
export const SocialWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
`
export const SiteRightsFooter = styled.small`
    color: #9a9a9a;
    margin-bottom: 16px;
    font-size:13px;
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65px;
`
export const SocialLinks = styled.a`
    color: #9a9a9a;
    font-size: 26px;
    &:hover {
        color:#0A5C6B;
        transition: 0.2s ease-in-out;
    }
`