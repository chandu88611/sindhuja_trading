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
    title: "ABOUT US - Equiwiz",
    description:
      "Learn about Equiwiz, your trusted partner in long-term investment solutions. We specialize in personal portfolio management, insurance, SIPs, mutual funds, loans, stock market trading, and F&O options for secure financial growth.",
    canonical: "https://algotradingelite.com/about"
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
            <h1>About Us</h1>
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

  {/* Promo Content Section */}
  <section className="promo-content-block fix section-padding section-bg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 col-12 mt-5 mt-xl-0 order-2 order-xl-1">
          <div className="block-contents">
            <div className="section-title mb-4">
              <h2 className="wow fadeInUp">
                Building Long-Term Wealth and Financial Security
              </h2>
            </div>
              <p className="text-white text-sm" data-wow-delay=".3s">
                At Equiwiz, our mission is to empower individuals and families to achieve their financial goals through a suite of tailored investment solutions. From personal portfolio management to stock trading, we are dedicated to helping you build a secure financial future.
              </p>
          </div>
          <div className="funfacts d-flex">
            <div className="single-funfact wow fadeInUp" data-wow-delay=".5s">
              <h3>
                <span>950</span>+
              </h3>
              <p>Happy Clients</p>
            </div>
            <div className="single-funfact wow fadeInUp" data-wow-delay=".8s">
              <h3>
                <span>98</span>%
              </h3>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="col-xl-5 offset-xl-1 order-1 order-xl-2">
          <img src="/assets/img/promo/1.png" alt="Clients" />
        </div>
      </div>
    </div>
  </section>

  {/* About Section */}
  <section className="content-block section-padding section-bg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-5 pe-lg-0 col-lg-5 col-12">
          <div className="block-img wow fadeInLeft" data-wow-duration="1.1s">
            <img src="/assets/img/benifit/1.png" alt="Benefit Image" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-7 offset-xl-1 col-12 ps-lg-5 pe-xl-5">
          <div className="block-contents ms-xl-3 mt-5 mt-lg-0">
            <div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
              <h2>Comprehensive Investment Solutions</h2>
            </div>
            <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
              Equiwiz offers a broad range of investment solutions including personalized portfolio management, life and motor insurance, SIPs, and mutual funds. We provide strategic support to maximize your wealth while managing risk effectively.
            </p>
            <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
              Our team brings decades of experience in the stock market, options trading, F&O, and loan management, helping you build a portfolio tailored to your financial aspirations.
            </p>
            <a href="#" className="custom-btn mt-4">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Token Distribution Section */}
  <section className="content-block section-padding section-bg-dark">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-7 offset-xl-1 col-12 pe-xl-5">
          <div className="block-contents ms-xl-3 mt-5 mt-lg-0">
            <div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
              <h2>Fair and Transparent Token Distribution</h2>
            </div>
            <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
              Equiwiz ensures fair and transparent token distribution to promote trust and reliability. Our token management approach is aligned with regulatory standards to support secure, long-term investment growth.
            </p>
            <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
              Join our community to access transparent investment opportunities that prioritize your growth and financial security.
            </p>
            <a href="#" className="custom-btn mt-4">
              Get Started
            </a>
          </div>
        </div>
        <div className="col-xl-5 pe-lg-0 col-lg-5 col-12">
          <div className="block-img wow fadeInLeft" data-wow-duration="1.1s">
            <img src="/assets/img/benifit/2.png" alt="Benefit Image" />
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Client Investment Summary Section */}
  <section className="user-ditails-wrapper fix section-bg section-padding">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-sm-6">
          <div className="single-user-ditails-card mb-4 mb-xl-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
            <div className="user-card-wrapper">
              <div className="user-card-thumb">
                <img src="/assets/img/user/card/01.png" alt="Investment Icon" />
              </div>
              <div className="user-card-content">
                <h4>Total Invested</h4>
                <p>$9,374,034</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="single-user-ditails-card mb-4 mb-xl-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
            <div className="user-card-wrapper">
              <div className="user-card-thumb">
                <img src="/assets/img/user/card/02.png" alt="Global Reach Icon" />
              </div>
              <div className="user-card-content">
                <h4>Global Reach</h4>
                <p>196 Countries</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="single-user-ditails-card mb-4 mb-xl-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
            <div className="user-card-wrapper">
              <div className="user-card-thumb">
                <img src="/assets/img/user/card/03.png" alt="Remittances Icon" />
              </div>
              <div className="user-card-content">
                <h4>Total Remittances</h4>
                <p>$99,915,448</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="single-user-ditails-card mb-4 mb-xl-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
            <div className="user-card-wrapper">
              <div className="user-card-thumb">
                <img src="/assets/img/user/card/04.png" alt="Members Icon" />
              </div>
              <div className="user-card-content">
                <h4>Total Members</h4>
                <p>40,216</p>
              </div>
            </div>
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
