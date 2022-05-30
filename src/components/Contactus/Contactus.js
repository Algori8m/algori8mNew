import React from "react";
import "./contactus.css";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contactus({ contactSection }) {
  return (
    <section className="contactUs" ref={contactSection}>
      <h2 className="contactUsTitle">Contact Us</h2>

      <ul className="contactUsList">
        <li>
          <a href="https://wa.me/message/6BB7JS45Y55XP1">
            <span>
              <FaWhatsapp />
            </span>
            <p>+234 8104450401</p>
          </a>
        </li>

        <li>
          <a href="https://twitter.com/algori8m">
            <span>
              <FaTwitter />
            </span>
            <p>@algori8m</p>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/algori8m">
            <span>
              <FaFacebook />
            </span>
            <p>@algori8m</p>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/algori8mtech">
            <span>
              <FaInstagram />
            </span>
            <p>@algori8mtech</p>
          </a>
        </li>
        <li>
          <span>
            <MdEmail />
          </span>
          <p>algori8m@gmail.com</p>
        </li>
      </ul>
    </section>
  );
}

export default Contactus;
