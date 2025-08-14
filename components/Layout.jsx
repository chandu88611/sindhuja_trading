import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";

function Layout({ children }) {
  const [notTop, setNotTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollThreshold = 200;
      setNotTop(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
<Header/>
       {children}
      <Footer />
      <a href="https://wa.me/918310327035" className="">
        <div className="whatsapp blink-animation">
          <FaWhatsapp size={"40px"} />
        </div>
      </a>
    </div>
  );
}

export default Layout;
