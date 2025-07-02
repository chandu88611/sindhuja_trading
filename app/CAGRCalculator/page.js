"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState } from "react";
import RootLayout from "../layout";
import { CircularProgress } from "@mui/material";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function CAGRCalculator() {
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");
  const [years, setYears] = useState("");
  const [cagr, setCagr] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "CAGR Calculator - Equiwiz | Calculate Your Investment Growth",
    description: "Use our CAGR calculator to determine the compound annual growth rate of your investments over time. Track growth and maximize your investment potential.",
    canonical: "https://equiwiz.com/cagr-calculator",
  };

  const calculateCAGR = () => {
    if (!startValue || !endValue || !years) {
      setError("Please fill out all fields.");
      return;
    }

    const start = parseFloat(startValue);
    const end = parseFloat(endValue);
    const time = parseFloat(years);

    if (start <= 0 || end <= 0 || time <= 0) {
      setError("All values should be positive numbers.");
      return;
    }

    const result = ((end / start) ** (1 / time) - 1) * 100;
    setCagr(result.toFixed(2));
    setError("");
  };

  const data = {
    datasets: [
      {
        data: [cagr || 0, 100 - (cagr || 0)],
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
                  <h1>CAGR Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="cagr-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="cagr-form  p-4 rounded">
                  <h3>Calculate Your Investment CAGR</h3>
                  <div className="input-group my-3">
                    <label>Initial Value</label>
                    <input
                      type="number"
                      placeholder="e.g., 100000"
                      value={startValue}
                      onChange={(e) => setStartValue(e.target.value)}
                      className="form-control"
                      style={{width:'100%'}}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Final Value Costs</label>
                    <input
                      type="number"
                      placeholder="e.g., 1000000"
                      value={endValue}
                      onChange={(e) => setEndValue(e.target.value)}
                      className="form-control"
                      style={{width:'100%'}}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Duration of Investment (Years)</label>
                    <input
                      type="number"
                      placeholder="e.g., 5"
                      value={years}
                      onChange={(e) => setYears(e.target.value)}
                      className="form-control"
                      style={{width:'100%'}}
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button onClick={calculateCAGR} className="btn btn-primary w-100">
                    Calculate CAGR
                  </button>
                  {cagr !== null && (
                    <div className="result mt-3 p-3 bg-success text-white rounded text-center">
                      CAGR: {cagr}% per year
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center" style={{width:'30%'}}>
                <Doughnut data={data} options={{ cutout: "80%" }} />
                <p className="text-center mt-2">
                  <span style={{ color: "#FF6F00" }}>Initial Value</span> and{" "}
                  <span style={{ color: "#0A3D62" }}>Final Value</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        
      </Layout>
    </RootLayout>
  );
}

export default CAGRCalculator;
