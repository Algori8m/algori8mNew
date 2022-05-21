import React from "react";
import "./aboutSection.css";

function AboutSection({aboutSection}) {
  return (
    <section className="aboutSection" ref={aboutSection}>
      <h2 className="aboutSectionTitle">About us</h2>

        <div className="aboutSectionAnimationInner">
                <span className="aboutAnime aboutAnime1"></span>
                <span className="aboutAnime aboutAnime2"></span>
                <span className="aboutAnime aboutAnime3"></span>
        </div>



      <div className="aboutSectionVision">
        <p className="aboutSectionVisionTitle">OUR VISION</p>
        <p className="aboutSectionVisionText">
          To Provide the best digital and technological solutions for the best
          of the present and future anticipated utopian world
        </p>
      </div>


      <div className="aboutSectionHistory">
        <p className="aboutSectionHistoryTitle">HISTORY</p>
        <ul className="aboutSectionHistoryText">
          <li><b>2020</b> - The conceptualization of the great idea</li>
          <span></span>
          <li><b>2021</b> - Official launch of Algori8m</li>
          <span></span>
          <li><b>2022</b> - Our team grows</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
