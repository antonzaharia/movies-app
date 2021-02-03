import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="logo">MovieApp</h1>
      <button className="filter-btn">Filter by rating</button>
    </div>
  );
}
