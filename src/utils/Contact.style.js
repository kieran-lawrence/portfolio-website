import styled, { css, keyframes } from 'styled-components';

export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 25px;
    color: #9a9a9a;

    @media screen and (max-width: 960px) { 
        height:81vh;
    }
    
`
export const ContactFormContent = styled.div`
    /*background: linear-gradient(180deg, rgba(10,92,107,1) 0%, rgb(4, 46, 53) 100%);*/
    background:#242424;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.65);
    border-radius: 10px;
    width:65%;
    height:70%;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    @media screen and (max-width: 960px) { 
        width:100%;
        height:85%;
    }
`
export const ContactFormHeading = styled.p`
    margin:24px 0 36px 0;
    font-size: 24px;

    @media screen and (max-width: 960px) { 
        margin:0px 0 12px 0;
        font-size:18px;
        height:8%;
        
    }
`
export const ContactForm = styled.form`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 960px) { 
        width:85%;
    }
`
export const ContactLabel = styled.label`
    font-size: 16px;
    color: #9a9a9a;
    text-align: left;
    margin: 20px 0 5px 0;
    text-transform: uppercase;
`
export const ContactInput = styled.input`
    padding: 8px 20px;
    border-radius: 5px;
    background-color:#202020;
    color:#9a9a9a;
    border: none;
    outline: 1px solid #333;
    min-width: 550px;
   
    :focus {
        outline: 1px solid #0A5C6B;
    }
    @media screen and (max-width: 960px) { 
        width:80%;
        min-width:80%;
    }

`
export const ContactInputLarge = styled.textarea`
    padding: 8px 20px;
    font-family: 'Karla', sans-serif;
    border-radius: 5px;
    background-color: #202020;
    color:#9a9a9a;
    outline: 1px solid #333;
    border: none;
    overflow:hidden;
    min-width: 550px;
    max-width: 550px;
    min-height:200px;
    max-height:400px;

    :focus {
        outline: 1px solid #0A5C6B;
    }
    @media screen and (max-width: 960px) { 
        width:80%;
        min-width:80%;
        resize:none;
        max-height:200px;
    }
    
`

export const SubmitButton = styled.button`
    padding: 8px 20px;
    margin: 10px;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    background-color:transparent;
    color: #9a9a9a;
    border: 1px solid #9a9a9a;
    font-size: 20px;
    width: 155px;
    height: 60px;
    :hover { 
        background-color: transparent;
        color: #0A5C6B;
        border: 1px solid #0A5C6B;
        font-weight:400;
        transition: all 0.2s ease-in-out;
        
    }

    @media screen and (max-width: 960px) { 
        width: 125px;
        height: 50px;
        margin-bottom:25px;
    }
`
const spin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const FancyButton = styled.button`
    letter-spacing:1px;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    background-color:transparent;
    color: #9a9a9a;
    border: 1px solid #9a9a9a;
    transition: all 0.25s ease;
    width: 155px;
    height: 60px;
    margin: 10px;
    animation: ${spin} 2s 0.25s linear infinite ;
    content:"Send";

    :clicked {
        width: 60px;
        height:60px;
        border-radius: 50%;
        content:"";
        border-left-color:#0A5C6B;
    }
    

`
