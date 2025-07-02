"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function LumpSumInvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState("100000"); // Default initial investment
  const [rateOfReturn, setRateOfReturn] = useState("8"); // Default rate of return in %
  const [years, setYears] = useState("10"); // Default duration in years
  const [futureValue, setFutureValue] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "Lump Sum Investment Calculator - Equiwiz | Calculate Your Investment Growth",
    description:
      "Use Equiwiz's Lump Sum Investment Calculator to estimate the future value of a one-time investment. Plan for wealth growth with accurate projections.",
    canonical: "https://equiwiz.com/lump-sum-investment-calculator",
  };

  // Lump Sum Investment formula calculation: Future Value = Initial Investment * (1 + Rate/100) ^ Years
  const calculateFutureValue = () => {
    const investment = parseFloat(initialInvestment);
    const rate = parseFloat(rateOfReturn);
    const time = parseFloat(years);

    if (investment <= 0 || rate <= 0 || time <= 0) {
      setError("All values should be positive numbers.");
      setFutureValue(null);
      return;
    }

    const result = investment * Math.pow(1 + rate / 100, time);
    setFutureValue(result.toFixed(2));
    setError("");
  };

  // Run calculation on component load
  useEffect(() => {
    calculateFutureValue();
  }, []);

  const data = {
    labels: ["Initial Investment", "Investment Growth"],
    datasets: [
      {
        data: [parseFloat(initialInvestment), futureValue ? futureValue - parseFloat(initialInvestment) : 0],
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
                  <h1>Lump Sum Investment Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="lump-sum-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="investment-form  p-4 rounded">
                  <h3>Calculate Future Value of Lump Sum Investment</h3>
                  <div className="input-group my-3">
                    <label>Initial Investment (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 100000"
                      value={initialInvestment}
                      onChange={(e) => setInitialInvestment(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Expected Rate of Return (%)</label>
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
                  <span style={{ color: "#FF6F00" }}>Initial Investment</span> and{" "}
                  <span style={{ color: "#0A3D62" }}>Growth</span>
                </p>
              </div>
            </div>
          </div>
        </section>

         
      </Layout>
    </RootLayout>
  );
}

export default LumpSumInvestmentCalculator;
