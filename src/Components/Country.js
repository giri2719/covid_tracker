import React from "react";
import { useLocation } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default function Country() {
  const { state } = useLocation();
  return (
    <div>
      <div className="container content">
        <div className="row">
          <div className="col-md-12 col-md-offset-2">
            <h5
              style={{ fontSize: "50px" }}
            >{`${state.Country}(${state.ThreeLetterSymbol})`}</h5>
            <div
              className="container-inner"
              style={{
                backgroundColor: "whiteSmoke",
                borderRadius: "5px",
                fontSize: "25px",
                padding: "10px",
              }}
            >
              <p style={{ color: "blue" }}>TotalCases</p>
              <h4>{state.TotalCases}</h4>
              <p style={{ color: "green" }}>TotalRecovered</p>
              <h4>{state.TotalRecovered}</h4>
              <p style={{ color: "orange" }}>ActiveCases</p>
              <h4>{state.ActiveCases}</h4>
              <p style={{ color: "red" }}>TotalDeaths</p>
              <h4>{state.TotalDeaths}</h4>
            </div>
          </div>
        </div>
        <div className="barchart1">
          <Bar
            // className="barchart1"s
            data={{
              labels: [
                "TotalCases",
                "TotalRecovered",
                "ActiveCases",
                "TotalDeaths",
              ],
              datasets: [
                {
                  barPercentage: 20,
                  barThickness: 40,
                  labels: "TotalCases",
                  borderColor: "rgba(@, e, e, 1)",
                  borderWidth: 1,
                  width: "32%",
                  data: [
                    state.TotalCases,
                    state.TotalRecovered,
                    state.ActiveCases,
                    state.TotalDeaths,
                  ],
                  backgroundColor: ["blue", "green", "orange", "red"],
                },
              ],
            }}
            width={1000}
            height={500}
          ></Bar>
        </div>
      </div>
      <center>
        <a
          className="btn bg-primary"
          href="/"
          style={{
            color: "white",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          Back To Home
        </a>
      </center>
    </div>
  );
}
