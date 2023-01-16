import React, { useRef, useState } from "react";
//import emailjs from "@emailjs/browser";
import { ContactContainer,ContactFormHeading,ContactFormContent,ContactForm,ContactLabel,ContactInput,ContactInputLarge,SubmitButton,FancyButton } from "../../utils/Contact.style";

const Contact = () => {
    const form = useRef();
    const [click,setClick] = useState(false);
    const handleClick = () => { setClick(!click); }

	const handleSubmit = (e) => {
		 e.preventDefault();

         document.getElementById("contactForm").reset();
         alert("Message Sent!");
         
        /* emailjs
        .sendForm(
            "service_ernzczn",
            "template_0gslky5",
            form.current
        )
        .then(
            (result) => {
                alert("Message Sent!");
            },
            (error) => {
                alert(error.text);
            }
        ); */
	}

	return (
		<>
			<ContactContainer>
                <ContactFormHeading>
                    Fill out the form below to get in touch with me
                </ContactFormHeading>
				<ContactFormContent>
					<ContactForm id="contactForm" onSubmit={handleSubmit}>
                        <ContactLabel htmlFor='name'>Name</ContactLabel>
						<ContactInput id='name' name='from_name' type='text'/>
                        <ContactLabel htmlFor='email' >Email</ContactLabel>
						<ContactInput id='email' name='from_email' type='email' />
                        <ContactLabel htmlFor='message'>What do you want to say?</ContactLabel>
						<ContactInputLarge id='message' name='message' type='text' />
                        <SubmitButton onClick={handleSubmit}>Send</SubmitButton>
					</ContactForm>
				</ContactFormContent>
                <small>This contact form is not fully functional, so no emails are actually sent</small>
			</ContactContainer>
		</>
	)
}

export default Contact