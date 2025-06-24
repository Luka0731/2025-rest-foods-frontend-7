import React from "react";
import StartCard from "../organismes/StartCard";
import ContactCard from "../organismes/ContacCard";
import ContactForm from "../organismes/ContactForm";
import "../../styling/ContactPage.css";
const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <StartCard value={"Contact"} src={""}></StartCard>
      <ContactCard></ContactCard>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
