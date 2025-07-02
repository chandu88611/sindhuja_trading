"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function GratuityCalculator() {
  const [basicSalary, setBasicSalary] = useState("50000"); // Default basic salary per month
  const [yearsOfService, setYearsOfService] = useState("5"); // Default years of service
  const [gratuity, setGratuity] = useState(null);
  const [error, setError] = useState("");

  const metaData = {
    title: "Gratuity Calculator - Equiwiz | Calculate Your Gratuity",
    description: "Calculate your gratuity with Equiwiz's Gratuity Calculator. Estimate the gratuity amount payable upon retirement based on years of service and basic salary.",
    canonical: "https://equiwiz.com/gratuity-calculator",
  };

  // Gratuity formula calculation: Gratuity = (Basic Salary * Years of Service * 15) / 26
  const calculateGratuity = () => {
    const salary = parseFloat(basicSalary);
    const years = parseFloat(yearsOfService);

    if (salary <= 0 || years <= 0) {
      setError("All values should be positive numbers.");
      setGratuity(null);
      return;
    }

    const gratuityAmount = (salary * years * 15) / 26;
    setGratuity(gratuityAmount.toFixed(2));
    setError("");
  };

  // Run calculation on component load
  useEffect(() => {
    calculateGratuity();
  }, []);

  const data = {
    labels: ["Basic Salary Component", "Gratuity Earned"],
    datasets: [
      {
        data: [parseFloat(basicSalary) * yearsOfService, gratuity || 0],
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
                  <h1>Gratuity Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="gratuity-calculator-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="gratuity-form  p-4 rounded">
                  <h3>Calculate Your Gratuity</h3>
                  <div className="input-group my-3">
                    <label>Monthly Basic Salary (₹)</label>
                    <input
                      type="number"
                      placeholder="e.g., 50000"
                      value={basicSalary}
                      onChange={(e) => setBasicSalary(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="input-group my-3">
                    <label>Years of Service</label>
                    <input
                      type="number"
                      placeholder="e.g., 5"
                      value={yearsOfService}
                      onChange={(e) => setYearsOfService(e.target.value)}
                      className="form-control"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <button onClick={calculateGratuity} className="btn btn-primary w-100">
                    Calculate Gratuity
                  </button>
                  {gratuity !== null && (
                    <div className="result mt-3 p-3 bg-success text-white rounded text-center">
                      Gratuity Amount: ₹{gratuity}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <Doughnut data={data} options={{ cutout: "80%" }} />
                <p className="text-center mt-2">
                  <span style={{ color: "#FF6F00" }}>Basic Salary Component</span> and{" "}
                  <span style={{ color: "#0A3D62" }}>Gratuity Earned</span>
                </p>
              </div>
            </div>
          </div>
        </section>

       
      </Layout>
    </RootLayout>
  );
}

export default GratuityCalculator;
