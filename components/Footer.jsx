import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="footer-wrapper footer-1">
      <div className="footer-widgets-wrapper">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="single-footer-widget wow fadeInLeft">
                <div className="about-us-widget">
                  <Link href="/" className="footer-logo d-block">
                    <img src="/assets/img/logo/logo.png" alt="Equiwiz" />
                  </Link>
                  <p>
                    Equiwiz, a trusted partner of Motilal Oswal, provides expert solutions for long-term investments, portfolio management, stock trading, and financial growth. Our mission is to help you achieve a secure financial future with personalized support and innovative tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 offset-xl-1 col-sm-6 col-12">
              <div className="footer__widget wow fadeInLeft" data-wow-delay=".2s">
                <h3 className="footer__widget-title">Company</h3>
                <ul>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/press">Press & Media</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 offset-xl-1 col-sm-6 col-12">
              <div className="footer__widget wow fadeInLeft" data-wow-delay=".4s">
                <h3 className="footer__widget-title">Support</h3>
                <ul>
                  <li>
                    <Link href="/help-center">Help Center</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQs</Link>
                  </li>
                  <li>
                    <Link href="/community">Community Forum</Link>
                  </li>
                  <li>
                    <Link href="/education">Education Resources</Link>
                  </li>
                  <li>
                    <Link href="mailto:support@equiwiz.com">Email Support</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 offset-xl-1 col-sm-6 col-12">
              <div className="footer__widget wow fadeInLeft" data-wow-delay=".6s">
                <h3 className="footer__widget-title">Resources</h3>
                <ul>
                  <li>
                    <Link href="/trading-tools">Trading Tools</Link>
                  </li>
                  <li>
                    <Link href="/stock-screeners">Stock Screeners</Link>
                  </li>
                  <li>
                    <Link href="/profit-charts">Profit Charts</Link>
                  </li>
                  <li>
                    <Link href="/charting-tools">Charting Tools</Link>
                  </li>
                  <li>
                    <Link href="/risk-calculators">Risk Calculators</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrapper">
        <div className="container">
          <div className="footer-bottom-content d-md-flex justify-content-between">
            <div
              className="site-copyright wow fadeInUp"
              data-wow-delay=".2"
              data-wow-duration="1s"
            >
              <p>
                © 2024 Equiwiz. All Rights Reserved. Powered by{" "}
                <a href="https://www.templatemonster.com/authors/discretedev">
                  DiscreteDev
                </a>
              </p>
            </div>
            <div
              className="social-links mt-4 mt-md-0 wow fadeInUp"
              data-wow-delay=".3"
              data-wow-duration="1s"
            >
              <a href="https://www.facebook.com/Equiwiz" target="_blank">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.telegram.com/Equiwiz" target="_blank">
                <i className="fab fa-telegram-plane" />
              </a>
              <a href="https://www.instagram.com/Equiwiz" target="_blank">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/company/equiwiz" target="_blank">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
