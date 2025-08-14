"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import React from "react";
import RootLayout from "../layout";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import Form from "@/components/Form";
// imports unchanged

export default function CryptoCurrencySoftware() {
  const metaData = {
    title: "Crypto Currency Software - Vertex Algo Trading",
    description:
      "Explore powerful cryptocurrency trading software that supports automation, advanced analytics, and diversified portfolio management.",
    canonical: "https://vertexalgotrading.com/crypto-currency-software",
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
                      <h1>Crypto Currency Software</h1>
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
                        alt="Crypto Currency Software"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="promo-content mt-lg-5 ps-lg-5">
                      <h2>Navigate the Cryptocurrency Market</h2>
                      <div className="features-list">
                        <ul>
                          <li>
                            <img
                              className="me-2"
                              src="/assets/img/price/icon/1.png"
                              alt="feature"
                            />
                            Access real-time market data and actionable insights.
                          </li>
                          <li>
                            <img
                              className="me-2"
                              src="/assets/img/price/icon/1.png"
                              alt="feature"
                            />
                            Automate trades across major cryptocurrencies.
                          </li>
                          <li>
                            <img
                              className="me-2"
                              src="/assets/img/price/icon/1.png"
                              alt="feature"
                            />
                            Manage your portfolio with customizable tools.
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
                      <h2>Why Choose Our Crypto Software?</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="features-card-item style-1">
                      <div className="icon">
                        <img src="/assets/img/service/icons/1.png" alt="Icon" />
                      </div>
                      <h3>Advanced Algorithms</h3>
                      <p>
                        Leverage AI-based algorithms developed to support your trading strategy.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="features-card-item style-1">
                      <div className="icon">
                        <img src="/assets/img/service/icons/2.png" alt="Icon" />
                      </div>
                      <h3>Multi-Currency Support</h3>
                      <p>
                        Trade and monitor multiple cryptocurrencies including Bitcoin, Ethereum, and others.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="features-card-item style-1">
                      <div className="icon">
                        <img src="/assets/img/service/icons/3.png" alt="Icon" />
                      </div>
                      <h3>Risk Management Tools</h3>
                      <p>
                        Utilize automated stop-loss orders and alerts to help manage your risks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Uncomment Modal if needed */}
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
