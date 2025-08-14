"use client";

import Layout from "@/components/Layout";
import RootLayout from "../layout";

export default function RiskDisclaimer() {
  return (
    <RootLayout>
      <Layout>
        <div className="page-banner-wrap text-capitalize">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-6 ps-xl-0 pe-xl-0 offset-xl-3 col-lg-8 offset-lg-2 text-center text-white">
                <div className="page-heading">
                  <h1>Risk Disclaimer</h1>
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
                <h2>Risk Disclaimer</h2>
                <p>Trading in financial markets, including Forex, commodities, indices, and cryptocurrencies, involves a high level of risk and may not be suitable for all investors. The value of investments can rise as well as fall, and you may lose more than your initial deposit.</p>

                <p>Past performance is not indicative of future results. No guarantee is made regarding the accuracy or completeness of any information provided on this website, and no liability is accepted for any losses incurred.</p>

                <p>You should carefully consider your financial situation, risk tolerance, and investment objectives before engaging in trading. Always seek independent financial advice if you are unsure.</p>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </RootLayout>
  );
}
