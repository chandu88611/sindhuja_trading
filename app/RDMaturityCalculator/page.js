"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function RDMaturityCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState("5000");
  const [years, setYears] = useState("5");
  const [interestRate, setInterestRate] = useState("6.5");
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "RD Maturity Calculator - Equiwiz | Calculate Your Recurring Deposit Returns",
    description: "Use our RD calculator to estimate the future value of your Recurring Deposit investments over time. Plan your savings with accurate RD maturity calculations.",
    canonical: "https://equiwiz.com/rd-maturity-calculator",
  };

  const calculateMaturityAmount = () => {
    if (!monthlyDeposit || !years || !interestRate) {
      setError("Please fill out all fields.");
      return;
    }

    const P = parseFloat(monthlyDeposit);
    const N = parseInt(years);
    const r = parseFloat(interestRate) / 100 / 12; // Monthly interest rate

    if (P <= 0 || N <= 0 || r <= 0) {
      setError("All values should be positive numbers.");
      return;
    }

    // Maturity formula for RD with monthly compounding
    const months = N * 12;
    let maturity = P * (Math.pow(1 + r, months) - 1) / r * (1 + r);
    
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
        data: [monthlyDeposit * years * 12, maturityAmount ? maturityAmount - monthlyDeposit * years * 12 : 0],
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
                  <h1>RD Maturity Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="rd-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="rd-form  p-4 rounded">
                  <h3>Calculate Your RD Maturity Amount</h3>
                  <div className="input-group my-3">
                    <label>Monthly Deposit (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 5000"
                      value={monthlyDeposit}
                      onChange={(e) => setMonthlyDeposit(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Investment Period (Years)</label>
                    <input
                      type="number"
                      placeholder="e.g., 5"
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
                      placeholder="e.g., 6.5"
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

export default RDMaturityCalculator;
