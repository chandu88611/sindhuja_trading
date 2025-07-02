"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState("5000");
  const [years, setYears] = useState("10");
  const [expectedReturnRate, setExpectedReturnRate] = useState("12");
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "SIP Calculator - Equiwiz | Calculate Your Investment Growth",
    description: "Use our SIP calculator to estimate the future value of your monthly investments with compound interest. Plan your investments wisely.",
    canonical: "https://equiwiz.com/sip-calculator",
  };

  const calculateMaturityAmount = () => {
    if (!monthlyInvestment || !years || !expectedReturnRate) {
      setError("Please fill out all fields.");
      return;
    }

    const P = parseFloat(monthlyInvestment);
    const N = parseFloat(years) * 12;
    const r = parseFloat(expectedReturnRate) / 100 / 12;

    if (P <= 0 || N <= 0 || r <= 0) {
      setError("All values should be positive numbers.");
      return;
    }

    const maturity = P * ((Math.pow(1 + r, N) - 1) / r) * (1 + r);
    setMaturityAmount(maturity.toFixed(2));
    setError("");
  };

  useEffect(() => {
    calculateMaturityAmount();
  }, []);

  const data = {
    labels: ["Total Investment", "Wealth Gained"],
    datasets: [
      {
        data: [monthlyInvestment * years * 12, maturityAmount ? maturityAmount - monthlyInvestment * years * 12 : 0],
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
                  <h1>SIP Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="sip-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="sip-form  p-4 rounded">
                  <h3>Calculate Your SIP Maturity Amount</h3>
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
                    <label>Investment Period (Years)</label>
                    <input
                      type="number"
                      placeholder="e.g., 10"
                      value={years}
                      onChange={(e) => setYears(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Expected Annual Return Rate (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 12"
                      value={expectedReturnRate}
                      onChange={(e) => setExpectedReturnRate(e.target.value)}
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
                  <span style={{ color: "#0A3D62" }}>Wealth Gained</span>
                </p>
              </div>
            </div>
          </div>
        </section>

     
      </Layout>
    </RootLayout>
  );
}

export default SIPCalculator;
