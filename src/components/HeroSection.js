import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import coverVid from "../assets/videos/video-1.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={coverVid} type="video/mp4" autoPlay loop muted />
      <h1>LETS GO?</h1>
      <p>Get on the bus already...!!</p>

      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>

        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH VIDEO <i className="bi bi-caret-right-fill" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
