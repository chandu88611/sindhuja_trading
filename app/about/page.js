"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import React, { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Modal } from "antd";

// ...imports remain unchanged

export default function About() {
  const metaData = {
    title: "ABOUT US - Vertex Algo Trading",
    description:
      "Learn about Vertex Algo Trading — our mission, values, and commitment to providing responsible, transparent trading technology and support.",
    canonical: "https://vertexalgotrading.com/about",
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsModalVisible(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsModalVisible(false);
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
                    <h1>About Us</h1>
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

          {/* Promo Content Section */}
          <section className="promo-content-block fix section-padding section-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-12 mt-5 mt-xl-0 order-2 order-xl-1">
                  <div className="block-contents">
                    <div className="section-title mb-4">
                      <h2 className="wow fadeInUp">
                        Empowering Traders Responsibly
                      </h2>
                    </div>
                    <p
                      className="text-white text-sm"
                      data-wow-delay=".3s"
                    >
                      At Vertex Algo Trading, our goal is to make technology accessible for all traders—while highlighting the importance of risk-awareness.
                      We provide tools designed to support informed decision-making, helping traders reduce emotional bias and improve discipline.
                    </p>
                  </div>
                </div>
                <div className="col-xl-5 offset-xl-1 order-1 order-xl-2">
                  <img src="/assets/img/promo/1.png" alt="About Us" />
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="content-block section-padding section-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 pe-lg-0 col-lg-5 col-12">
                  <div
                    className="block-img wow fadeInLeft"
                    data-wow-duration="1.1s"
                  >
                    <img src="/assets/img/benifit/1.png" alt="Benefit" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 offset-xl-1 col-12 ps-lg-5 pe-xl-5">
                  <div className="block-contents ms-xl-3 mt-5 mt-lg-0">
                    <div
                      className="section-title wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".2s"
                    >
                      <h2>Our Mission & Values</h2>
                    </div>
                    <p
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                    >
                      With years of experience in financial technology, our team is committed to providing transparent, user-friendly trading solutions for diverse needs.
                    </p>
                    <p
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                    >
                      <strong>Integrity</strong> – We uphold honesty and transparency in all of our work.<br />
                      <strong>Innovation</strong> – We continually improve our products to adapt to market trends.<br />
                      <strong>Support</strong> – We provide resources and guidance to help you understand risks and trade responsibly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Closing Section */}
          <section className="content-block section-padding section-bg-dark">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-7 offset-xl-1 col-12 pe-xl-5">
                  <div className="block-contents ms-xl-3 mt-5 mt-lg-0">
                    <div
                      className="section-title wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".2s"
                    >
                      <h2>Your Responsible Technology Partner</h2>
                    </div>
                    <p
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                    >
                      Vertex Algo Trading guides traders of all levels,
                      emphasizing informed choices and responsible use of algorithmic systems. We invite you to connect with our team to understand trading risks and opportunities before getting started.
                    </p>
                  </div>
                </div>
                <div className="col-xl-5 pe-lg-0 col-lg-5 col-12">
                  <div
                    className="block-img wow fadeInLeft"
                    data-wow-duration="1.1s"
                  >
                    <img src="/assets/img/benifit/2.png" alt="Technology Partner" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </Layout>
    </RootLayout>
  );
}
