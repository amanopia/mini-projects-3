import React from "react";
import "./header.css";

import Navigtion from "@/app/datafeed/Navigation/Navigation.jsx";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="hero-section">
      <Navigtion></Navigtion>
      <div className="rotating-blob-1">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg">
          {" "}
          <defs>
            {" "}
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              {" "}
              <stop id="stop1" stopColor="#cc99ff" offset="0%"></stop>{" "}
              <stop id="stop2" stopColor="#7591ff" offset="100%"></stop>{" "}
            </linearGradient>{" "}
          </defs>{" "}
          <path
            fill="url(#sw-gradient)"
            d="M26.2,-35.7C34,-30.4,40.3,-22.8,43.3,-14C46.3,-5.2,46,4.9,42,12.6C38,20.3,30.4,25.7,22.7,30.4C15.1,35.1,7.6,39,-0.2,39.2C-7.9,39.4,-15.8,36,-23,31.2C-30.2,26.4,-36.8,20.2,-40.8,12.2C-44.7,4.3,-46.1,-5.6,-42.7,-13.2C-39.3,-20.8,-31,-26.1,-23.1,-31.3C-15.2,-36.5,-7.6,-41.6,0.8,-42.7C9.2,-43.8,18.4,-40.9,26.2,-35.7Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            style={{ transition: "0.3s" }}></path>{" "}
        </svg>
      </div>

      <h1>
        Find quality data with <span>Datafeed</span>
      </h1>
      <p>
        Where the world struggles for quality and accurate data, we find it for
        you. Browse accross a million data sets procured from around the world
        to train your models and better serve your clients
      </p>
      <div className="cta">
        <Button>
          Explore datasets
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <g data-name="diagonal-arrow-right-up">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                />

                <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
              </g>
            </g>
          </svg>
        </Button>
        <Button>
          Watch demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <g data-name="diagonal-arrow-right-up">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                />

                <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
              </g>
            </g>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default Header;
