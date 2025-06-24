import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../atoms/Button";
import { validateEmail, validateOnlyText } from "../Validations";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const [apiError, setApiError] = useState("");
  const onSubmit = (values: ContactFormValues) => {
    try {
      console.log("Submitted:", values);
    } catch {
      setApiError(
        "Message could not be send! Please try contacting us directly from E-Mail."
      );
    }
  };

  return (
    <>
      {apiError && <div className="error">{apiError}</div>}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form className="Form">
            <h3 className="contact-us">CONTACT US DIRECTLY</h3>
            <label htmlFor="name">NAME</label>
            <ErrorMessage name="name" component="div" className="error" />
            <Field
              type="text"
              id="name"
              name="name"
              validate={validateOnlyText}
              className="name"
              required
            />
            <label htmlFor="email">EMAIL</label>
            <ErrorMessage name="email" component="div" className="error" />
            <Field
              type="email"
              id="email"
              name="email"
              validate={validateEmail}
              className="email"
              required
            />

            <label htmlFor="message">MESSAGE</label>
            <ErrorMessage name="message" component="div" className="error" />
            <Field
              as="textarea"
              id="message"
              name="message"
              className="message"
              required
            />
            <Button type="submit" className="Submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "SUBMIT"}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
