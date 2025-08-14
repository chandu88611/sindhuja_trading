"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import React from "react";
import RootLayout from "../layout";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import Form from "@/components/Form";
// imports remain unchanged

export default function ForexCurrencySoftware() {
  const metaData = {
    title: "Forex Currency Software - Vertex Algo Trading",
    description:
      "Discover innovative forex trading software designed to assist with market analysis, automate trades, and support informed trading decisions.",
    canonical: "https://vertexalgotrading.com/forex-currency-software",
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
      <main>
        <Layout>
          <>
            <div className="page-banner-wrap text-capitalize">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-xl-6 ps-xl-0 pe-xl-0 offset-xl-3 col-lg-8 offset-lg-2 text-center text-white">
                    <div className="page-heading">
                      <h1>Forex Currency Software</h1>
                      <nav aria-label="breadcrumb">
                        <ul className="breadcrumb justify-content-center">
                          <li className="breadcrumb-item">
                            <a href="/">Home</a>
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
                        alt="Forex Currency Software"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="promo-content mt-lg-5 ps-lg-5">
                      <h2>Enhance Your Forex Trading</h2>
                      <div className="features-list">
                        <ul>
                          <li>
                            <img
                              className="me-2"
                              src="/assets/img/price/icon/1.png"
                              alt="feature"
                            />
                            Advanced algorithmic strategies designed to support trading decisions.
                          </li>
                          <li>
                            <img
                              className="me-2"
                              src="/assets/img/price/icon/1.png"
                              alt="feature"
                            />
                            Real-time forex market data and analysis for better awareness.
                          </li>
                          <li>
                            <img
                              className="me-2"
                              src="/assets/img/price/icon/1.png"
                              alt="feature"
                            />
                            Automation to help execute trades efficiently with minimal manual input.
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
                  <img src="/assets/img/shape/4.svg" alt="background shape" />
                </div>
                <div className="col-xl-8 offset-xl-2 text-center">
                  <div className="block-contents">
                    <div className="section-title">
                      <h2>Why Choose Our Forex Software?</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="features-card-item style-1">
                      <div className="icon">
                        <img src="/assets/img/service/icons/1.png" alt="Icon" />
                      </div>
                      <h3>Market Analysis</h3>
                      <p>
                        Access detailed real-time forex market analysis to make informed decisions.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="features-card-item style-1">
                      <div className="icon">
                        <img src="/assets/img/service/icons/2.png" alt="Icon" />
                      </div>
                      <h3>Risk Management</h3>
                      <p>
                        Use risk management tools tailored to help you control exposure in forex trading.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="features-card-item style-1">
                      <div className="icon">
                        <img src="/assets/img/service/icons/3.png" alt="Icon" />
                      </div>
                      <h3>Trade Automation</h3>
                      <p>
                        Automate your trades with precise algorithms designed to enhance efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Modal can be uncommented when needed */}
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

