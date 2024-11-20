import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  AiFillMail,
  AiFillPhone,
  AiFillEnvironment,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTikTok,
} from "react-icons/ai";

function ContactSection() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });
  return (
    <>
      <div className="max-w-[1240px] mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold py-2 text-[--text-gray]">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row max-w-[1000px] gap-10">
          <div>
            <p className="text-[--text-light-gray]">
              We'd love to hear from you! Whether you have questions about the
              Wassaman Youth Excellence Awards, want to nominate a young
              achiever, or are interested in sponsorship opportunities, please
              feel free to reach out. Our team is here to assist you.
            </p>
            <div className="pt-5">
              <div className="flex items-top gap-5">
                <AiFillMail size={25} className="text-[--orange]" />
                <div>
                  <h1 className="uppercase font-semibold text-[--orange]">
                    Email Address
                  </h1>
                  <p className="text-[--text-light-gray] font-semibold">
                    Wassamanyea@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-top gap-5 my-6">
                <AiFillPhone size={25} className="text-[--orange]" />
                <div>
                  <h1 className="uppercase font-semibold text-[--orange]">
                    phone Nunmber
                  </h1>
                  <p className="text-[--text-light-gray] font-semibold">
                    054 0387567 || 020 140 7917
                  </p>
                </div>
              </div>
              <div className="flex items-top gap-5">
                <AiFillEnvironment size={25} className="text-[--orange]" />
                <div>
                  <h1 className="uppercase font-semibold text-[--orange]">
                    Locate us
                  </h1>
                  <p className="text-[--text-light-gray] font-semibold">
                    Our office is located at: <br />
                    Address: Mabotel Honours <br />
                    Network,1234 Youth Avenue, <br />
                    Wassa Central, Wassaman <br />
                    Region, Ghana.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <h1 className="uppercase font-semibold text-[--orange]">
                  Follow us on social media
                </h1>
                <div className="flex">
                  <AiFillFacebook size={25} className="text-[--orange]" />
                  <AiFillInstagram size={25} className="text-[--orange]" />
                  <AiFillTikTok size={25} className="text-[--orange]" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[--white] border shadow-md rounded-2xl p-6 md:w-96 ">
              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="text-[--text-gray] block font-medium mb-1"
                      >
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
                            : "border-[--text-lighter-gray]"
                        }`}
                      />
                      {touched.name && errors.name && (
                        <div className="text-red-500 mt-1">{errors.name}</div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="text-[--text-gray] block font-medium mb-1"
                      >
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
                            : "border-[--text-lighter-gray]"
                        }`}
                      />
                      {touched.email && errors.email && (
                        <div className="text-red-500 mt-1">{errors.email}</div>
                      )}
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="text-[--text-gray] block font-medium mb-1"
                      >
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
                            : "border-[--text-lighter-gray]"
                        }`}
                      />
                      {touched.message && errors.message && (
                        <div className="text-red-500 mt-1">
                          {errors.message}
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="bg-[--orange] hover:bg-[--orange-light] text-[--white] font-medium py-2 px-4 rounded w-full"
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
