import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <div>
      <li className="cards-item">
        <Link className="cards-item-link" to={props.path}>
          <figure className="cards-item-pic-wrap" data-category={props.label}>
            <img src={props.src} alt="TravelImg" className="cards-item-img" />
          </figure>

          <div className="cards-items-info">
            <h5 className="cards-item-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItem;
