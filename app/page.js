"use client";
import Layout from "@/components/Layout";
import RootLayout from "./layout";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Form from "@/components/Form";
import { useState, useEffect } from "react";
import { Modal } from "antd";
export default function Home() {
  const [txt, setTxt] = useState("");
  const toRotate = ["Runs in all Market"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setloading] = useState(false);
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
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const text = "uns in all Market";
  const period = 100;
  const [displayText, setDisplayText] = useState("R");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 700 });
    const interval = setInterval(() => {
      if (textIndex === text.length) {
        setTextIndex(0);
        setDisplayText("R");
        return;
      }
      setDisplayText((prevText) => prevText + text[textIndex]);
      setTextIndex((prevIndex) => prevIndex + 1);
    }, period);
    return () => clearInterval(interval);
  }, [textIndex]);
  return (
    <RootLayout>
      <Layout>
      <>
      <section className="hero-welcome-wrapper hero-1">
            <div className="single-slide text-white">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0">
                    <div className="hero-contents">
                      <h1>Automate Your Trading with Confidence</h1>
                      <p>
                        Experience seamless trading with real-time insights,
                        expert tools, and algorithmic strategies designed to
                        maximize your profits while minimizing risks.
                      </p>
                      <a href="#" className="custom-btn">
                        Get Started
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-5 col-12 text-xl-end col-lg-10 offset-lg-1 offset-xl-0">
                    <div className="hero-mobile mt-5 mt-xl-0">
                      <img
                        src="assets/img/banner/hero/1.png"
                        alt="Trading Platform App"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="our-best-features-wrapper section-padding">
            <div className="container">
              <div
                className="nice-arrow-icon d-none d-lg-block wow fadeInDown"
                data-wow-duration="1.2s"
              >
                <img src="assets/img/shape/4.svg" alt="3D Background Shape" />
              </div>
              <div className="col-xl-8 offset-xl-2 text-center">
                <div className="block-contents">
                  <div className="section-title">
                    <h2>Key Features to Power Your Trading Success</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="features-card-item style-1">
                    <div className="icon">
                      <img src="assets/img/feature/1.png" alt="Indicators" />
                    </div>
                    <h3>Intelligent Market Indicators</h3>
                    <p>
                      Leverage powerful indicators, including price trends,
                      market volume, and risk metrics, to make informed
                      decisions.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="features-card-item style-1">
                    <div className="icon">
                      <img src="assets/img/feature/2.png" alt="Pro Tools" />
                    </div>
                    <h3>Advanced Risk Management Tools</h3>
                    <p>
                      Master the art of risk management with cutting-edge tools
                      and strategies designed to protect your investments.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="features-card-item style-1">
                    <div className="icon">
                      <img src="assets/img/feature/3.png" alt="Order Types" />
                    </div>
                    <h3>Versatile Order Types</h3>
                    <p>
                      Utilize a variety of order types, including market, limit,
                      and stop orders, to execute trades with precision.
                    </p>
                  </div>
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
                    <img
                      src="assets/img/benifit/1.png"
                      alt="Discover Benefits"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 offset-xl-1 col-12 ps-lg-5 pe-xl-5">
                  <div className="block-contents ms-xl-3 mt-5 mt-lg-0">
                    <div
                      className="section-title wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".2s"
                    >
                      <h2>Explore the Benefits of Automated Trading</h2>
                    </div>
                    <p
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                    >
                      Maximize efficiency with automated trading solutions
                      tailored to your needs, enabling faster, smarter, and
                      data-driven decisions.
                    </p>
                    <p
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                    >
                      From real-time market analysis to secure transactions, our
                      platform ensures you stay ahead in every trade.
                    </p>
                    <a href="#" className="custom-btn mt-4">
                      Start Trading Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Token Distribution Section */}
          <section className="content-block section-padding section-bg-dark overflow-hidden">
            <div className="container">
              <div className="row align-items-center g-5">
                <div className="col-xl-6 col-lg-7 offset-xl-1 col-12 pe-xl-5">
                  <div className="block-contents ms-xl-3 mt-5 mt-lg-0">
                    <div
                      className="section-title wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".2s"
                    >
                      <h2>Equitable Token Distribution</h2>
                    </div>
                    <p
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                    >
                      Enjoy fair and transparent token allocation to enhance
                      liquidity and ensure a balanced trading ecosystem.
                    </p>
                    <p
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                    >
                      Our platform provides insights into token usage,
                      distribution metrics, and market dynamics.
                    </p>
                    <a href="#" className="custom-btn mt-4">
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="col-xl-5 pe-lg-0 col-lg-5 col-12">
                  <div
                    className="block-img wow fadeInLeft"
                    data-wow-duration="1.1s"
                  >
                    <img src="assets/img/benifit/2.png" alt="Token Distribution" />
                  </div>
                </div>
              </div>
            </div>
          </section>
  {/* token section end hare */}
  {/* user ditails secion start hare */}
  <section className="user-ditails-wrapper fix section-bg section-padding">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-sm-6">
          <div
            className="single-user-ditails-card mb-4 mb-xl-0 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <div className="user-card-wrapper ">
              <div className="user-card-thumb">
                <img src="assets/img/user/card/01.png" alt="invest icon" />
              </div>
              <div className="user-card-content">
                <h4>Total Invested</h4>
                <p>$9374034</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div
            className="single-user-ditails-card mb-4 mb-xl-0 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <div className="user-card-wrapper">
              <div className="user-card-thumb">
                <img src="assets/img/user/card/02.png" alt="invest icon" />
              </div>
              <div className="user-card-content">
                <h4>Global Nation</h4>
                <p>196</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div
            className="single-user-ditails-card mb-4 mb-xl-0 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <div className="user-card-wrapper">
              <div className="user-card-thumb">
                <img src="assets/img/user/card/03.png" alt="invest icon" />
              </div>
              <div className="user-card-content">
                <h4> Remittances</h4>
                <p>$99915448</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div
            className="single-user-ditails-card mb-4 mb-xl-0 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <div className="user-card-wrapper">
              <div className="user-card-thumb">
                <img src="assets/img/user/card/04.png" alt="invest icon" />
              </div>
              <div className="user-card-content">
                <h4>Total Members</h4>
                <p>40216</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* user data secion start hare */}
  {/* crypto app section start hare */}
  <section className="content-block fix faq-wrapper section-padding section-bg-dark">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-xl-5 mt-5 mt-lg-0 order-2 order-lg-1">
          <div className="block-contents">
            <div className="section-title wow fadeInUp" data-wow-duration="1s">
              <h2>Take full control of your crypto app</h2>
            </div>
          </div>
          <div className="step-accordion">
            <div className="accordion" id="accordion">
              <div
                className="accordion-item wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                    aria-expanded="false"
                    aria-controls="faq1"
                  >
                    Download from the Play Store
                  </button>
                </h4>
                <div
                  id="faq1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    You can easily download the TradePro app from the App Store
                    or Google Play on any device
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeInUp"
                data-wow-duration="1.1s"
                data-wow-delay=".6s"
              >
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                    aria-expanded="true"
                    aria-controls="faq2"
                  >
                    Create an account easily
                  </button>
                </h4>
                <div
                  id="faq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    Open a secure account for yourself with your name and
                    necessary information that need
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeInUp"
                data-wow-duration="1.1s"
                data-wow-delay=".9s"
              >
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                    aria-expanded="false"
                    aria-controls="faq3"
                  >
                    Choose crypto &amp; start trading
                  </button>
                </h4>
                <div
                  id="faq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    Crypto transactions can be made easily, at low cost, and
                    private than most other transactions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-6 offset-xl-1 pe-xl-3 col-12 order-1 order-lg-2">
          <div
            className="block-img ms-xl-5 wow fadeInRight"
            data-wow-duration="1.2s"
            data-wow-delay=".3s"
          >
            <img src="assets/img/faq/1.png" alt="faq img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* crypto app section end hare */}
  {/* testimonial section start hare */}
  <section className="testimonial-wrapper section-padding fix">
    <div className="container">
      <div
        className="nice-arrow-icon d-none d-lg-block wow fadeInDown"
        data-wow-duration="1.2s"
      >
        <img src="assets/img/shape/3.svg" alt="3d bg shape" />
      </div>
      <div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
        <div className="block-contents">
          <div
            className="section-title wow fadeInDown"
            data-wow-duration="1.2s"
          >
            <h2>What Our Clients Are Saying</h2>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-12">
        <div className="testimonial-carousel-active swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="single-testimoinal-item">
                <div className="client-desig">
                  <div
                    className="client-img bg-cover"
                    style={{
                      backgroundImage: 'url("assets/img/testimonial/1.jpg")'
                    }}
                  />
                  <div className="client-name">
                    <h6>Ava Martinez</h6>
                    <span>Financial Planner</span>
                  </div>
                </div>
                <div className="feedback">
                  “Lorem ipsum dolor sit ametion consectetur adipisicing elit.
                  Ulti amet officiis optio sequi aliquid provident totam.”
                </div>
                <div className="rating">
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-testimoinal-item">
                <div className="client-desig">
                  <div
                    className="client-img bg-cover"
                    style={{
                      backgroundImage: 'url("assets/img/testimonial/2.jpg")'
                    }}
                  />
                  <div className="client-name">
                    <h6>Samuel Wilson</h6>
                    <span>Software engineer</span>
                  </div>
                </div>
                <div className="feedback">
                  “Lorem ipsum dolor sit ametion consectetur adipisicing elit.
                  Ulti amet officiis optio sequi aliquid provident totam.”
                </div>
                <div className="rating">
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-testimoinal-item">
                <div className="client-desig">
                  <div
                    className="client-img bg-cover"
                    style={{
                      backgroundImage: 'url("assets/img/testimonial/3.jpg")'
                    }}
                  />
                  <div className="client-name">
                    <h6>Matthew Turner</h6>
                    <span>App Developer</span>
                  </div>
                </div>
                <div className="feedback">
                  “Lorem ipsum dolor sit ametion consectetur adipisicing elit.
                  Ulti amet officiis optio sequi aliquid provident totam.”
                </div>
                <div className="rating">
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-testimoinal-item">
                <div className="client-desig">
                  <div
                    className="client-img bg-cover"
                    style={{
                      backgroundImage: 'url("assets/img/testimonial/4.jpg")'
                    }}
                  />
                  <div className="client-name">
                    <h6>Emma Walker</h6>
                    <span>Account executive</span>
                  </div>
                </div>
                <div className="feedback">
                  “Lorem ipsum dolor sit ametion consectetur adipisicing elit.
                  Ulti amet officiis optio sequi aliquid provident totam.”
                </div>
                <div className="rating">
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-testimoinal-item">
                <div className="client-desig">
                  <div
                    className="client-img bg-cover"
                    style={{
                      backgroundImage: 'url("assets/img/testimonial/5.jpg")'
                    }}
                  />
                  <div className="client-name">
                    <h6>Daniel Carter</h6>
                    <span>Software engineer</span>
                  </div>
                </div>
                <div className="feedback">
                  “Lorem ipsum dolor sit ametion consectetur adipisicing elit.
                  Ulti amet officiis optio sequi aliquid provident totam.”
                </div>
                <div className="rating">
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial__pagination text-center mt-4" />
        </div>
      </div>
    </div>
  </section>
  {/* testimonial section end hare */}
  {/* faq section start hare */}
  <section className="faq-video-block section-padding section-bg overflow-hidden">
    <div className="container">
      <div
        className="nice-arrow-icon d-none d-lg-block wow fadeInDown"
        data-wow-duration="1.2s"
      >
        <img src="assets/img/shape/4.svg" alt="3d bg shape" />
      </div>
      <div className="col-lg-6 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
        <div className="block-contents">
          <div
            className="section-title wow fadeInDown"
            data-wow-duration="1.2s"
          >
            <h2>Trading Questions, Answered Here</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7 ps-xl-5 col-12 mt-xl-0 mt-5">
          <div className="faq-accordion  ms-xl-4 me-xl-4">
            <div className="accordion" id="mainaccordion">
              <div
                className="accordion-item wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
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
                  className="accordion-collapse collapse show"
                  data-bs-parent="#mainaccordion"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Placeat consequuntur quisquam maiores expedita similique,
                    excepturi rerum. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. A eum, animi esse ut perspiciatis modi.
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Veniam, illum! Porro!
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeInUp"
                data-wow-duration="1.1s"
                data-wow-delay=".6s"
              >
                <h4 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqask2"
                    aria-expanded="true"
                    aria-controls="faqask2"
                  >
                    Trading Fees and Commissions: How Much?
                  </button>
                </h4>
                <div
                  id="faqask2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#mainaccordion"
                >
                  <div className="accordion-body">
                    Ipsum dolor, sit amet consectetur adipisicing elit. Placeat
                    consequuntur quisquam maiores expedita similique, excepturi
                    rerum. Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. A eum, animi esse ut perspiciatis modi. Lorem ipsum
                    dolor sit amet. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Veniam, illum! Porro!
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeInUp"
                data-wow-duration="1.1s"
                data-wow-delay=".9s"
              >
                <h4 className="accordion-header">
                  <button
                    className="accordion-button"
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Placeat consequuntur quisquam maiores expedita similique,
                    excepturi rerum. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. A eum, animi esse ut perspiciatis modi.
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Veniam, illum! Porro!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="faq-bottom ms-xl-4 mt-4 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".9s"
          >
            <span>Still have questions?</span>
            <a href="contact.html">Get in touch</a>
          </div>
        </div>
        <div className="col-lg-5 pe-xl-5 col-12">
          <div
            className="question__form-wrapper"
            data-aos-duration={1000}
            data-aos="fade-up"
          >
            <h3>Seeking Information?</h3>
           <Form/>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* faq section start hare */}
  {/* blog section start hare */}
  <section className=" blog-wrapper section-padding fix">
    <div className="container">
      <div
        className="nice-arrow-icon d-none d-lg-block wow fadeInDown"
        data-wow-duration="1.2s"
      >
        <img src="assets/img/shape/2.svg" alt="3d bg shape" />
      </div>
      <div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
        <div className="block-contents">
          <div className="section-title wow fadeInUp" data-wow-duration="1.2s">
            <h2>Dive into Our Crypto Blog</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-xl-4 col-12">
          <div className="blog-inner wow fadeInUp">
            <div className="blog-thumb">
              <img src="assets/img/blog/1.jpg" alt="blog-img" />
            </div>
            <div className="contents">
              <div className="post-meta d-flex">
                <div className="post-cat">
                  <a href="blog-three-col.html">Trends</a>
                </div>
                <div className="post-date">
                  <span>Apr. 7, 2024</span>
                </div>
              </div>
              <h4>
                <a href="blog-details.html">
                  Trending Trading To Empower Strategies, Make Decisions
                </a>
              </h4>
              <a href="blog-details.html" className="read-more-link">
                read more <i className="icon-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4 col-12">
          <div className="blog-inner wow fadeInUp" data-wow-delay=".2s">
            <div className="blog-thumb">
              <img src="assets/img/blog/2.jpg" alt="blog-img" />
            </div>
            <div className="contents">
              <div className="post-meta d-flex">
                <div className="post-cat">
                  <a href="blog-three-col.html">Analysis</a>
                </div>
                <div className="post-date">
                  <span>Jan. 9, 2024</span>
                </div>
              </div>
              <h4>
                <a href="blog-details.html">
                  Dive Analysis To Uncover Insights for Strategic
                </a>
              </h4>
              <a href="blog-details.html" className="read-more-link">
                read more <i className="icon-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4 col-12">
          <div className="blog-inner wow fadeInUp" data-wow-delay=".4s">
            <div className="blog-thumb">
              <img src="assets/img/blog/3.jpg" alt="blog-img" />
            </div>
            <div className="contents">
              <div className="post-meta d-flex">
                <div className="post-cat">
                  <a href="blog-three-col.html">Strategies</a>
                </div>
                <div className="post-date">
                  <span>Feb. 13, 2024</span>
                </div>
              </div>
              <h4>
                <a href="blog-details.html">
                  Powerful Trading Strategies To Boost Your Success
                </a>
              </h4>
              <a href="blog-details.html" className="read-more-link">
                read more <i className="icon-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <a href="blog-three-col.html" className="custom-btn">
          View All blogs
        </a>
      </div>
    </div>
  </section>

  <Modal
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
        </Modal>
</>


      </Layout>
    </RootLayout>
  );
}
