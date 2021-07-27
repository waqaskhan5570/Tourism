import React, { useEffect } from "react";
import "../App.css";

function PlacesInfo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1>This page is yet to be developed </h1>
      <br />
      <br />
      <br />
      <h2>Info of the clicked place</h2>
      <h3>Complete details of the place clicked will be shown here </h3>
    </div>
  );
}

export default PlacesInfo;
