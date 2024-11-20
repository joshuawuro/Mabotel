import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <div className="bg-white shadow-md rounded-md p-6 max-w-md w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">
        We'd love to hear from you! Whether you have questions about the
        Wassaman Youth Excellence Awards, want to nominate a young achiever, or
        are interested in sponsorship opportunities, please feel free to reach
        out. Our team is here to assist you.
      </p>

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">
                Name*
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className={`w-full px-3 py-2 border ${
                  touched.name && errors.name
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {touched.name && errors.name && (
                <div className="text-red-500 mt-1">{errors.name}</div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email*
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full px-3 py-2 border ${
                  touched.email && errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {touched.email && errors.email && (
                <div className="text-red-500 mt-1">{errors.email}</div>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block font-medium mb-1">
                What can we help you with?
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={4}
                placeholder="Enter your message"
                className={`w-full px-3 py-2 border ${
                  touched.message && errors.message
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {touched.message && errors.message && (
                <div className="text-red-500 mt-1">{errors.message}</div>
              )}
            </div>

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded w-full"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
