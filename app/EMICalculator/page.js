"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function EMICalculator() {
  const [principal, setPrincipal] = useState("500000"); // Default principal amount
  const [interestRate, setInterestRate] = useState("7"); // Default interest rate
  const [tenure, setTenure] = useState("10"); // Default tenure in years
  const [emi, setEmi] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "EMI Calculator - Equiwiz | Calculate Your Loan EMI",
    description: "Use our EMI calculator to determine the monthly installment amount for your loan. Plan your finances with Equiwiz's EMI calculation tools.",
    canonical: "https://equiwiz.com/emi-calculator",
  };

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / (12 * 100); // Monthly interest rate
    const n = parseFloat(tenure) * 12; // Tenure in months

    if (p <= 0 || r <= 0 || n <= 0) {
      setError("All values should be positive numbers.");
      setEmi(null);
      return;
    }

    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2));
    setError("");
  };

  // Run calculation on component load
  useEffect(() => {
    calculateEMI();
  }, []);

  const totalAmount = emi ? emi * (parseFloat(tenure) * 12) : 0;
  const totalInterest = totalAmount - parseFloat(principal);

  const data = {
    labels: ["Principal Amount", "Total Interest"],
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
                  <h1>EMI Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="emi-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="emi-form  p-4 rounded">
                  <h3>Calculate Your Loan EMI</h3>
                  <div className="input-group my-3">
                    <label>Principal Amount (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 500000"
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
                      placeholder="e.g., 7"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Tenure (Years)</label>
                    <input
                      type="number"
                      placeholder="e.g., 10"
                      value={tenure}
                      onChange={(e) => setTenure(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button onClick={calculateEMI} className="btn btn-primary w-100">
                    Calculate EMI
                  </button>
                  {emi !== null && (
                    <div className="result mt-3 p-3 bg-success text-white rounded text-center">
                      Monthly EMI: ₹{emi}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <Doughnut data={data} options={{ cutout: "80%" }} />
                <p className="text-center mt-2">
                  <span style={{ color: "#FF6F00" }}>Principal Amount</span> and{" "}
                  <span style={{ color: "#0A3D62" }}>Total Interest</span>
                </p>
              </div>
            </div>
          </div>
        </section>

         
      </Layout>
    </RootLayout>
  );
}

export default EMICalculator;
