import React from "react";
import "./datafeed.styles.css";
import Header from "@/app//datafeed/Header/Header.jsx";
import Partners from "./Partners/Partner";

function page() {
  return (
    <div className="parent-container">
      <div className="glass-screen"></div>
      <Header />
      <Partners />
    </div>
  );
}

export default page;
