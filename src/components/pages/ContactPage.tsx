import React from "react";
import StartCard from "../organismes/StartCard";
import ContactCard from "../organismes/ContacCard";
import ContactForm from "../organismes/ContactForm";
const ContactPage: React.FC = () => {
  return (
    <>
      <StartCard value={"Contact"} src={""}></StartCard>
      <ContactCard></ContactCard>
      <ContactForm />
    </>
  );
};

export default ContactPage;
