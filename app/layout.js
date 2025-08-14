'use client'
import Form from "@/components/Form";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const defaultMetadata = {
  title: "Vertex Algo Trading",
  description:
    "Vertex Algo Trading is your trusted partner in automated Forex trading. We specialize in providing powerful, pre-tested Forex algo trading bots designed to execute high-frequency, precision-driven strategies across global currency markets.",
  canonical: "https://vertexalgotrading.com/",
};

export default function RootLayout({ children, metadata = defaultMetadata }) {


  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />
        <link rel="shortcut icon" href="/fav.png" />

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
        <meta name="facebook-domain-verification" content="e5a4qqeby57matr0fy1pannofqol35" />
        
 

      </head>
      <body className="" data-menu-collapse="lg">
        {children}

       
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
