import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

import "./About.css";

const About = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="about-bg d-flex justify-content-center align-items-center ">
        <h2 className="text-center explore-head">
          {" "}
          <Link className="item" to="/home">
            Home
          </Link>{" "}
          || About Us
        </h2>
      </div>

      <div className="all-services">
        <div>
          <p> --- OUR ALL---</p>
          <h2>Provided Sevices</h2>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="d-flex justify-content-center d-flex align-items-center">
              <img
                className="img-fluid mt-2"
                src="https://homesolutions.hk/wp-content/uploads/2021/12/GF-facing-garden.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex justify-content-center d-flex align-items-center">
              <img
                className="img-fluid mt-2"
                src="https://homesolutions.hk/wp-content/uploads/2021/12/1.1.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex justify-content-center d-flex align-items-center">
              <img
                className="img-fluid mt-2"
                src="https://homesolutions.hk/wp-content/uploads/2021/12/1-10.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex justify-content-center d-flex align-items-center">
              <img
                className="img-fluid mt-2"
                src="https://homesolutions.hk/wp-content/uploads/2021/11/1-17.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="container">
          <h2 className="text-center">
            With us, expect more than just a Real Estate Agency.
          </h2>
          <p className="text-center">
            The LuxuryLiving team of agents are exceptional in providing the
            very best in customer service. Each team member is dedicated to
            giving you a honest and stress-free real estate experience.
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="container">
          <h2 className="text-center">
            We assure customer satisfaction with personal care.
          </h2>
          <p className="text-center">
            LuxuryLiving Real Estate Ltd is an estate agency specialising in
            selling and leasing property. We have agents from around the world
            and offer services in a variety of different languages. Whether you
            are looking to purchase your dream home or lease a small flat,
            LuxuryLiving can help.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
