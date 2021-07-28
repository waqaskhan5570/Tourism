import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these awesome places!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src={require("../assets/images/DEOSAI.jpg").default}
              text="Explore the beauty of Deosai National Park."
              label="Adventure"
              path="/PlacesInfo"
            />

            <CardItem
              src={require("../assets/images/hingol-park.jpg").default}
              text="The beautiful you won't believe is in Pakistan."
              label="Tour"
              path="/PlacesInfo"
            />

            <CardItem
              src={require("../assets/images/islamabad.jpg").default}
              text="Take a tour of the beautiful capital of Pakistan."
              label="Tour"
              path="/PlacesInfo"
            />
            <CardItem
              src={require("../assets/images/Kumrat-Valley-KPK.jpg").default}
              text="Heaven on Earth, full of adventure."
              label="Adventure"
              path="/PlacesInfo"
            />

            <CardItem
              src={require("../assets/images/lahore.jpg").default}
              text="One of the beautiful city with historical buildings."
              label="Tour"
              path="/PlacesInfo"
            />

            <CardItem
              src={require("../assets/images/MargallaHills.jpg").default}
              text="Take a hike on the mountains of Himalayan foothills."
              label="Adventure"
              path="/PlacesInfo"
            />

            <CardItem
              src={require("../assets/images/Miranjani-Track.jpg").default}
              text="The highest peak in Galyat Region with a total lenght of 4.69km."
              label="Adventure"
              path="/PlacesInfo"
            />

            <CardItem
              src={
                require("../assets/images/Naran-Kaghan-Waterfalls.jpg").default
              }
              text="These are without a doubt the most beautiful waterfalls of Pakistan."
              label="Adventure"
              path="/PlacesInfo"
            />

            <CardItem
              src={require("../assets/images/Shingrai-Waterfall.jpg").default}
              text="This panoramic waterfall can be found in the valley of Swat."
              label="Adventure"
              path="/PlacesInfo"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
