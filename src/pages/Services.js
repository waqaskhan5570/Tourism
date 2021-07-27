import React, { useEffect } from "react";
import "../App.css";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="services">
      <h1>SERVICES</h1>
    </div>
  );
}

export default Services;
