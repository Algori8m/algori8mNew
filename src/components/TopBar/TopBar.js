import React, { useState } from "react";
import {
  MdClose,
  MdEmail, 
  MdHome,
  MdHomeRepairService,
  MdInfo,
  MdListAlt,
  MdMenu,
  MdMiscellaneousServices,
  MdOutlineCall,
  MdPhone,
} from "react-icons/md";
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import images from "../../assets/images";

import "./topBar.css";

function TopBar({
  heroSection,
  serviceSection,
  contactSection,
  aboutSection,
  portfolioSection,
  techStackSection,
}) {
  const [menuOpen, setMenuOpen] = useState(false);


  const scrollToRef = (ref) => {
    console.log(techStackSection.current)
    if(ref.current === techStackSection.current){
    window.scrollTo({
      top: ref.current.offsetTop - 50,
      left: 0,
      behavior: 'smooth'
    }) 
    }else{
      window.scrollTo({
        top: ref.current.offsetTop,
        left: 0,
        behavior: 'smooth'
      })
    }
    setMenuOpen(false)
  }


  return (
    <>
      <div className="topBarWrapper">
        <div className="topBarUpperSection">
          <div className="topBarContactInfo">
            <p>
              <span>
                <MdEmail />
              </span>
              algori8m@gmail.com
            </p>{" "}
            |
            <p>
              <span>
                <MdPhone />
              </span>
              +234 7067293973, +234 8119473098
              
            </p>
          </div>

          <div className="topBarSocialMedia">
            <a href="https://wa.me/message/ERBQVU7WPDLJN1">
              <span>
                <FaWhatsapp />
              </span>
            </a>
            <a href="https://twitter.com/algori8m">
              <span>
                <FaTwitter />
              </span>
            </a>
            <a href="https://facebook.com/algori8m">
              <span>
                <FaFacebook />
              </span>
            </a>
            <a href="https://instagram.com/algori8mtech">
              <span>
                <FaInstagram />
              </span>
            </a>
          </div>
        </div>

        <div className="topBarLowerSection">
          <div className="topBarLogo">
            <a href="/">
              <img src={images["logo"]} alt="log" />
            </a>
          </div>

          <nav className="topBarNav">
            <ul>
              <li onClick={() => scrollToRef(heroSection)}>
                <span>Home</span>
              </li>
              <li onClick={() => scrollToRef(serviceSection)}>
                <span>Our Services</span>
              </li>
              <li onClick={() => scrollToRef(aboutSection)}>
                <span>About us</span>
              </li>
              <li onClick={() => scrollToRef(techStackSection)}>
                <span>Our Stack</span>
              </li>
              <li onClick={() => scrollToRef(portfolioSection)}>
                <span>Portfolio</span>
              </li>
              <li onClick={() => scrollToRef(contactSection)}>
                <span>Contact us</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="topBarMobile">
        <div className="topBarMobileControl">
          <div className="topBarMobileLogoContainer">
            <img src={images["logoMobile"]} alt="/" />
          </div>
          <div className="topBarMobileMenu">
            {menuOpen ? (
              <MdClose onClick={() => setMenuOpen(false)} size={30} />
            ) : (
              <MdMenu onClick={() => setMenuOpen(true)} size={30} />
            )}
          </div>
        </div>

        <nav
          className={menuOpen ? "topBarMobileNav active" : "topBarMobileNav"}
        >
          <ul className="topBarMobileNavList">
            <li onClick={() => scrollToRef(heroSection)}>
              <span>
                <MdHome size={25} />
              </span>
              <span >Home</span>
            </li>
            <li onClick={() => scrollToRef(serviceSection)}>
              <span>
                <MdMiscellaneousServices size={25} />
              </span>
              <span>Our Services</span>
            </li>
            <li onClick={() => scrollToRef(aboutSection)}>
              <span>
                <MdInfo size={25} />
              </span>
              <span>About us</span>
            </li>
            <li onClick={() => scrollToRef(techStackSection)}>
              <span>
                <MdListAlt size={25} />
              </span>
              <span>Our Stack</span>
            </li>
            <li onClick={() => scrollToRef(portfolioSection)}>
              <span>
                <MdHomeRepairService size={25} />
              </span>
              <span>Portfolio</span>
            </li>
            <li onClick={() => scrollToRef(contactSection)}>
              <span>
                <MdOutlineCall />
              </span>
              <span>Contact us</span>
            </li>
          </ul>

          <hr className="topBarMobileHr" />

          <ul className="topBarMobileSocialList">
            <li>
              <a href="https://wa.me/message/ERBQVU7WPDLJN1">
                <span>
                  <FaWhatsapp size={20} />
                </span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/algori8m">
                <span>
                  <FaTwitter size={20} />
                </span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/algori8m">
                <span>
                  <FaFacebook size={20} />
                </span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/algori8mtech">
                <span>
                  <FaInstagram size={20} />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default TopBar;
