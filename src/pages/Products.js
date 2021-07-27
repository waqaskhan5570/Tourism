import React, { useEffect } from "react";
import "../App.css";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="products">
      <h1>PRODUCTS</h1>
    </div>
  );
}

export default Products;
