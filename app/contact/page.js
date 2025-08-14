"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import RootLayout from "../layout";
import Form from "@/components/Form";
import { useState, useEffect } from "react";
import { Modal } from "antd";

function Contact() {
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsModalVisible(true);
    }, 5000); // Show modal after 5 seconds
    return () => clearTimeout(interval); // Clean up on unmount
  }, []);

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const metaData = {
    title: "Contact Us - Vertex Algo Trading | Financial & Investment Solutions",
    description:
      "Get in touch with Vertex Algo Trading for expert support on financial services, investment opportunities, and trading solutions. We're here to help with inquiries, guidance, and personalized assistance.",
    canonical: "https://vertexalgotrading.com/contact-us",
  };

  return (
    <RootLayout metadata={metaData}>
      <Layout>
        <>
          <div className="page-banner-wrap text-capitalize">
            <div className="container">
              <div className="row">
                <div className="col-12 col-xl-6 ps-xl-0 pe-xl-0 offset-xl-3 col-lg-8 offset-lg-2 text-center text-white">
                  <div className="page-heading">
                    <h1>Contact</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="contact-us-wrapper section-padding">
            <div className="container">
              <div className="row mt-3 mt-lg-5">
                <div className="col-lg-8 col-xl-6 offset-xl-3 offset-lg-2 text-center">
                  <div className="block-contents">
                    <div className="section-title mb-4">
                      <h2 className="wow fadeInUp">Get in touch now!</h2>
                      <p className="wow fadeInUp pt-15" data-wow-delay=".3s">
                        Have a question or need assistance? Please fill out the form below and our team will get back to you promptly. We respect your privacy and will handle your information securely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 pe-lg-4 order-2 order-lg-1">
                  <div className="contact-thumb me-lg-4 wow fadeInUp">
                    <img src="/assets/img/contact/1.png" alt="Contact Support" />
                  </div>
                </div>

                <div className="col-lg-6 pls-lg-4 wow fadeInUp order-1 order-lg-2">
                  <div
                    className="question__form-wrapper question__form-wrapper--style-2"
                    data-aos-duration={1000}
                    data-aos="fade-up"
                  >
                    <h3>Seeking Information?</h3>
                    <form
                      action="https://template.discretedev.com/html/tradepro/contact.php"
                      className="question__form"
                      id="contact-form"
                      method="post"
                    >
                      <div className="row g-4">
                        <div className="col-12">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your name"
                            aria-label="Name"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Your email"
                            aria-label="Email"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="Subject"
                            aria-label="Subject"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="message"
                            className="form-control form-control--message"
                            placeholder="Describe your message"
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      {/* Consider adding a visible privacy policy link here */}
                      <p className="mt-2" style={{ fontSize: "0.85rem", color: "#ccc" }}>
                        We value your privacy. Your information will be used only to respond to your inquiry. See our <a href="/privacy-policy" style={{ color: "#fff", textDecoration: "underline" }}>Privacy Policy</a>.
                      </p>

                      <button
                        type="submit"
                        className="form-control custom-btn text-center text-dark mt-4"
                      >
                        Message Submit
                      </button>
                    </form>
                    <p className="form-message mt-4" />
                  </div>
                </div>
              </div>

              <div className="row text-center mt-5">
                <div className="col-md-6 col-xl-4">
                  <div className="single-contact-box ">
                    <div className="contact-thumb">
                      <img src="/assets/img/contact/icon/1.png" alt="Phone Icon" />
                    </div>
                    <div className="contact-info">
                      <span>+91 83103 27035</span>
                      <span>+91 83103 27035</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="single-contact-box">
                    <div className="contact-thumb">
                      <img src="/assets/img/contact/icon/2.png" alt="Email Icon" />
                    </div>
                    <div className="contact-info">
                      <span>support@vertexalgotrading.com</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="single-contact-box ">
                    <div className="contact-thumb">
                      <img src="/assets/img/contact/icon/3.png" alt="Address Icon" />
                    </div>
                    <div className="contact-info">
                      <span>Hosur Main Road, Service Rd, Garvebhavi Palya</span>
                      <span>Bengaluru, Karnataka 560068</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Modal could be enabled if needed */}
          {/* <Modal
            title="Get in Touch"
            visible={isModalVisible}
            onCancel={handleClose}
            footer={null}
            centered
            width={600}
          >
            <div
              className="question__form-wrapper"
              data-aos-duration={1000}
              data-aos="fade-up"
            >
              <Form />
            </div>
          </Modal> */}
        </>
      </Layout>
    </RootLayout>
  );
}

export default Contact;
