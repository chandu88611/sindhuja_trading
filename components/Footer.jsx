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
                    <img src="/logo.png" alt="Vertex Algo Trading" />
                  </Link>
                  <p>
                 Vertex Algo Trading offers tailored solutions in investments, portfolio management, and stock trading. We focus on providing tools and guidance to support your long-term financial planning.         </p>
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
                    <Link href="/contact">Contact</Link>
                  </li>
              
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 offset-xl-1 col-sm-6 col-12">
              <div className="footer__widget wow fadeInLeft" data-wow-delay=".4s">
                <h3 className="footer__widget-title">More</h3>
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-condition">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link href="/refund-policy">Refund Policy</Link>
                  </li>
                <li>
                    <Link href="/risk-disclaimer">Risk Disclaimer</Link>
                  </li>
               
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 offset-xl-1 col-sm-6 col-12">
              {/* <div className="footer__widget wow fadeInLeft" data-wow-delay=".6s">
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
              </div> */}
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
                © 2025 Vertex Algo Trading. All Rights Reserved. Powered by{" "}
              </p>
            </div>
            <div
              className="social-links mt-4 mt-md-0 wow fadeInUp"
              data-wow-delay=".3"
              data-wow-duration="1s"
            >
              <a href="https://www.facebook.com/Vertex Algo Trading" target="_blank">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.telegram.com/Vertex Algo Trading" target="_blank">
                <i className="fab fa-telegram-plane" />
              </a>
              <a href="https://www.instagram.com/Vertex Algo Trading" target="_blank">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/company/Vertex Algo Trading" target="_blank">
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
