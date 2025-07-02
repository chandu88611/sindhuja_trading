"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Approximation function for Math.erf
function erf(x) {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);

  const t = 1.0 / (1.0 + p * x);
  const y =
    1.0 -
    (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

  return sign * y;
}

function OptionsPricingCalculator() {
  const [stockPrice, setStockPrice] = useState("100");
  const [strikePrice, setStrikePrice] = useState("100");
  const [timeToExpiry, setTimeToExpiry] = useState("1");
  const [volatility, setVolatility] = useState("20");
  const [riskFreeRate, setRiskFreeRate] = useState("5");
  const [optionPrice, setOptionPrice] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "Options Pricing Calculator - Equiwiz | Calculate Call & Put Prices",
    description:
      "Use Equiwiz's Options Pricing Calculator to estimate the fair market value of call and put options using the Black-Scholes model. Make informed trading decisions with precision.",
    canonical: "https://equiwiz.com/options-pricing-calculator",
  };

  const calculateOptionPrice = () => {
    if (!stockPrice || !strikePrice || !timeToExpiry || !volatility || !riskFreeRate) {
      setError("Please fill out all fields.");
      return;
    }

    const S = parseFloat(stockPrice);
    const K = parseFloat(strikePrice);
    const T = parseFloat(timeToExpiry);
    const sigma = parseFloat(volatility) / 100;
    const r = parseFloat(riskFreeRate) / 100;

    if (S <= 0 || K <= 0 || T <= 0 || sigma <= 0 || r < 0) {
      setError("All values should be positive numbers.");
      return;
    }

    const d1 = (Math.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * Math.sqrt(T));
    const d2 = d1 - sigma * Math.sqrt(T);
    const Nd1 = 0.5 * (1 + erf(d1 / Math.sqrt(2)));
    const Nd2 = 0.5 * (1 + erf(d2 / Math.sqrt(2)));

    const callPrice = S * Nd1 - K * Math.exp(-r * T) * Nd2;
    setOptionPrice(callPrice.toFixed(2));
    setError("");
  };

  useEffect(() => {
    calculateOptionPrice();
  }, []);

  const data = {
    labels: ["Intrinsic Value", "Extrinsic Value"],
    datasets: [
      {
        data: [optionPrice ? parseFloat(optionPrice) : 0, 100 - (optionPrice ? parseFloat(optionPrice) : 0)],
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
                  <h1>Options Pricing Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="options-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="pricing-form  p-4 rounded">
                  <h3>Calculate Call Option Price</h3>
                  <div className="input-group my-3">
                    <label>Stock Price (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 100"
                      value={stockPrice}
                      onChange={(e) => setStockPrice(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Strike Price (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 100"
                      value={strikePrice}
                      onChange={(e) => setStrikePrice(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Time to Expiry (Years)</label>
                    <input
                      type="number"
                      placeholder="e.g., 1"
                      value={timeToExpiry}
                      onChange={(e) => setTimeToExpiry(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Volatility (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 20"
                      value={volatility}
                      onChange={(e) => setVolatility(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Risk-Free Rate (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 5"
                      value={riskFreeRate}
                      onChange={(e) => setRiskFreeRate(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button onClick={calculateOptionPrice} className="btn btn-primary w-100">
                    Calculate Option Price
                  </button>
                  {optionPrice !== null && (
                    <div className="result mt-3 p-3 bg-success text-white rounded text-center">
                      Call Option Price: ₹{optionPrice}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <Doughnut data={data} options={{ cutout: "80%" }} />
                <p className="text-center mt-2">
                  <span style={{ color: "#FF6F00" }}>Intrinsic Value</span> and{" "}
                  <span style={{ color: "#0A3D62" }}>Extrinsic Value</span>
                </p>
              </div>
            </div>
          </div>
        </section>

      
      </Layout>
    </RootLayout>
  );
}

export default OptionsPricingCalculator;
``
