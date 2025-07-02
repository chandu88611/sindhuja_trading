"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState } from "react";
import RootLayout from "../layout";
import { CircularProgress } from "@mui/material";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [compoundsPerYear, setCompoundsPerYear] = useState(1);
  const [futureValue, setFutureValue] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "Compound Interest Calculator - Equiwiz | Grow Your Investments",
    description: "Use our Compound Interest Calculator to calculate the future value of your investments. Plan your financial growth with Equiwiz's tools.",
    canonical: "https://equiwiz.com/compound-interest-calculator",
  };

  const calculateCompoundInterest = () => {
    if (!principal || !rate || !years || !compoundsPerYear) {
      setError("Please fill out all fields.");
      return;
    }

    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    const n = parseFloat(compoundsPerYear);

    if (p <= 0 || r <= 0 || t <= 0 || n <= 0) {
      setError("All values should be positive numbers.");
      return;
    }

    const result = p * Math.pow(1 + r / n, n * t);
    setFutureValue(result.toFixed(2));
    setError("");
  };

  const data = {
    datasets: [
      {
        data: [principal ? parseFloat(principal) : 0, futureValue - (principal || 0)],
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
                  <h1>Compound Interest Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="compound-interest-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="ci-form  p-4 rounded">
                  <h3>Calculate Your Investment Growth</h3>
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
                    <label>Annual Interest Rate (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 5"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Time (Years)</label>
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
                    <label>Compounds per Year</label>
                    
                    <select
                      value={compoundsPerYear}
                      onChange={(e) => setCompoundsPerYear(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    >
                      <option value={1}>Annually</option>
                      <option value={2}>Semiannually</option>
                      <option value={4}>Quarterly</option>
                      <option value={12}>Monthly</option>
                      <option value={365}>Daily</option>
                    </select>
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button onClick={calculateCompoundInterest} className="btn btn-primary w-100">
                    Calculate Future Value
                  </button>
                  {futureValue !== null && (
                    <div className="result mt-3 p-3 bg-success text-white rounded text-center">
                      Future Value: ₹{futureValue}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center" style={{ width: "30%" }}>
                <Doughnut data={data} options={{ cutout: "80%" }} />
                <p className="text-center mt-2">
                  <span style={{ color: "#FF6F00" }}>Principal Amount</span> and{" "}
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

export default CompoundInterestCalculator;
