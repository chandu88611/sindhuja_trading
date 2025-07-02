"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function ELSSCalculator() {
  const [investment, setInvestment] = useState("50000"); // Default value
  const [annualReturn, setAnnualReturn] = useState("12"); // Default value
  const [years, setYears] = useState("5"); // Default value
  const [maturityValue, setMaturityValue] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "ELSS Calculator - Equiwiz | Calculate Your Tax-Saving Investment Returns",
    description: "Use our ELSS calculator to estimate your returns on tax-saving investments. Plan your financial growth with Equiwiz's investment tools.",
    canonical: "https://equiwiz.com/elss-calculator",
  };

  const calculateELSS = () => {
    const p = parseFloat(investment);
    const r = parseFloat(annualReturn) / 100;
    const t = parseFloat(years);

    if (p <= 0 || r <= 0 || t <= 0) {
      setError("All values should be positive numbers.");
      setMaturityValue(null);
      return;
    }

    const maturity = p * Math.pow(1 + r, t);
    setMaturityValue(maturity.toFixed(2));
    setError("");
  };

  // Run calculation on component load
  useEffect(() => {
    calculateELSS();
  }, []);

  const principalAmount = parseFloat(investment) || 0;
  const estimatedReturns = maturityValue ? maturityValue - principalAmount : 0;

  const data = {
    labels: ["Principal Amount", "Estimated Returns"],
    datasets: [
      {
        data: [principalAmount, estimatedReturns],
        backgroundColor: ["#FF6F00", "#0A3D62"],
        hoverBackgroundColor: ["#FF8A00", "#24436E"],
      },
    ],
  };

  return (
    <RootLayout metadata={metaData}>
      <Layout>
        <div className="page-banner-wrap bg-cover text-capitalize">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 offset-lg-3 text-center text-white">
                <div className="page-heading">
                  <h1>ELSS Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="elss-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="elss-form  p-4 rounded">
                  <h3>Calculate Your ELSS Maturity Value</h3>
                  <div className="input-group my-3">
                    <label>Investment Amount (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 50000"
                      value={investment}
                      onChange={(e) => setInvestment(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Expected Annual Return Rate (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 12"
                      value={annualReturn}
                      onChange={(e) => setAnnualReturn(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Investment Duration (Years)</label>
                    <input
                      type="number"
                      placeholder="e.g., 5"
                      value={years}
                      onChange={(e) => setYears(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button onClick={calculateELSS} className="btn btn-primary w-100">
                    Calculate Maturity Value
                  </button>
                  {maturityValue !== null && (
                    <div className="result mt-3 p-3 bg-success text-white rounded text-center">
                      Maturity Value: ₹{maturityValue}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center" style={{width:'30%'}}>
                <Doughnut data={data} options={{ cutout: "80%" }} />
                <p className="text-center mt-2">
                  <span style={{ color: "#FF6F00" }}>Principal Amount</span> and{" "}
                  <span style={{ color: "#0A3D62" }}>Estimated Returns</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-banner-wrapper section-padding pt-0">
          <div className="container">
            <div className="cta-banner newsletter-box text-white">
              <div className="row">
                <div className="col-lg-10 offset-lg-1 text-center col-xl-8 offset-xl-2">
                  <div className="cta-contents">
                    <h2 className="wow fadeInUp">Maximize your tax-saving investments with ELSS!</h2>
                    <div className="newsletter-form wow fadeInUp">
                      <form action="#">
                        <div className="input-group">
                          <span className="input-group-text">+91</span>
                          <input type="tel" placeholder="Enter Mobile Number" className="form-control" style={{ width: "100%" }} />
                        </div>
                        <div className="my-3">
                          <input type="checkbox" className="me-2" /> I’m not a robot
                        </div>
                        <button type="submit" className="btn btn-warning w-100">
                          Open Free Trading Account Now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </RootLayout>
  );
}

export default ELSSCalculator;
