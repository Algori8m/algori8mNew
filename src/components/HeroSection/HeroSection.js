import React, { useRef } from "react";
import images from "../../assets/images";
import TopBar from "../TopBar/TopBar";
import "./heroSection.css";

function HeroSection({
  heroSection,
  serviceSection,
  contactSection,
  aboutSection,
  portfolioSection,
  techStackSection,
}) {


  return (
    <section className="heroSection" ref={heroSection}>
      <TopBar 
        heroSection={heroSection}
        serviceSection={serviceSection}
        contactSection={contactSection}
        aboutSection={aboutSection}
        portfolioSection={portfolioSection}
        techStackSection={techStackSection} />
      <div className="heroSectionMain">
        <div className="heroSectionAnimation">
          <div className="heroSectionAnimationInner">
            <span className="squareAnime squareAnime1"></span>
            <span className="squareAnime squareAnime2"></span>
            <span className="squareAnime squareAnime3"></span>
            <span className="squareAnime squareAnime4"></span>
          </div>
        </div>
        <div className="heroSectionContent">
          <div className="heroSectionContentInfo">
            <p className="heroSectionText">
              Boost Your Business Digital Presence & Build Loyal Customers.
            </p>

            <a className="heroSectionContactLink" href="https://wa.me/message/6BB7JS45Y55XP1">
            <button className="heroSectionContactButton">
            Contact Us
            </button>
            </a>
          </div>

          <div className="heroSectionImageInfo">
            <div className="heroSectionImage1Wrapper">
              <div className="heroSectionImage1Inner">
                <img src={images["heroImage1"]} alt="heroImage1" />
              </div>
            </div>
            <div className="heroSectionImage2Wrapper">
              <div className="heroSectionImage2Inner"> 
                <img src={images["heroImage2"]} alt="heroImage2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
