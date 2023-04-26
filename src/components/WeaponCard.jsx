import React from "react";
import { Link } from "react-router-dom";

const WeaponCard = ({ gun }) => {
  return (
    <div className="MapCard col-lg-4 col-md-6 col-12">
      <Link to={gun.displayName} className="resetLink">
        <div className="row gunCardCard">
          <div className="col-6">
            <h3>{gun.displayName}</h3>
          </div>
          {/* <p>{description}</p> */}
          <img className="col-6" src={gun.killStreamIcon} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default WeaponCard;
