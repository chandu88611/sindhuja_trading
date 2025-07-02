"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import React from "react";
import RootLayout from "../layout";
import Form from "@/components/Form";
import { useState, useEffect } from "react";
import { Modal } from "antd";
export default function About() {
  const metaData = {
    title: "Commodity Software - Equiwiz",
    description:
      "Unlock the potential of commodity trading with our cutting-edge automated trading software. Designed for efficiency and precision, our software offers advanced analytics, real-time updates, and a seamless trading experience.",
    canonical: "https://algotradingelite.com/commodity-software"
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
      <main>
        <Layout>
          <>
            <div className="page-banner-wrap text-capitalize">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-xl-6 ps-xl-0 pe-xl-0 offset-xl-3 col-lg-8 offset-lg-2 text-center text-white">
                    <div className="page-heading">
                      <h1>Commodity Software</h1>
                      <nav aria-label="breadcrumb">
                        <ul className="breadcrumb justify-content-center">
                          <li className="breadcrumb-item">
                            <a href="index-2.html">Home</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="promo-section section-padding section-bg">
              <div className="container">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="promo-thumb">
                      <img
                        className="rounded"
                        src="/assets/img/promo/2.png"
                        alt="Commodity Software"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="promo-content mt-lg-5 ps-lg-5">
                      <h2>Master the Commodity Market</h2>
                      <div className="features-list">
                        <ul>
                          <li>
                            <img
                              className="me-2"
                              src="/assets/img/price/icon/1.png"
                              alt="feature"
                            />
                            Real-time analytics for informed decision-making.
                          </li>
                          <li>
                            <img
                              className="me-2"
                              src="/assets/img/price/icon/1.png"
                              alt="feature"
                            />
                            Automated trading for maximum efficiency.
                          </li>
                          <li>
                            <img
                              className="me-2"
                              src="/assets/img/price/icon/1.png"
                              alt="feature"
                            />
                            Comprehensive market insights and alerts.
                          </li>
                        </ul>
                      </div>
                      <div className="promo-btn mt-5">
                        <a href="signup.html" className="custom-btn">
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="our-best-features-wrapper section-padding">
              <div className="container">
                <div
                  className="nice-arrow-icon d-none d-lg-block wow fadeInDown"
                  data-wow-duration="1.2s"
                >
                  <img src="/assets/img/shape/4.svg" alt="bg shape" />
                </div>
                <div className="col-xl-8 offset-xl-2 text-center">
                  <div className="block-contents">
                    <div className="section-title">
                      <h2>Why Choose Our Commodity Software?</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="features-card-item style-1">
                      <div className="icon">
                        <img src="/assets/img/service/icons/1.png" alt="Icon" />
                      </div>
                      <h3>
                        <a href="services-details.html">Precision Trading</a>
                      </h3>
                      <p>
                        Leverage accurate algorithms designed to optimize your trading strategies.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="features-card-item style-1">
                      <div className="icon">
                        <img src="/assets/img/service/icons/2.png" alt="Icon" />
                      </div>
                      <h3>
                        <a href="services-details.html">Customizable Options</a>
                      </h3>
                      <p>
                        Tailor your trading parameters to match your investment goals.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="features-card-item style-1">
                      <div className="icon">
                        <img src="/assets/img/service/icons/3.png" alt="Icon" />
                      </div>
                      <h3>
                        <a href="services-details.html">Real-time Alerts</a>
                      </h3>
                      <p>
                        Stay ahead with instant updates on market trends and opportunities.
                      </p>
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
          </>
        </Layout>
      </main>
    </RootLayout>
  );
}
