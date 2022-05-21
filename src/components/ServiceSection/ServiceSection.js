import React from "react";
import images from "../../assets/images";
import "./serviceSection.css";

function ServiceSection({serviceSection}) {
  return (
    <section className="serviceSectionWrapper" ref={serviceSection}>
      <div className="serviceSectionServices">
        <div className="serviceSectionService serviceSectionService1">
          <span className="serviceIconWrapper">
            <img src={images["digitalMarketing"]} alt="" />
          </span>
          <h4>Digital Marketing</h4>
          <p className="serviceText">
            Following a detailed process. We promote your business growth
            through digital platforms.
          </p>
        </div>
        <div className="serviceSectionService serviceSectionService2">
          <span className="serviceIconWrapper">
            <img src={images["dev"]} alt="" />
          </span>
          <h4>Web/App Development</h4>
          <p className="serviceText">
            With popular front-end & back-end web technologies, we develop
            static/dynamic websites that are functional, responsive and
            interactive.
          </p>
        </div>
        <div className="serviceSectionService serviceSectionService3">
          <span className="serviceIconWrapper">
            <img src={images["design"]} alt="" />
          </span>
          <h4>Design</h4>
          <p className="serviceText">
            We provide e-banner, flyer design, branding (& more graphics works)
            that communicates with your audience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
