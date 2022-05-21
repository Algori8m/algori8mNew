import React from "react";
import { FaCss3, FaHtml5, FaJs, FaNode, FaPhp, FaReact } from "react-icons/fa";
import "./techStack.css";

function TechStack({techStackSection}) {
  return (
    <section className="techStackSection" ref={techStackSection}>
      <h2 className="techStackSectionTitle">Tech Stack</h2>

      <ul className="techStackList">
        <li>
          <FaHtml5 size={30} />
        </li>
        <li>
          <FaCss3 size={30} />
        </li>
        <li>
          <FaPhp size={55} />
        </li>
        <li>
          <FaJs size={45} />
        </li>
        <li>
          <FaNode size={55} />
        </li>
        <li>
          <FaReact size={55} />
        </li>
      </ul>
    </section>
  );
}

export default TechStack;
