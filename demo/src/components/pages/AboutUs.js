import React from "react";
import "./AboutUs.css";

function AboutUs(props) {
  return (
    <div>
      <div className="head">
        <h1>Our Team</h1>
      </div>

      <div className="column">
        <div className="card">
          <img
            src="images/N180286.jpg"
            alt="person1"
            style={{ width: "100%", height: "180px", borderRadius: "100%" }}
          />
          <div className="container">
            <h2>Aditya</h2>
            <p className="title">N180286</p>
            <p>9381795078</p>
            <p>n180286@rguktn.ac.in</p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            src="images/N180341.jpg"
            alt="person2"
            style={{ width: "100%", height: "180px", borderRadius: "100%" }}
          />
          <div class="container">
            <h2>Chaitanya</h2>
            <p class="title">N180341</p>
            <p>8184881301</p>
            <p>n180341@rguktn.ac.in</p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            src="images/N180622.jpg"
            alt="person3"
            style={{ width: "100%", height: "180px", borderRadius: "100%" }}
          />
          <div class="container">
            <h2>Mamatha</h2>
            <p class="title">N180622</p>
            <p>9550481391</p>
            <p>n180622@rguktn.ac.in</p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            src="images/N180447.jpg"
            alt="person3"
            style={{ width: "100%", height: "180px", borderRadius: "100%" }}
          />
          <div class="container">
            <h2>Amani</h2>
            <p class="title">N180447</p>
            <p>9381790582</p>
            <p>n180447@rguktn.ac.in</p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <img
            src="images/N180127.jpg"
            alt="person3"
            style={{ width: "100%", height: "180px", borderRadius: "100%" }}
          />
          <div class="container">
            <h2>Anupama</h2>
            <p class="title">N180127</p>
            <p>9392413059</p>
            <p>n180127@rguktn.ac.in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
