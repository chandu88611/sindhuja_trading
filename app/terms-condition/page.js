"use client";

import Layout from "@/components/Layout";
import RootLayout from "../layout";

export default function TermsAndConditions() {
  return (
    <RootLayout>
      <Layout>
        <div className="page-banner-wrap text-capitalize">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-6 ps-xl-0 pe-xl-0 offset-xl-3 col-lg-8 offset-lg-2 text-center text-white">
                <div className="page-heading">
                  <h1>Terms & Conditions</h1>
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
                <h2>Terms & Conditions</h2>
                <p><strong>Last updated:</strong> July 21, 2025</p>

                <h4>1. Introduction:</h4>
                <p>By using our website and services, you agree to these Terms & Conditions. If you do not agree, you should not use our services.</p>

                <h4>2. Services Provided:</h4>
                <p>Vertex Algo Trading provides algorithmic trading tools and information. We do not provide financial advice or guarantee any trading profits.</p>

                <h4>3. Risks:</h4>
                <p>All trading carries risk. Users are solely responsible for their trading decisions and any resulting gains or losses.</p>

                <h4>4. User Responsibilities:</h4>
                <ul>
                  <li>Ensure you comply with your local laws before using our services.</li>
                  <li>Use our tools ethically and for lawful purposes.</li>
                </ul>

                <h4>5. Limitation of Liability:</h4>
                <p>We are not liable for any financial loss, data loss, or damages resulting from the use of our services.</p>

                <h4>6. Changes to Terms:</h4>
                <p>We may update these terms at any time. Changes will be posted on this page.</p>

                <p><strong>Contact:</strong><br/>For questions, email us at <a href="mailto:support@vertexalgotrading.com">support@vertexalgotrading.com</a>.</p>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </RootLayout>
  );
}
