import React, { useState } from "react";
import Header from "./Header";
import { useLocation, Link } from "react-router-dom";
import "./Home.css";
const Search = () => {
  const { state } = useLocation();
  const [arrval, setarrval] = useState(state);
  const search = (event) => {
    let a = [];
    a = [...state];
    let val = event.target.value;
    let temp = [];
    if (val !== "") {
      temp = a.filter(function (value) {
        return value.Country.toLowerCase().includes(val.toLowerCase());
      });
      setarrval(temp);
      console.log(temp);
    } else {
      setarrval(a);
    }
  };
  return (
    <div className="main bg-light">
      <Header data={state} />
      <div id="search">
        <br></br>
        <h3>Select a country</h3>
        <br></br>
        <div className="active-pink-4 mb-2">
          <input
            className="form-control"
            type="text"
            placeholder="select a country"
            aria-label="Search"
            onKeyUp={search}
            style={{ borderRadius: "10px", backgroundColor: "silver" }}
          ></input>
          <br></br>
          <p>Suggestions</p>
          <div className="suggestionContent">
            <p></p>
            {arrval.map((data, index) => (
              <Link
                to="/country"
                key={index}
                state={data}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontStyle: "bold",
                }}
              >
                <h6
                  style={{
                    marginLeft: "15px",
                    fontStyle: "italic",
                    paddingBottom: "10px",
                  }}
                >
                  {`${data.Country}(${data.ThreeLetterSymbol})`}
                </h6>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
