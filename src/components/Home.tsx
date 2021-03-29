import React from "react";
import "../styles/Home.css";
import Category from "./Category";
import GraphicBar from "./GraphicBar";

const Home: React.FC = () => {
  return (
    <>
      <div className="backgroundImage">
        <div className="logo">
          <img src="/escalator.svg" alt="Escalator" />
          <p>ESCALATOR</p>
        </div>
        <h1>
          we have ideas to <br></br>
          growth your business
        </h1>
        <button>SEE NOW</button>
      </div>

      <div className="categories">
        <div className="titleBox">
          <h1>categories</h1>
          <p>discover new possibilities to help you today</p>
        </div>

        <div className="containerCategories">
          <Category
            title="nature"
            description="Lorem ipsum dolor sit amet"
            image="/nature.svg"
            flexBasis="calc(33% - 15px)"
          />
          <Category
            title="daily"
            description="Praesent tincidunt consectetur diam"
            image="/daily.svg"
            flexBasis="calc(67% - 15px)"
          />
          <Category
            title="together"
            description="Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum"
            image="/together.svg"
            flexBasis="100%"
            center
          />
          <Category
            title="analysis"
            description="Duis sollicitudin mauris vitae venenatis aliquet"
            image="/analysis.svg"
            flexBasis="calc(67% - 15px)"
            right
          />
          <Category
            title="pictures"
            description="Quisque eu nisl purus"
            image="/pictures.svg"
            flexBasis="calc(33% - 15px)"
          />
        </div>
      </div>

      <div className="plansContainer">
        <div className="titleBox">
          <h1>growth plans</h1>
          <p>take your business to the next level</p>
        </div>
        <div className="graphicsContainer">
          <GraphicBar price="$ 100" hours="100" height="20%" className="g1" />
          <GraphicBar price="$ 150" hours="180" height="30%" className="g2" />
          <GraphicBar price="$ 200" hours="260" height="40%" className="g3" />
          <GraphicBar price="$ 250" hours="380" height="50%" className="g4" />
          <GraphicBar price="$ 300" hours="420" height="60%" className="g5" />
          <GraphicBar price="$ 350" hours="520" height="70%" className="g6" />
        </div>
      </div>
    </>
  );
};

export default Home;
