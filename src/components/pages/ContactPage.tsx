import React from "react";
import StartCard from "../organismes/StartCard";
import ContactCard from "../organismes/ContacCard";
import ContactForm from "../organismes/ContactForm";
import "../../styling/ContactPage.css";
import TopNav from "../organismes/TopNav";
const ContactPage: React.FC = () => {
  return (
    <>
      <TopNav />
      <StartCard
        value={"Contact"}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg"
        }
      ></StartCard>
      <div className="contact-page">
        <ContactCard></ContactCard>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
