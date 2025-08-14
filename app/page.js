"use client";
import Layout from "@/components/Layout";
import RootLayout from "./layout";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Form from "@/components/Form";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import {
  FaBolt,
  FaRobot,
  FaChartLine,
  FaClock,
  FaBalanceScale,
  FaCogs,
  FaTachometerAlt,
  FaLayerGroup,
  FaClipboardList,
} from "react-icons/fa";
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

  
 const defaultMetadata = {
  title: "Vertex Algo Trading",
  description:
    "Vertex Algo Trading is your trusted partner in automated Forex trading. We specialize in providing powerful, pre-tested Forex algo trading bots designed to execute high-frequency, precision-driven strategies across global currency markets.",
  canonical: "https://vertexalgotrading.com/",
};

  return (
    <RootLayout metadata={defaultMetadata}>
      <Layout>
      <>
      <section className="hero-1">
            <div className="single-slide text-white">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0">
                    <div className="hero-contents">
                      <h1>Automate Your Trading with Confidence</h1>
                      <p>
                        Experience seamless trading with real-time insights,
                        expert tools, and algorithmic strategies.
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
  {/* Ultra-Fast Execution */}
  <div className="col-lg-4 col-md-6 col-12">
    <div className="features-card-item style-1 text-center">
      <div className="icon mb-3">
        <FaBolt size={40} />
      </div>
      <h3>Efficient Trade Execution</h3>
      <p>
        Execute trades quickly to help you respond to market movements with the speed technology allows.
      </p>
    </div>
  </div>

  {/* Precision and Discipline */}
  <div className="col-lg-4 col-md-6 col-12">
    <div className="features-card-item style-1 text-center">
      <div className="icon mb-3">
        <FaCogs size={40} />
      </div>
      <h3>Consistent Algorithmic Trading</h3>
      <p>
        Algorithms apply pre-defined rules consistently to reduce emotional bias and human errors.
      </p>
    </div>
  </div>

  {/* Strategy Backtesting */}
  <div className="col-lg-4 col-md-6 col-12">
    <div className="features-card-item style-1 text-center">
      <div className="icon mb-3">
        <FaClipboardList size={40} />
      </div>
      <h3>Strategy Simulation</h3>
      <p>
        Test your trading strategies on historical data to better understand potential risks and outcomes before live deployment.
      </p>
    </div>
  </div>

  {/* Portfolio Diversification */}
  <div className="col-lg-4 col-md-6 col-12">
    <div className="features-card-item style-1 text-center">
      <div className="icon mb-3">
        <FaLayerGroup size={40} />
      </div>
      <h3>Diversified Asset Trading</h3>
      <p>
        Trade across multiple markets and asset types to help spread your risk through automation with built-in controls.
      </p>
    </div>
  </div>

  {/* 24/7 Market Access */}
  <div className="col-lg-4 col-md-6 col-12">
    <div className="features-card-item style-1 text-center">
      <div className="icon mb-3">
        <FaClock size={40} />
      </div>
      <h3>Access Markets Anytime</h3>
      <p>
        Connect to global markets around the clock, allowing opportunities even when you’re not actively monitoring.
      </p>
    </div>
  </div>

  {/* Smart Automation */}
  <div className="col-lg-4 col-md-6 col-12">
    <div className="features-card-item style-1 text-center">
      <div className="icon mb-3">
        <FaRobot size={40} />
      </div>
      <h3>Intelligent Automation</h3>
      <p>
        Enable algorithms to assist in both decision-making and trade execution, supporting efficient operations.
      </p>
    </div>
  </div>

  {/* Risk Management Tools */}
  <div className="col-lg-4 col-md-6 col-12">
    <div className="features-card-item style-1 text-center">
      <div className="icon mb-3">
        <FaBalanceScale size={40} />
      </div>
      <h3>Risk Management Features</h3>
      <p>
        Utilize built-in tools like stop-loss and position sizing to help manage potential losses and capital allocation.
      </p>
    </div>
  </div>

  {/* Intelligent Indicators */}
  <div className="col-lg-4 col-md-6 col-12">
    <div className="features-card-item style-1 text-center">
      <div className="icon mb-3">
        <FaChartLine size={40} />
      </div>
      <h3>Market Insights</h3>
      <p>
        Analyze market trends, volume, and volatility indicators to inform your trading choices.
      </p>
    </div>
  </div>

  {/* Performance Monitoring */}
  <div className="col-lg-4 col-md-6 col-12">
    <div className="features-card-item style-1 text-center">
      <div className="icon mb-3">
        <FaTachometerAlt size={40} />
      </div>
      <h3>Performance Tracking</h3>
      <p>
        Monitor real-time execution, profit and loss, and other metrics to evaluate your strategy’s effectiveness.
      </p>
    </div>
  </div>
</div>

  </div>
</section>
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
                  {/* <div
                    className="block-img wow fadeInLeft"
                    data-wow-duration="1.1s"
                  >
                    <img src="assets/img/benifit/2.png" alt="Token Distribution" />
                  </div> */}
                </div>
              </div>
            </div>
          </section>
 
  {/* user data secion start hare */}
  {/* crypto app section start hare */}
<section className="content-block fix faq-wrapper section-padding section-bg-dark">
  <div className="container">
    <div className="row align-items-center">
      {/* FAQ Text Section */}
      <div className="col-lg-6 col-xl-5 mt-5 mt-lg-0 order-2 order-lg-1">
        <div className="block-contents">
          <div className="section-title wow fadeInUp" data-wow-duration="1s">
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>
        <div className="step-accordion">
          <div className="accordion" id="accordion">
            {/* Question 1 */}
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
                  What is algorithmic trading?
                </button>
              </h4>
              <div
                id="faq1"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  Algorithmic trading uses computer programs to automatically execute trades based on pre-set rules and strategies.
                </div>
              </div>
            </div>

            {/* Question 2 */}
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
                  aria-expanded="false"
                  aria-controls="faq2"
                >
                  Do you guarantee profits?
                </button>
              </h4>
              <div
                id="faq2"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  No. Trading always involves risk. We provide tools to help you trade efficiently, but results depend on market conditions and your strategy.
                </div>
              </div>
            </div>

            {/* Question 3 */}
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
                  Do I need trading experience to use your services?
                </button>
              </h4>
              <div
                id="faq3"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  Not necessarily. Our systems are designed to be beginner-friendly, but understanding the basics of trading is recommended.
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div
              className="accordion-item wow fadeInUp"
              data-wow-duration="1.1s"
              data-wow-delay="1.2s"
            >
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
              <div
                id="faq4"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  Yes. We offer strategy customization to suit your trading style and goals.
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div
              className="accordion-item wow fadeInUp"
              data-wow-duration="1.1s"
              data-wow-delay="1.5s"
            >
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
              <div
                id="faq5"
                className="accordion-collapse collapse"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  Contact us through our website form or email, and our team will guide you through setup.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Image */}
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
      <div className="faq-accordion ms-xl-4 me-xl-4">
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
                Our platform uses advanced security protocols including SSL encryption and two-factor authentication to ensure your funds and data are fully protected. We comply with all regulatory standards and continuously monitor for suspicious activity to provide you a safe and reliable trading experience.
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
            >
              <div className="accordion-body">
                We offer transparent fee structures with competitive commissions and no hidden charges. Fees vary depending on the trading volume and account type. Visit our pricing page for detailed information tailored to your trading style.
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
                data-bs-target="#faqask3"
                aria-expanded="false"
                aria-controls="faqask3"
              >
                What Are the Key Factors for Choosing a Trading Platform?
              </button>
            </h4>
            <div
              id="faqask3"
              className="accordion-collapse collapse"
              data-bs-parent="#mainaccordion"
            >
              <div className="accordion-body">
                When selecting a trading platform, consider security, fees, available instruments, ease of use, customer support, and advanced tools such as charting and analytics. Our platform is designed to excel in all these areas, helping you trade confidently and effectively.
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
        <Form />
      </div>
    </div>
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
