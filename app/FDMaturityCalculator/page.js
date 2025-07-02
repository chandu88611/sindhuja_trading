"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function FDMaturityCalculator() {
  const [principal, setPrincipal] = useState("100000"); // Default principal amount
  const [interestRate, setInterestRate] = useState("6.5"); // Default interest rate
  const [tenure, setTenure] = useState("5"); // Default tenure in years
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "FD Maturity Calculator - Equiwiz | Calculate Your Fixed Deposit Returns",
    description: "Estimate the maturity value of your Fixed Deposit (FD) with Equiwiz's FD calculator. Plan your investments by calculating future FD returns.",
    canonical: "https://equiwiz.com/fd-maturity-calculator",
  };

  const calculateFDMaturity = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100;
    const t = parseFloat(tenure);

    if (p <= 0 || r <= 0 || t <= 0) {
      setError("All values should be positive numbers.");
      setMaturityAmount(null);
      return;
    }

    // Compound interest formula for FD maturity
    const maturity = p * Math.pow(1 + r / 4, 4 * t);
    setMaturityAmount(maturity.toFixed(2));
    setError("");
  };

  // Run calculation on component load
  useEffect(() => {
    calculateFDMaturity();
  }, []);

  const totalInterest = maturityAmount ? maturityAmount - parseFloat(principal) : 0;

  const data = {
    labels: ["Principal", "Interest Earned"],
    datasets: [
      {
        data: [parseFloat(principal), totalInterest],
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
                  <h1>FD Maturity Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="fd-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="fd-form  p-4 rounded">
                  <h3>Calculate Your FD Maturity Amount</h3>
                  <div className="input-group my-3">
                    <label>Principal Amount (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 100000"
                      value={principal}
                      onChange={(e) => setPrincipal(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Interest Rate (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 6.5"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Tenure (Years)</label>
                    <input
                      type="number"
                      placeholder="e.g., 5"
                      value={tenure}
                      onChange={(e) => setTenure(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button onClick={calculateFDMaturity} className="btn btn-primary w-100">
                    Calculate Maturity Amount
                  </button>
                  {maturityAmount !== null && (
                    <div className="result mt-3 p-3 bg-success text-white rounded text-center">
                      Maturity Amount: ₹{maturityAmount}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <Doughnut data={data} options={{ cutout: "80%" }} />
                <p className="text-center mt-2">
                  <span style={{ color: "#FF6F00" }}>Principal</span> and{" "}
                  <span style={{ color: "#0A3D62" }}>Interest Earned</span>
                </p>
              </div>
            </div>
          </div>
        </section>

    
      </Layout>
    </RootLayout>
  );
}

export default FDMaturityCalculator;
