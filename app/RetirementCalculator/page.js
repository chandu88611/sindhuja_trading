"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function RetirementCalculator() {
  const [desiredCorpus, setDesiredCorpus] = useState("10000000");
  const [yearsToRetirement, setYearsToRetirement] = useState("20");
  const [interestRate, setInterestRate] = useState("8");
  const [monthlyInvestment, setMonthlyInvestment] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "Retirement Calculator - Equiwiz | Plan Your Financial Future",
    description: "Use our Retirement Calculator to determine the monthly savings needed to reach your desired retirement corpus. Plan ahead and secure your financial future.",
    canonical: "https://equiwiz.com/retirement-calculator",
  };

  const calculateMonthlyInvestment = () => {
    if (!desiredCorpus || !yearsToRetirement || !interestRate) {
      setError("Please fill out all fields.");
      return;
    }

    const FV = parseFloat(desiredCorpus);
    const N = parseInt(yearsToRetirement) * 12; // Total months
    const r = parseFloat(interestRate) / 100 / 12; // Monthly interest rate

    if (FV <= 0 || N <= 0 || r <= 0) {
      setError("All values should be positive numbers.");
      return;
    }

    // Calculate monthly investment needed
    const monthlyInvest = FV / (((1 + r) ** N - 1) / r);
    setMonthlyInvestment(monthlyInvest.toFixed(2));
    setError("");
  };

  useEffect(() => {
    calculateMonthlyInvestment();
  }, []);

  const data = {
    labels: ["Monthly Investment", "Future Value Goal"],
    datasets: [
      {
        data: [monthlyInvestment * yearsToRetirement * 12 || 0, desiredCorpus || 0],
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
                  <h1>Retirement Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="retirement-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="retirement-form  p-4 rounded">
                  <h3>Calculate Your Monthly Investment for Retirement</h3>
                  <div className="input-group my-3">
                    <label>Desired Retirement Corpus (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 10000000"
                      value={desiredCorpus}
                      onChange={(e) => setDesiredCorpus(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Years to Retirement</label>
                    <input
                      type="number"
                      placeholder="e.g., 20"
                      value={yearsToRetirement}
                      onChange={(e) => setYearsToRetirement(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Expected Annual Interest Rate (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 8"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button onClick={calculateMonthlyInvestment} className="btn btn-primary w-100">
                    Calculate Monthly Investment
                  </button>
                  {monthlyInvestment !== null && (
                    <div className="result mt-3 p-3 bg-success text-white rounded text-center">
                      Required Monthly Investment: ₹{monthlyInvestment}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <Doughnut data={data} options={{ cutout: "80%" }} />
                <p className="text-center mt-2">
                  <span style={{ color: "#FF6F00" }}>Monthly Investment</span> and{" "}
                  <span style={{ color: "#0A3D62" }}>Future Corpus</span>
                </p>
              </div>
            </div>
          </div>
        </section>

      
      </Layout>
    </RootLayout>
  );
}

export default RetirementCalculator;
