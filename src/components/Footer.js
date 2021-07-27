import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Subscribe to our TOURISM Newsletter to recieve the best vacation
          deals.
        </p>
        <p className="footer-subscription-text">You can unsub at any time.</p>

        <div className="input-areas">
          <form action="">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="footer-input"
            />
            <button className="subscribe-btn"> Subscribe</button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TOURISM <i className="bi bi-tropical-storm " />
            </Link>
          </div>
          <small className="website-rights">TOURISM ©</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook "
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookSquare />
            </Link>

            <Link
              className="social-icon-link instagram "
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagramSquare />
            </Link>

            <Link
              className="social-icon-link twitter "
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitterSquare />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
