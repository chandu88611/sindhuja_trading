"use client";
import React, { useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import RootLayout from "../layout";

export default function ThankYou() {
  const metaData = {
    title: "Thank You - Vertex Algo Trading",
    description:
      "Thank you for contacting Vertex Algo Trading. We will get back to you shortly.",
    canonical: "https://vertexalgotrading.com/thank-you"
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://wa.me/918310327035";
    }, 3000); // Redirect after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <RootLayout metadata={metaData}>
      <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
        <div className="text-center">
          {/* React Icon instead of image */}
          <FiCheckCircle className="mx-auto text-green-500 w-20 h-20 mb-6" />

          <h1 className="text-3xl font-bold mb-3">Thank You!</h1>
          <p className="text-lg mb-5">
            Your request has been received. We will contact you shortly.
          </p>
          <p className="text-sm text-gray-400">
            Redirecting you to WhatsApp...
          </p>
        </div>
      </main>
    </RootLayout>
  );
}
