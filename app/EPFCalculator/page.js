"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function EPFCalculator() {
  const [monthlyContribution, setMonthlyContribution] = useState("15000"); // Default monthly contribution
  const [years, setYears] = useState("30"); // Default tenure in years
  const [interestRate, setInterestRate] = useState("8.5"); // Default interest rate (EPF)
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "EPF Calculator - Equiwiz | Calculate Your EPF Retirement Corpus",
    description: "Estimate the future value of your EPF contributions with Equiwiz's EPF calculator. Plan for a secure retirement by calculating your EPF returns.",
    canonical: "https://equiwiz.com/epf-calculator",
  };

  const calculateEPF = () => {
    const monthly = parseFloat(monthlyContribution);
    const time = parseFloat(years);
    const rate = parseFloat(interestRate) / 100;

    if (monthly <= 0 || time <= 0 || rate <= 0) {
      setError("All values should be positive numbers.");
      setMaturityAmount(null);
      return;
    }

    // Calculate EPF maturity amount with compounding
    const totalMonths = time * 12;
    const maturity = (monthly * ((Math.pow(1 + rate / 12, totalMonths) - 1) / (rate / 12))) * (1 + rate / 12);
    setMaturityAmount(maturity.toFixed(2));
    setError("");
  };

  // Run calculation on component load
  useEffect(() => {
    calculateEPF();
  }, []);

  const totalContribution = parseFloat(monthlyContribution) * 12 * parseFloat(years);
  const totalInterest = maturityAmount ? maturityAmount - totalContribution : 0;

  const data = {
    labels: ["Total Contribution", "Total Interest"],
    datasets: [
      {
        data: [totalContribution, totalInterest],
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
                  <h1>EPF Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="epf-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="epf-form  p-4 rounded">
                  <h3>Calculate Your EPF Retirement Corpus</h3>
                  <div className="input-group my-3">
                    <label>Monthly Contribution (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 15000"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Interest Rate (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 8.5"
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
                      placeholder="e.g., 30"
                      value={years}
                      onChange={(e) => setYears(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button onClick={calculateEPF} className="btn btn-primary w-100">
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
                  <span style={{ color: "#FF6F00" }}>Total Contribution</span> and{" "}
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

export default EPFCalculator;
