import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faFileCode } from "@fortawesome/free-solid-svg-icons";
import home1 from "../img/placeholder-img.jpg";

const AttributeSection = () => {
  return (
    <div className="attributes">
      <div className="description">
        <h2>
          Lorem <span>ipsum dolor</span> sit amet.
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faPlane} />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faFileCode} />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faPlane} />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faFileCode} />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home1} alt="Image of code" />
      </div>
    </div>
  );
};

export default AttributeSection;
