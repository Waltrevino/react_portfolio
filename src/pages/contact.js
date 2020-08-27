import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/Form";

function ContactPage(props){
    return (
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
        <ContactForm />
        </div>
    )
}

export default ContactPage;