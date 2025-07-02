'use client'
import Form from "@/components/Form";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const defaultMetadata = {
  title: "Equiwiz | Comprehensive Financial & Investment Solutions with Motilal Oswal",
  description:
    "Equiwiz, a trusted business associate of Motilal Oswal, offers a wide range of financial services including stock market trading, mutual funds, life and motor insurance, fixed deposits, options trading, and personal portfolio management. Partner with Equiwiz for expert guidance in building a secure and profitable financial future.",
  canonical: "https://equiwiz.com/",
};

export default function RootLayout({ children, metadata = defaultMetadata }) {


  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />
        <link rel="shortcut icon" href="/assets/img/favicon.png" />

        <link rel="stylesheet" href="/assets/css/icons.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/metismenu.css" />
        <link rel="stylesheet" href="/assets/css/lightcase.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <meta
          name="google-site-verification"
          content="DAG0zrPA2NMfIdfK6lMRhL_5AZDx0EoK9D8u2gC2fVc"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5HL9CH1HDX"
        ></script>
        <script>
          {`
           window.dataLayer = window.dataLayer || []; 
             function gtag(){dataLayer.push(arguments);
             }  
              gtag('js', new Date()); 
               gtag('config', 'G-5HL9CH1HDX');
          `}
        </script>
      </head>
      <body className="body-wrapper" data-menu-collapse="lg">
        {children}

        {/* Ant Design Modal for Form */}
   
      </body>

      <script src="/assets/js/jquery.min.js"></script>
      <script src="/assets/js/script.js"></script>
      <script src="/assets/js/modernizr.min.js"></script>
      <script src="/assets/js/jquery.easing.js"></script>
      <script src="/assets/js/popper.min.js"></script>
      <script src="/assets/js/bootstrap.min.js"></script>
      <script src="/assets/js/isotope.pkgd.min.js"></script>
      <script src="/assets/js/imageload.min.js"></script>
      <script src="/assets/js/scrollUp.min.js"></script>
      <script src="/assets/js/swiper-bundle.min.js"></script>
      <script src="/assets/js/magnific-popup.min.js"></script>
      <script src="/assets/js/wow.min.js"></script>
      <script src="/assets/js/metismenu.js"></script>
      <script src="/assets/js/lightcase.js"></script>
      <script src="/assets/js/active.js"></script>
      <script src="/assets/js/custom.js"></script>
    </html>
  );
}
