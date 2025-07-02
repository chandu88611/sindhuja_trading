'use client'

import React from 'react'
import RootLayout from '../layout'
import Layout from '@/components/Layout'

function page() {
  return (
<RootLayout>
    <Layout>
    <>
  <div className="page-banner-wrap bg-cover text-capitalize">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3 text-center text-white">
          <div className="page-heading">
            <h1>Our Services</h1>
          </div>
        
        </div>
      </div>
    </div>
  </div>
 

 
  <section className="our-best-features-wrapper section-padding">
    <div className="container">
      <div
        className="nice-arrow-icon d-none d-lg-block wow fadeInDown"
        data-wow-duration="1.2s"
      >
        <img src="/assets/img/shape/4.svg" alt="3d bg shape" />
      </div>
      <div className="col-xl-8 offset-xl-2 text-center">
        <div className="block-contents">
          <div className="section-title">
            <h2>Our Key Trading Services</h2>
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
              <a href="services-details.html">Stock Analysis</a>
            </h3>
            <p>
              Our stock analysis service provides you with expert insights into
              the stock market, helping you make informed investment decisions.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="features-card-item style-1">
            <div className="icon">
              <img src="/assets/img/service/icons/2.png" alt="Icon" />
            </div>
            <h3>
              <a href="services-details.html">Mutual Fund Investments</a>
            </h3>
            <p>
              Access top-rated mutual funds to achieve your financial goals.
              Benefit from professional management and portfolio diversification.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="features-card-item style-1">
            <div className="icon">
              <img src="/assets/img/service/icons/3.png" alt="Icon" />
            </div>
            <h3>
              <a href="services-details.html">Fixed Deposits</a>
            </h3>
            <p>
              Secure your future with high-rated fixed deposits. Enjoy better
              returns than traditional savings options with guaranteed interest.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="features-card-item style-1">
            <div className="icon">
              <img src="/assets/img/service/icons/4.png" alt="Icon" />
            </div>
            <h3>
              <a href="services-details.html">Options Trading</a>
            </h3>
            <p>
              Explore options trading with our expert guidance to leverage the
              potential of derivatives in building your trading strategy.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="features-card-item style-1">
            <div className="icon">
              <img src="/assets/img/service/icons/5.png" alt="Icon" />
            </div>
            <h3>
              <a href="services-details.html">Algorithmic Trading</a>
            </h3>
            <p>
              Enhance your trading experience with our algorithmic trading
              services, using automation and data-driven strategies to achieve
              efficiency.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="features-card-item style-1">
            <div className="icon">
              <img src="/assets/img/service/icons/6.png" alt="Icon" />
            </div>
            <h3>
              <a href="services-details.html">Portfolio Management Services</a>
            </h3>
            <p>
              Benefit from tailored portfolio management solutions that align
              with your financial goals, helping you achieve sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


 
  
  <section className="faq-video-block section-padding section-bg">
    <div className="container">
      <div
        className="nice-arrow-icon d-none d-lg-block wow fadeInDown"
        data-wow-duration="1.2s"
      >
        <img src="/assets/img/shape/4.svg" alt="3d bg shape" />
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
            <form action="#" className="question__form">
              <div className="row g-4">
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    aria-label="Name"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                    aria-label="Email"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    aria-label="Email"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control form-control--message"
                    placeholder="Describe your message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <button className="form-control custom-btn text-center mt-4 text-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </Layout>
</RootLayout>
  )
}

export default page