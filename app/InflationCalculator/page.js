"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function InflationCalculator() {
  const [initialAmount, setInitialAmount] = useState("100000"); // Default initial amount
  const [inflationRate, setInflationRate] = useState("5"); // Default inflation rate (percentage)
  const [years, setYears] = useState("10"); // Default duration in years
  const [futureValue, setFutureValue] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "Inflation Calculator - Equiwiz | Calculate Future Value Adjusted for Inflation",
    description:
      "Use Equiwiz's Inflation Calculator to determine how inflation affects the future value of your money over time. Plan for inflation-adjusted savings.",
    canonical: "https://equiwiz.com/inflation-calculator",
  };

  // Inflation formula calculation: Future Value = Initial Amount * (1 + Inflation Rate/100) ^ Years
  const calculateFutureValue = () => {
    const amount = parseFloat(initialAmount);
    const rate = parseFloat(inflationRate);
    const time = parseFloat(years);

    if (amount <= 0 || rate <= 0 || time <= 0) {
      setError("All values should be positive numbers.");
      setFutureValue(null);
      return;
    }

    const result = amount * Math.pow(1 + rate / 100, time);
    setFutureValue(result.toFixed(2));
    setError("");
  };

  // Run calculation on component load
  useEffect(() => {
    calculateFutureValue();
  }, []);

  const data = {
    labels: ["Initial Amount", "Future Value Increase"],
    datasets: [
      {
        data: [parseFloat(initialAmount), futureValue ? futureValue - parseFloat(initialAmount) : 0],
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
                  <h1>Inflation Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="inflation-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="inflation-form  p-4 rounded">
                  <h3>Calculate Inflation-Adjusted Future Value</h3>
                  <div className="input-group my-3">
                    <label>Initial Amount (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 100000"
                      value={initialAmount}
                      onChange={(e) => setInitialAmount(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Annual Inflation Rate (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 5"
                      value={inflationRate}
                      onChange={(e) => setInflationRate(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Number of Years</label>
                    <input
                      type="number"
                      placeholder="e.g., 10"
                      value={years}
                      onChange={(e) => setYears(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button onClick={calculateFutureValue} className="btn btn-primary w-100">
                    Calculate Future Value
                  </button>
                  {futureValue !== null && (
                    <div className="result mt-3 p-3 bg-success text-white rounded text-center">
                      Future Value: ₹{futureValue}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <Doughnut data={data} options={{ cutout: "80%" }} />
                <p className="text-center mt-2">
                  <span style={{ color: "#FF6F00" }}>Initial Amount</span> and{" "}
                  <span style={{ color: "#0A3D62" }}>Inflation-Adjusted Increase</span>
                </p>
              </div>
            </div>
          </div>
        </section>

    
      </Layout>
    </RootLayout>
  );
}

export default InflationCalculator;
