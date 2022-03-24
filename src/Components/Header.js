import React from "react";
import { Link } from "react-router-dom";
export default function Header({ data }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <p
          className="navbar-brand"
          style={{ color: "white", fontWeight: "bold" }}
          href="#"
        >
          Covid Tracker
        </p>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a
              className="nav-link btn"
              href="/"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link btn "
              to="/search"
              state={data}
              style={{ color: "white", fontWeight: "bold" }}
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link btn"
              to="/global"
              state={data}
              style={{ color: "white", fontWeight: "bold" }}
            >
              Global
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
