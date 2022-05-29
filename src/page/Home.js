import React, { useRef } from "react";
import AboutSection from "../components/AboutSection/AboutSection";
import Contactus from "../components/Contactus/Contactus";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import PreviousProjects from "../components/PreviousProjects/PreviousProjects";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import TechStack from "../components/TechStack/TechStack";

function Home() {
  const heroSection = useRef();
  const serviceSection = useRef();
  const aboutSection = useRef();
  const contactSection = useRef();
  const portfolioSection = useRef();
  const techStackSection = useRef();

  return (
    <>
      <HeroSection
        heroSection={heroSection}
        serviceSection={serviceSection}
        contactSection={contactSection}
        aboutSection={aboutSection}
        portfolioSection={portfolioSection}
        techStackSection={techStackSection}
      />
      <AboutSection aboutSection={aboutSection} />
      <ServiceSection serviceSection={serviceSection} />
      <TechStack techStackSection={techStackSection} />
      <PreviousProjects portfolioSection={portfolioSection} />
      <Contactus contactSection={contactSection} />
      <Footer
        heroSection={heroSection}
        serviceSection={serviceSection}
        contactSection={contactSection}
        aboutSection={aboutSection}
        portfolioSection={portfolioSection}
        techStackSection={techStackSection}
      />
    </>
  );
}

export default Home;
