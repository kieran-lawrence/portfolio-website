import styled from 'styled-components';

export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 24px;
    color: #9a9a9a;



    @media screen and (max-width: 960px) { 
        
        height:80vh;
    }
    
`
export const ContactFormContent = styled.div`
    /*background: linear-gradient(180deg, rgba(10,92,107,1) 0%, rgb(4, 46, 53) 100%);*/
    background:#242424;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.65);
    border-radius: 10px;
    width:65%;
    height:70%;
    
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
    }
`
export const ContactForm = styled.form`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
`