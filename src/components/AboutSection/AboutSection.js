import React from "react";
import "./aboutSection.css";

function AboutSection({aboutSection}) {
  return (
    <section className="aboutSection" ref={aboutSection}>
      <h2 className="aboutSectionTitle">We Digitize Your Business</h2>

        <div className="aboutSectionAnimationInner">
                <span className="aboutAnime aboutAnime1"></span>
                <span className="aboutAnime aboutAnime2"></span>
                <span className="aboutAnime aboutAnime3"></span>
        </div>



      <div className="aboutSectionVision">
        <p className="aboutSectionVisionTitle"></p>
        <p className="aboutSectionVisionText">
          We are committed to boosting your business's growth via digital tools.
        </p>
        <p className="aboutSectionVisionText">
          Today, a large percentage of your customers are online, that's where they
          go when they need information about a product or service.
        </p>
        <p className="aboutSectionVisionText">
          We understand this and that's why we are committed to help
          get to where your potential customers/clients are.
        </p>
      </div>

{/* 
      <div className="aboutSectionHistory">
        <p className="aboutSectionHistoryTitle">HISTORY</p>
        <ul className="aboutSectionHistoryText">
          <li><b>2020</b> - The conceptualization of the great idea</li>
          <span></span>
          <li><b>2021</b> - Official launch of Algori8m</li>
          <span></span>
          <li><b>2022</b> - Our team grows</li>
        </ul>
      </div> */}
    </section>
  );
}

export default AboutSection;
