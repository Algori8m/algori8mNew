import React from "react";
import { Link } from "react-router-dom";
import images from "../../assets/images";
import "./footer.css";

function Footer({
  heroSection,
  serviceSection,
  contactSection,
  aboutSection,
  portfolioSection,
  techStackSection,
}) {
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="footer">
      <div className="footerWrapper">
        <div className="quickLinks">
          <h3 className="quickLinksTitle">Quick Links</h3>
          <ul className="quickLinksList">
            <li>
              <span onClick={() => scrollToRef(heroSection)}>Home</span>
            </li>
            <li>
              <span onClick={() => scrollToRef(aboutSection)}>About us</span>
            </li>
            <li>
              <span onClick={() => scrollToRef(serviceSection)}>Services</span>
            </li>
            <li>
              <span onClick={() => scrollToRef(techStackSection)}>
                Our Stack
              </span>
            </li>
            <li>
              <span onClick={() => scrollToRef(portfolioSection)}>
                Portfolio
              </span>
            </li>
            <li>
              <span onClick={() => scrollToRef(contactSection)}>
                Contact Us
              </span>
            </li>
            <li>
              <Link className="privacyPolicyLink" to='/privacyPolicy'>
              <span onClick={() => scrollToRef(contactSection)}>
                Privacy Policy
              </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="footerLogo">
          <img src={images["logoFooter"]} alt="" />
        </div>

        <div className="socialMedia">
          <h3 className="socialMediaTitle">Social Media</h3>
          <ul className="socialMediaList">
            <li>
              <a href="https://facebook.com/algori8m">Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com/algori8mtech">Instagram</a>
            </li>
            <li>
              <a href="https://twitter.com/algori8m">Twitter</a>
            </li>

            <li>
              <a href="https://wa.me/message/ERBQVU7WPDLJN1">WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>2021 - 2022 (c) Algori8m</p>
      </div>
    </section>
  );
}

export default Footer;
