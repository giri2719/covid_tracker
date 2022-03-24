import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
// import * as ReactBootStrap from "react-bootstrap";
import "./Home.css";
const Global = () => {
  const { state } = useLocation();
  const columns = [
    {
      dataField: "Country",
      text: "country",
      sort: true,
    },
    {
      dataField: "ThreeLetterSymbol",
      text: "ISO CODE",
      sort: true,
    },
    {
      dataField: "Population",
      text: "Population",
      sort: true,
    },
    {
      dataField: "TotalTests",
      text: "TotalTests",
      sort: true,
    },
    {
      dataField: "TotalCases",
      text: "TotalCases",
      sort: true,
    },
    {
      dataField: "ActiveCases",
      text: "ActiveCases",
      sort: true,
    },
    {
      dataField: "TotalRecovered",
      text: "Recoved",
      sort: true,
    },
    {
      dataField: "TotalDeaths",
      text: "Deaths",
      sort: true,
    },
  ];
  return (
    <div className="bg-light" style={{ backgroundColor: "silver" }}>
      <Header data={state} />
      <div className="globaltable ">
        <center>
          <h1 style={{ paddingBottom: "2%", color: "black" }}>
            Global Covid Details
          </h1>
        </center>
        <div style={{ maxWidth: "100%" }}>
          <BootstrapTable
            keyField="Country"
            data={state}
            columns={columns}
            pagination={paginationFactory()}
          />
        </div>
      </div>
    </div>
  );
};
export default Global;
