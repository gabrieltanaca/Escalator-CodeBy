import React from "react";
import "../styles/Category.css";

interface CategoryProps {
  title: string;
  description: string;
  image: string;
  flexBasis: string;
  center?: boolean;
  right?: boolean;
}
const Category = ({
  title,
  description,
  image,
  flexBasis,
  center,
  right,
}: CategoryProps) => {
  return (
    <div
      className="containerCategory"
      style={{
        backgroundImage: `url(${image})`,
        flexBasis,
        display: "flex",
        flexDirection: "column",
        justifyContent: center ? "center" : "flexStart",
        textAlign: right ? "right" : "left",
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Category;
