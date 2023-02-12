import styled from 'styled-components';

const COLOR_PRIMARY = '#042E35';
const COLOR_FEATURE = '#242424';
const COLOR_TEXT = '#9a9a9a';

export const ResumeBG = styled.div`
    background: #121212;
    height:100%;
    display: flex;
    
`
export const ResumeContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align:center;
    width: 60%;
    margin: 0 auto;
    padding: 10px 0 10px 0;

    @media only screen and (max-width: 960px) {
        flex-direction: column;
        width:95%;
    }
    
`;
export const ResumeLeftPanel = styled.div`
    width:5%;
    background:${COLOR_PRIMARY};
    padding: 2px;
    align-self: center;
    margin: 0 auto;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.65);
    height:79vh;
    display:flex;
    flex-direction:column;
    align-content: space-between;
    align-items:center;
    justify-content: center;
    font-size:30px;
    color:${COLOR_TEXT};

    @media only screen and (max-width: 960px) {
        display: none;
    }
    
`
export const ResumeMiddlePanel = styled.div`
    width:25%;
    min-width:200px;
    background:${COLOR_FEATURE};
    padding: 5px;
    height:84vh;
    box-shadow: 7px 10px 20px rgba(0, 0, 0, 0.65);
    @media only screen and (max-width: 960px) {
        width:100%;
        padding:0;
        margin-bottom:1vh;
    }
`
export const ResumeRightPanel = styled.div`
    width:70%;
    background:${COLOR_PRIMARY};
    align-self: center;
    padding: 5px;
    height:79vh;
    
    box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.65);
    &:h1 {
        font-size:5rem;
    }

    @media only screen and (max-width: 960px) {
        width:100%;
        height:100vh;
        padding:0;
    }
`
export const ResumeTitle = styled.h1`
    font-size:24px;
    font-weight:bold;
    color:${COLOR_TEXT};
    font-family: 'Karla', sans-serif;
    text-align: center;

    @media only screen and (max-width: 580px) {
        font-size:20px; 
    }
    @media only screen and (min-width: 2000px) {
        font-size:26px;
    } 
`;
export const ResumeHeader = styled.h1`
    font-size:20px;
    font-weight:bold;
    color:${COLOR_TEXT};
    font-family: 'Karla', sans-serif;
    text-align: center;
    padding-top: 20px;

    @media only screen and (max-width: 960px) {
        font-size:16px; 
        padding-top: 5px;
    }
`;
export const ResumeSubHeader = styled.h2`
    color:${COLOR_TEXT};
    font-size: 16px;
    text-align: center;
    font-weight:600;
    margin-top:15px;

    @media only screen and (max-width: 960px) {
        margin:5px;
    }
    @media only screen and (min-width: 2000px) {
        margin-top:25px;
        font-size:18px;
    } 
    .smaller {
        font-size:15px;   
        margin-bottom:8px;
        font-weight:400;
        @media only screen and (max-width: 960px) {
            margin:0px;
            font-size: 14px;
        }
        @media only screen and (min-width: 2000px) {
            font-size:18px;
        } 
    }

    &:first-child {
        margin-top:0;
    }
`
export const ResumePic = styled.img`
    max-width:100%;
    max-height:100%;

    @media only screen and (max-width: 960px) {
        padding-top:10px;
        max-width:60%;
        max-height:60%; 
    }
    @media only screen and (max-width: 580px) {
        padding-top:10px;
        max-width:40%;
        max-height:40%; 
    }

`

export const ResumeContent = styled.span`
    display:block;
    margin: 10px;
    text-align: justify;
    font-size:14px;
    text-justify: distribute;
    color:${COLOR_TEXT};

    @media only screen and (min-width: 2000px) {
        font-size:17px;
    }  
    .workExperienceDetails {

        @media only screen and (max-width: 960px) {
            display:none;
        }    
    }
    .skills {
        margin-top:35px;
        display:grid;
        grid-template-columns: 70px 70px;
        grid-row: auto auto;
        grid-column-gap: 50px;
        grid-row-gap: 10px;
        justify-content: center;
        @media only screen and (max-width: 960px) {
            margin:25px 0 25px 0;
        }
    }
    .mobileLinks {
        display:none;
        @media only screen and (max-width: 960px) {
            background:${COLOR_PRIMARY};
            
            width:100%;
            display:flex;
            flex-direction: row;
            align-items: center;
            align-content: space-between;
            justify-content: center;
            margin: 5px;
        }  
    }
    @media only screen and (max-width: 960px) { 
        font-size: 13px;
        
    }
    
`
export const ResumeDividingLine = styled.div`
    height:1px;
    background:${COLOR_TEXT};
    width:75%;
    display:flex;
    left:12.5%;
    position:relative;
    align-self: center;
    align-content: center;
    justify-content: center;
    text-align:center;
`
export const ResumeIcons = styled.div`
    width: 50px;
    height: 50px;
    color: #0A5C6B;     
`
export const ResumeLinks = styled.a`
    
    :link {
        color: #0A5C6B;
    }
    :visited {
        color:#9a9a9a;
    }
    :hover {
        color: #242424;
    }    
`

export const ResumeSkills = styled.div`
    background-color:#9a9a9a;
    color: #242424;
    padding:15px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size:34px;

    :hover {
        color: ${COLOR_PRIMARY};
    }
`
