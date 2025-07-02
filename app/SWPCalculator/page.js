"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function SWPCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState("100000");
  const [withdrawalAmount, setWithdrawalAmount] = useState("5000");
  const [interestRate, setInterestRate] = useState("8");
  const [years, setYears] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "SWP Calculator - Equiwiz | Systematic Withdrawal Plan",
    description: "Calculate your Systematic Withdrawal Plan (SWP) to understand the duration of your investments with regular withdrawals. Plan for steady income from investments with SWP.",
    canonical: "https://equiwiz.com/swp-calculator",
  };

  const calculateSWP = () => {
    if (!investmentAmount || !withdrawalAmount || !interestRate) {
      setError("Please fill out all fields.");
      return;
    }

    const P = parseFloat(investmentAmount);
    const W = parseFloat(withdrawalAmount);
    const r = parseFloat(interestRate) / 100 / 12; // Monthly interest rate

    if (P <= 0 || W <= 0 || r <= 0) {
      setError("All values should be positive numbers.");
      return;
    }

    let balance = P;
    let months = 0;

    // Calculate the number of months the balance will last
    while (balance > 0) {
      balance = balance + balance * r - W;
      months++;
      if (months > 1000) break; // Safety check to avoid infinite loops
    }

    setYears((months / 12).toFixed(2));
    setError("");
  };

  useEffect(() => {
    calculateSWP();
  }, []);

  const data = {
    labels: ["Total Investment", "Total Withdrawals"],
    datasets: [
      {
        data: [investmentAmount || 0, years * 12 * withdrawalAmount || 0],
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
                  <h1>Systematic Withdrawal Plan (SWP) Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="swp-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="swp-form  p-4 rounded">
                  <h3>Calculate Your SWP Duration</h3>
                  <div className="input-group my-3">
                    <label>Total Investment (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 100000"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Monthly Withdrawal (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 5000"
                      value={withdrawalAmount}
                      onChange={(e) => setWithdrawalAmount(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Annual Interest Rate (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 8"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button onClick={calculateSWP} className="btn btn-primary w-100">
                    Calculate SWP Duration
                  </button>
                  {years && (
                    <div className="result mt-3 p-3 bg-warning text-white rounded text-center">
                      Duration: {years} years
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <Doughnut data={data} options={{ cutout: "80%" }} />
                <p className="text-center mt-2">
                  <span style={{ color: "#FF6F00" }}>Total Investment</span> and{" "}
                  <span style={{ color: "#0A3D62" }}>Total Withdrawals</span>
                </p>
              </div>
            </div>
          </div>
        </section>

  
      </Layout>
    </RootLayout>
  );
}

export default SWPCalculator;
