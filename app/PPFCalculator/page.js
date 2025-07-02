"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function PPFCalculator() {
  const [annualInvestment, setAnnualInvestment] = useState("50000");
  const [years, setYears] = useState("15");
  const [interestRate, setInterestRate] = useState("7.1");
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "PPF Calculator - Equiwiz | Calculate Your Investment Growth",
    description: "Use our PPF calculator to estimate the future value of your Public Provident Fund investments over time. Plan your investments wisely.",
    canonical: "https://equiwiz.com/ppf-calculator",
  };

  const calculateMaturityAmount = () => {
    if (!annualInvestment || !years || !interestRate) {
      setError("Please fill out all fields.");
      return;
    }

    const P = parseFloat(annualInvestment);
    const N = parseInt(years);
    const r = parseFloat(interestRate) / 100;

    if (P <= 0 || N <= 0 || r <= 0) {
      setError("All values should be positive numbers.");
      return;
    }

    // Maturity formula for PPF with annual compounding
    let maturity = 0;
    for (let i = 1; i <= N; i++) {
      maturity += P * Math.pow(1 + r, N - i + 1);
    }

    setMaturityAmount(maturity.toFixed(2));
    setError("");
  };

  useEffect(() => {
    calculateMaturityAmount();
  }, []);

  const data = {
    labels: ["Total Investment", "Interest Earned"],
    datasets: [
      {
        data: [annualInvestment * years, maturityAmount ? maturityAmount - annualInvestment * years : 0],
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
                  <h1>PPF Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="ppf-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="ppf-form  p-4 rounded">
                  <h3>Calculate Your PPF Maturity Amount</h3>
                  <div className="input-group my-3">
                    <label>Annual Investment (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 50000"
                      value={annualInvestment}
                      onChange={(e) => setAnnualInvestment(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Investment Period (Years)</label>
                    <input
                      type="number"
                      placeholder="e.g., 15"
                      value={years}
                      onChange={(e) => setYears(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Interest Rate (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 7.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button onClick={calculateMaturityAmount} className="btn btn-primary w-100">
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
                  <span style={{ color: "#FF6F00" }}>Total Investment</span> and{" "}
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

export default PPFCalculator;
