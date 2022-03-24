import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Home.css";
import ReactLoading from "react-loading";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const Home = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(undefined);
  const state = {
    labels: data.map((emp) => emp.Country),
    datasets: [
      {
        axis: "y",
        label: "TotalCases",
        lineTension: 0.0,
        backgroundColor: "blue",
        pointHitRadius: 10,
        borderWidth: 1,
        data: data.map((emp) => emp.TotalCases),
      },
      {
        axis: "y",
        label: "TotalRecovered",
        lineTension: 0.0,
        backgroundColor: "green",
        pointHitRadius: 10,
        borderWidth: 1,
        data: data.map((emp) => emp.TotalRecovered),
      },
      {
        axis: "y",
        label: "ActiveCases",
        lineTension: 5.0,
        backgroundColor: "orange",
        pointHitRadius: 10,
        borderWidth: 1,
        data: data.map((emp) => emp.ActiveCases),
      },
      {
        axis: "y",
        label: "Death",
        lineTension: 5.0,
        backgroundColor: "red",
        pointHitRadius: 10,
        borderWidth: 1,
        data: data.map((emp) => emp.TotalDeaths),
      },
    ],
  };
  const options = {
    categoryPercentage: 0.8,
    barPercentage: 1,
    indexAxis: "y",
    maintainAspectRatio: true,
    scales: {
      x: {
        ticks: {
          font: {
            size: 8,
          },
          minRotation: 20,
        },
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          font: {
            size: 15,
          },
          minRotation: 20,
        },
        beginAtZero: true,

        grid: {
          display: false,
        },
      },
    },
  };
  useEffect(() => {
    setTimeout(() => {
      fetch("https://covidpagination.herokuapp.com/country")
        .then((response) => response.json())
        .then((data) => {
          setData(data.data);
          setLoader(true);
        });
    }, 700);
  }, []);
  return (
    <div>
      <Header data={data}></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-md-offset-2">
            <p style={{ fontSize: "70px" }}>COVID-19</p>
            <h5>Global Cases</h5>
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
              <h4>
                {data.reduce((current, previous) => {
                  return +current + +previous.TotalCases;
                }, 0)}
              </h4>
              <p style={{ color: "green" }}>TotalRecovered</p>
              <h4>
                {data.reduce((current, previous) => {
                  return +current + +previous.TotalRecovered;
                }, 0)}
              </h4>

              <p style={{ color: "orange" }}>ActiveCases</p>
              <h4>
                {data.reduce((current, previous) => {
                  return +current + +previous.ActiveCases;
                }, 0)}
              </h4>
              <p style={{ color: "red" }}>TotalDeaths</p>
              <h4>
                {data.reduce((current, previous) => {
                  return +current + +previous.TotalDeaths;
                }, 0)}
              </h4>
            </div>
          </div>
        </div>
        <div className="barchart">
          {!loader ? (
            <div className="loader">
              <center>
                <ReactLoading
                  type={"spin"}
                  color={"green"}
                  // height={50}
                  width={50}
                />
              </center>
            </div>
          ) : (
            <Bar
              data={state}
              options={options}
              className="chart"
              width={50}
              height={1000}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
