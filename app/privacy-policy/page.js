"use client";

import Layout from "@/components/Layout";
import RootLayout from "../layout";

export default function PrivacyPolicy() {
  return (
    <RootLayout>
      <Layout>
        <div className="page-banner-wrap text-capitalize">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-6 ps-xl-0 pe-xl-0 offset-xl-3 col-lg-8 offset-lg-2 text-center text-white">
                <div className="page-heading">
                  <h1>Privacy Policy</h1>
                  <nav aria-label="breadcrumb">
                    <ul className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="nk-pages">
          <section className="section section-bottom-0">
            <div className="container">
              <div className="section-content">
                <h2>Privacy Policy</h2>
                <p><strong>Last updated:</strong> July 21, 2025</p>
                <p>Vertex Algo Trading respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.</p>

                <h4>1. Information We Collect:</h4>
                <ul>
                  <li>Personal details: Name, email address, phone number.</li>
                  <li>Technical details: IP address, browser type, device type.</li>
                </ul>

                <h4>2. How We Use Your Information:</h4>
                <ul>
                  <li>To provide and maintain our services.</li>
                  <li>To send updates, alerts, and marketing (only if you consent).</li>
                  <li>To improve our website and customer experience.</li>
                </ul>

                <h4>3. Data Security:</h4>
                <p>We use industry-standard security measures to protect your data.</p>

                <h4>4. Sharing of Data:</h4>
                <p>We do not sell your data. We may share it with trusted third-party service providers necessary for business operations.</p>

                <h4>5. Your Rights:</h4>
                <p>You have the right to access, update, or delete your personal data at any time.</p>

                <p><strong>Contact:</strong><br/>For privacy concerns, email us at <a href="mailto:support@vertexalgotrading.com">support@vertexalgotrading.com</a>.</p>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </RootLayout>
  );
}
