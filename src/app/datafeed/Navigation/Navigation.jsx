"use client";
import React, { useState } from "react";
import "./navigation.css";

const navElements = [
  { id: 1, name: "Home" },
  { id: 2, name: "Product" },
  { id: 3, name: "About" },
  { id: 4, name: "Contact" },
];
function Navigation() {
  const [active, setActive] = useState(4);
  console.log(active);
  return (
    <div>
      <nav className="navigation">
        <ul>
          {navElements.map((el) => {
            return (
              <li
                key={el.id}
                className={el.id == active ? "active" : ""}
                onClick={() => setActive(el.id)}>
                {el.name}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
