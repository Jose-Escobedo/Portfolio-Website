import React from "react";
import { MainLayout } from "../styles/Layouts";
import { ContactStyled } from "../components/Contact/ContactElements";
import Title from "../components/Main/Title";
import ContactForm from "../components/Contact/ContactForm";
const ContactPage = () => {
  return (
    <MainLayout>
      <ContactStyled>
        <Title title={"Contact"} span={"Contact"} />
        <ContactForm />
      </ContactStyled>
    </MainLayout>
  );
};

export default ContactPage;
