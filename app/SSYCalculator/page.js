"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function SSYCalculator() {
  const [monthlyContribution, setMonthlyContribution] = useState("1000");
  const [yearsToMaturity, setYearsToMaturity] = useState("21");
  const [interestRate, setInterestRate] = useState("7.6");
  const [maturityValue, setMaturityValue] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "SSY Calculator - Equiwiz | Sukanya Samriddhi Yojana Maturity Calculator",
    description: "Estimate the maturity value of your Sukanya Samriddhi Yojana (SSY) investments with our calculator. Plan for your daughter's future financial needs effectively.",
    canonical: "https://equiwiz.com/ssy-calculator",
  };

  const calculateSSY = () => {
    if (!monthlyContribution || !yearsToMaturity || !interestRate) {
      setError("Please fill out all fields.");
      return;
    }

    const P = parseFloat(monthlyContribution);
    const N = parseInt(yearsToMaturity) * 12; // Total months
    const r = parseFloat(interestRate) / 100 / 12; // Monthly interest rate

    if (P <= 0 || N <= 0 || r <= 0) {
      setError("All values should be positive numbers.");
      return;
    }

    // Calculate maturity value using compound interest formula for monthly contributions
    const maturity = P * (((1 + r) ** N - 1) / r) * (1 + r);
    setMaturityValue(maturity.toFixed(2));
    setError("");
  };

  useEffect(() => {
    calculateSSY();
  }, []);

  const data = {
    labels: ["Total Contribution", "Interest Earned"],
    datasets: [
      {
        data: [monthlyContribution * yearsToMaturity * 12 || 0, maturityValue - (monthlyContribution * yearsToMaturity * 12) || 0],
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
                  <h1>Sukanya Samriddhi Yojana (SSY) Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="ssy-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="ssy-form  p-4 rounded">
                  <h3>Calculate Your SSY Maturity Value</h3>
                  <div className="input-group my-3">
                    <label>Monthly Contribution (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 1000"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Investment Duration (Years)</label>
                    <input
                      type="number"
                      placeholder="e.g., 21"
                      value={yearsToMaturity}
                      onChange={(e) => setYearsToMaturity(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Interest Rate (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 7.6"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button onClick={calculateSSY} className="btn btn-primary w-100">
                    Calculate Maturity Value
                  </button>
                  {maturityValue !== null && (
                    <div className="result mt-3 p-3 bg-success text-white rounded text-center">
                      Maturity Value: ₹{maturityValue}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <Doughnut data={data} options={{ cutout: "80%" }} />
                <p className="text-center mt-2">
                  <span style={{ color: "#FF6F00" }}>Total Contribution</span> and{" "}
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

export default SSYCalculator;
