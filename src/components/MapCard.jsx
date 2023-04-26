import React from "react";
import { Link } from "react-router-dom";

const MapCard = ({ map }) => {
  return (
    <div className="MapCard col-lg-4 col-md-6 col-12">
      <Link to={map.displayName} className="resetLink">
        <div className="row mapCardCard">
          <div className="col-6">
            <h2>{map.displayName}</h2>
          </div>
          {/* <p>{description}</p> */}
          <img className="col-6" src={map.listViewIcon} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default MapCard;
