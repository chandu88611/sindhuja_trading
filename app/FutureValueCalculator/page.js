"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function FutureValueCalculator() {
  const [principal, setPrincipal] = useState("100000"); // Default principal amount
  const [rateOfReturn, setRateOfReturn] = useState("8"); // Default rate of return (as a percentage)
  const [years, setYears] = useState("10"); // Default tenure in years
  const [futureValue, setFutureValue] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "Future Value Calculator - Equiwiz | Estimate Your Investment Growth",
    description: "Calculate the future value of your investments with Equiwiz's Future Value Calculator. Plan and project your wealth over time.",
    canonical: "https://equiwiz.com/future-value-calculator",
  };

  const calculateFutureValue = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rateOfReturn) / 100;
    const t = parseFloat(years);

    if (p <= 0 || r <= 0 || t <= 0) {
      setError("All values should be positive numbers.");
      setFutureValue(null);
      return;
    }

    // Compound interest formula for future value
    const fv = p * Math.pow(1 + r, t);
    setFutureValue(fv.toFixed(2));
    setError("");
  };

  // Run calculation on component load
  useEffect(() => {
    calculateFutureValue();
  }, []);

  const totalInterest = futureValue ? futureValue - parseFloat(principal) : 0;

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
                  <h1>Future Value Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="future-value-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="future-value-form  p-4 rounded">
                  <h3>Calculate Your Investment's Future Value</h3>
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
                    <label>Rate of Return (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 8"
                      value={rateOfReturn}
                      onChange={(e) => setRateOfReturn(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Investment Duration (Years)</label>
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

export default FutureValueCalculator;
