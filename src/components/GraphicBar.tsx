import React from "react";
import "../styles/GraphicBar.css";

interface GraphicProps {
  price: string;
  hours: string;
  height: string;
  className?: string;
}

const GraphicBar = ({ price, hours, height, className }: GraphicProps) => {
  return (
    <div className={`graphic ${className}`}>
      <div className="topBar">
        <h1>{price}</h1>
        <h2>{hours} + hours</h2>
      </div>
      <div
        className="bar"
        style={{
          height: `${height}`,
        }}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default GraphicBar;
