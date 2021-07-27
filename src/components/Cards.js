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
              src="/images/DEOSAI.jpg"
              text="Explore the beauty of Deosai National Park."
              label="Adventure"
              path="/PlacesInfo"
            />

            <CardItem
              src="/images/hingol-park.jpg"
              text="The beautiful you won't believe is in Pakistan."
              label="Tour"
              path="/PlacesInfo"
            />

            <CardItem
              src="/images/islamabad.jpg"
              text="Take a tour of the beautiful capital of Pakistan."
              label="Tour"
              path="/PlacesInfo"
            />
            <CardItem
              src="/images/kumrat-Valley-kpk.jpg"
              text="Heaven on Earth, full of adventure."
              label="Adventure"
              path="/PlacesInfo"
            />

            <CardItem
              src="/images/lahore.jpg"
              text="One of the beautiful city with historical buildings."
              label="Tour"
              path="/PlacesInfo"
            />

            <CardItem
              src="/images/MargallaHills.jpg"
              text="Take a hike on the mountains of Himalayan foothills."
              label="Adventure"
              path="/PlacesInfo"
            />

            <CardItem
              src="/images/Miranjani-track.jpg"
              text="The highest peak in Galyat Region with a total lenght of 4.69km."
              label="Adventure"
              path="/PlacesInfo"
            />

            <CardItem
              src="/images/Naran-Kaghan-Waterfalls.jpg"
              text="These are without a doubt the most beautiful waterfalls of Pakistan."
              label="Adventure"
              path="/PlacesInfo"
            />

            <CardItem
              src="/images/Shingrai-Waterfall.jpg"
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
