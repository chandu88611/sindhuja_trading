"use client"

import Header from "@/components/Header"
import Layout from "@/components/Layout"
import RootLayout from "../layout"
import { useState, useEffect } from "react";
import { Modal } from "antd";
import Form from "@/components/Form";
function faqs() {
  const metaData = { 
    title: "Frequently Asked Questions - Equiwiz | Financial & Investment Solutions",
    description: "Get answers to your questions about Equiwiz’s financial and investment services, including trading, portfolio management, and insurance solutions. Explore our FAQs for insights and support.",
    canonical: "https://equiwiz.com/faqs",
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {

    const interval = setTimeout(() => {
      setIsModalVisible(true);
    }, 5000); // Show modal every 8 seconds
    return () => clearInterval(interval); // Clean up on unmount
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
          <h1>FAQ's</h1>
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
      style={{
        visibility: "visible",
        animationDuration: "1.2s",
        animationName: "fadeInDown"
      }}
    >
      <img src="/assets/img/shape/4.svg" alt="3d bg shape" />
    </div>
    <div className="col-lg-6 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
      <div className="block-contents">
        <div
          className="section-title wow fadeInDown"
          data-wow-duration="1.2s"
          style={{
            visibility: "visible",
            animationDuration: "1.2s",
            animationName: "fadeInDown"
          }}
        >
          <h2>Trading Questions, Answered Here</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="  mt-xl-0 mt-5">
        <div className="faq-accordion ms-xl-4 me-xl-4">
          <div className="accordion" id="mainaccordion">
            <div
              className="accordion-item wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              <h4 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqask1"
                  aria-expanded="false"
                  aria-controls="faqask1"
                >
                  Is the Trading Site Safe and Reliable?
                </button>
              </h4>
              <div
                id="faqask1"
                className="accordion-collapse collapse"
                data-bs-parent="#mainaccordion"
                style={{}}
              >
                <div className="accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Placeat consequuntur quisquam maiores expedita similique,
                  excepturi rerum. Porro!
                </div>
              </div>
            </div>
            <div
              className="accordion-item wow fadeInUp"
              data-wow-duration="1.1s"
              data-wow-delay=".6s"
              style={{
                visibility: "visible",
                animationDuration: "1.1s",
                animationDelay: "0.6s",
                animationName: "fadeInUp"
              }}
            >
              <h4 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqask2"
                  aria-expanded="false"
                  aria-controls="faqask2"
                >
                  Trading Fees and Commissions: How Much?
                </button>
              </h4>
              <div
                id="faqask2"
                className="accordion-collapse collapse"
                data-bs-parent="#mainaccordion"
                style={{}}
              >
                <div className="accordion-body">
                  Borem ipsum dolor, sit amet consectetur adipisicing elit.
                  Placeat consequuntur quisquam maiores expedita similique,
                  excepturi rerum. Porro!
                </div>
              </div>
            </div>
            <div
              className="accordion-item wow fadeInUp"
              data-wow-duration="1.1s"
              data-wow-delay=".9s"
              style={{
                visibility: "visible",
                animationDuration: "1.1s",
                animationDelay: "0.9s",
                animationName: "fadeInUp"
              }}
            >
              <h4 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqask3"
                  aria-expanded="false"
                  aria-controls="faqask3"
                >
                  Key factors for choosing a trading platform?
                </button>
              </h4>
              <div
                id="faqask3"
                className="accordion-collapse collapse"
                data-bs-parent="#mainaccordion"
              >
                <div className="accordion-body">
                  Torem ipsum dolor, sit amet consectetur adipisicing elit.
                  Placeat consequuntur quisquam maiores expedita similique,
                  excepturi rerum. Porro!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="faq-bottom ms-xl-4 mt-4 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".9s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.9s",
            animationName: "fadeInUp"
          }}
        >
          <span>Still have questions?</span>
          <a href="contact.html">Get in touch</a>
        </div>
      </div>
     
    </div>
  </div>
</section>
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
    </Layout>
    </RootLayout>
  )
}

export default faqs
