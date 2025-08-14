import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Modal, Menu, Dropdown, Button } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Login from "./Login";
import Form from "./Form";

function Header() {
  const [show, setShow] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [notTop, setNotTop] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control mobile menu
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollThreshold = 5;
      setNotTop(scrollTop > scrollThreshold);
    };

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkIfMobile);
    checkIfMobile();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleProductsHover = (isHovering) => {
    if (!isMobile) {
      setShowProducts(isHovering);
    }
  };

  const toggleProductsMenu = () => {
    if (isMobile) {
      setShowProducts(!showProducts);
    }
  };

  // Functions to open and close the login modal
  const showLoginModal = () => {
    setIsLoginModalVisible(true);
  };

  const handleLoginCancel = () => {
    setIsLoginModalVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">
        <Link href="/profile">
          <SettingOutlined /> Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <header className="header-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-2 col-sm-5 col-md-4 col-6">
              <div className="logo">
                <a href="/">
                  <img src="/logo.png" alt="TradePro Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-10 p-lg-0 d-none d-lg-flex align-items-center justify-content-end">
              <div className="menu-wrap">
                <div className="main-menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/faqs">FAQ's</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Softwares</a>
                      <ul className="sub-menu" style={{ width: "340px" }}>
                     
                        <li>
                          <a href="/forexcurrencysoftware">
                            Forex Currency Software
                          </a>
                        </li>
                        <li>
                          <a href="/cryptocurrencysoftware">
                            Crypto Currency Software
                          </a>
                        </li>
                        <li>
                          <a href="/commoditysoftware">Commodity Software</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-right-element text-white">
                <a
                  className="custom-btn "
                  onClick={() => setIsModalVisible(true)}
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-sm-1 col-md-8 col-6">
              <div className="mobile-nav-wrap">
                <div id="hamburger" onClick={toggleMobileMenu}>
                  <i className="fal fa-bars" />
                </div>
                {/* mobile menu - responsive menu */}
                <div className={`mobile-nav ${isMobileMenuOpen ? "show" : ""}`}>
                  <button
                    type="button"
                    className="close-nav"
                    onClick={toggleMobileMenu}
                  >
                    <i className="fal fa-times-circle" />
                  </button>
                  <nav className="sidebar-nav">
                    <ul className="metismenu" id="mobile-menu">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/faqs">Faqs</a>
                      </li>
                      <li>
                        <a href="#">Softwares</a>
                        <ul className="sub-menu" style={{ width: "340px" }}>
                          <li>
                            <a href="/indianmarketsoftware">
                              Indian Market Software
                            </a>
                          </li>
                          <li>
                            <a href="/forexcurrencysoftware">
                              Forex Currency Software
                            </a>
                          </li>
                          <li>
                            <a href="/cryptocurrencysoftware">
                              Crypto Currency Software
                            </a>
                          </li>
                          <li>
                            <a href="/commoditysoftware">Commodity Software</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                    <a
                      className="custom-btn"
                      onClick={() => setIsModalVisible(true)}
                    >
                      Get Started
                    </a>
                  </nav>
                </div>
              </div>
              <div className="overlay" onClick={toggleMobileMenu} />
            </div>
          </div>
        </div>
      </header>
      <Modal
        title="Get in Touch"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
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
  );
}

export default Header;
