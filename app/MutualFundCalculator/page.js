"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function MutualFundCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState("5000"); // Default monthly SIP
  const [rateOfReturn, setRateOfReturn] = useState("12"); // Expected annual return in %
  const [years, setYears] = useState("10"); // Default investment duration in years
  const [futureValue, setFutureValue] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "Mutual Fund SIP Calculator - Equiwiz | Plan Your Investment Growth",
    description:
      "Use Equiwiz's Mutual Fund SIP Calculator to estimate the future value of your mutual fund investments. Plan for long-term wealth growth with accurate projections.",
    canonical: "https://equiwiz.com/mutual-fund-calculator",
  };

  // Mutual Fund SIP formula calculation
  const calculateFutureValue = () => {
    const investment = parseFloat(monthlyInvestment);
    const rate = parseFloat(rateOfReturn) / 100 / 12; // Monthly rate
    const months = parseFloat(years) * 12;

    if (investment <= 0 || rate <= 0 || months <= 0) {
      setError("All values should be positive numbers.");
      setFutureValue(null);
      return;
    }

    // Future Value formula for SIP: FV = P * [((1 + r)^n - 1) / r] * (1 + r)
    const result = investment * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
    setFutureValue(result.toFixed(2));
    setError("");
  };

  // Run calculation on component load
  useEffect(() => {
    calculateFutureValue();
  }, []);

  const data = {
    labels: ["Total Investment", "Investment Growth"],
    datasets: [
      {
        data: [parseFloat(monthlyInvestment) * parseFloat(years) * 12, futureValue ? futureValue - parseFloat(monthlyInvestment) * parseFloat(years) * 12 : 0],
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
                  <h1>Mutual Fund SIP Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mutual-fund-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="investment-form  p-4 rounded">
                  <h3>Calculate Future Value of SIP Investment</h3>
                  <div className="input-group my-3">
                    <label>Monthly Investment (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 5000"
                      value={monthlyInvestment}
                      onChange={(e) => setMonthlyInvestment(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Expected Annual Rate of Return (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 12"
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
                  <span style={{ color: "#FF6F00" }}>Total Investment</span> and{" "}
                  <span style={{ color: "#0A3D62" }}>Investment Growth</span>
                </p>
              </div>
            </div>
          </div>
        </section>
 
      </Layout>
    </RootLayout>
  );
}

export default MutualFundCalculator;
