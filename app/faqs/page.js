"use client";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import RootLayout from "../layout";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import Form from "@/components/Form";

function Faqs() {
  const metaData = {
    title: "Frequently Asked Questions - Vertex Algo Trading | Financial & Investment Solutions",
    description:
      "Find answers about algorithmic trading, customization options, and how to get started with Vertex Algo Trading.",
    canonical: "https://vertexalgotrading.com/faqs",
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsModalVisible(true);
    }, 5000);
    return () => clearTimeout(interval);
  }, []);

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <RootLayout metadata={metaData}>
      <Layout>
        <div className="page-banner-wrap bg-cover text-capitalize">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 offset-lg-3 text-center text-white">
                <div className="page-heading">
                  <h1>FAQs</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="faq-video-block section-padding section-bg">
          <div className="container">
            <div
              className="nice-arrow-icon d-none d-lg-block wow fadeInDown"
              data-wow-duration="1.2s"
              style={{ visibility: "visible", animationDuration: "1.2s", animationName: "fadeInDown" }}
            >
              <img src="/assets/img/shape/4.svg" alt="3D background shape" />
            </div>
            <div className="col-lg-6 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
              <div className="block-contents">
                <div
                  className="section-title wow fadeInDown"
                  data-wow-duration="1.2s"
                  style={{ visibility: "visible", animationDuration: "1.2s", animationName: "fadeInDown" }}
                >
                  <h2>Trading Questions, Answered Here</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7 ps-xl-5 col-12 mt-xl-0 mt-5">
                <div className="faq-accordion ms-xl-4 me-xl-4">
                  <div className="accordion" id="mainaccordion">
                    <div className="accordion-item wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq1"
                          aria-expanded="true"
                          aria-controls="faq1"
                        >
                          What is algorithmic trading?
                        </button>
                      </h4>
                      <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#mainaccordion">
                        <div className="accordion-body">
                          Algorithmic trading uses computer programs to automatically execute trades based on pre-set rules and strategies.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".6s">
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq2"
                          aria-expanded="false"
                          aria-controls="faq2"
                        >
                          Do you guarantee profits?
                        </button>
                      </h4>
                      <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#mainaccordion">
                        <div className="accordion-body">
                          No. Trading always involves risk. We provide tools to help you trade efficiently, but results depend on market conditions and your strategy.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".9s">
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq3"
                          aria-expanded="false"
                          aria-controls="faq3"
                        >
                          Do I need trading experience to use your services?
                        </button>
                      </h4>
                      <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#mainaccordion">
                        <div className="accordion-body">
                          Not necessarily. Our systems are designed to be beginner-friendly, but understanding the basics of trading is recommended.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item wow fadeInUp" data-wow-duration="1.1s" data-wow-delay="1.2s">
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq4"
                          aria-expanded="false"
                          aria-controls="faq4"
                        >
                          Can I customize the trading strategies?
                        </button>
                      </h4>
                      <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#mainaccordion">
                        <div className="accordion-body">
                          Yes. We offer strategy customization to suit your trading style and goals.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item wow fadeInUp" data-wow-duration="1.1s" data-wow-delay="1.5s">
                      <h4 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq5"
                          aria-expanded="false"
                          aria-controls="faq5"
                        >
                          How do I get started?
                        </button>
                      </h4>
                      <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#mainaccordion">
                        <div className="accordion-body">
                          Contact us through our website form or email, and our team will guide you through setup.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="faq-bottom ms-xl-4 mt-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".9s">
                <span>Still have questions?</span> <a href="contact.html">Get in touch</a>
              </div>

              <div className="col-lg-5 pe-xl-5 col-12">
                <div className="question__form-wrapper" data-aos-duration={1000} data-aos="fade-up">
                  <h3>Seeking Information?</h3>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </RootLayout>
  );
}

export default Faqs;
