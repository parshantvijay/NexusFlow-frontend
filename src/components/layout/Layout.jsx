import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div  style={{ backgroundColor: "black", color: "white" }}> {/* Inline styles for black background */}
        <Header />
      <div className="page">

        <div style={{ minHeight: "80vh", padding: "1rem" }}>
          {children}
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Layout;
