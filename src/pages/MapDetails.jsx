import React from "react";
import { useParams } from "react-router-dom";

const MapDetails = ({ data }) => {
  const { id } = useParams();

  console.log(data);

  return (
    <div className="col-lg-10 col-12 row m-auto">
      {data
        .filter((x) => x.displayName === id)
        .map((item) => {
          return (
            <div className="col-10 m-auto" key={item.uuid}>
              <h1 className="mt-4">{item.displayName}</h1>
              <p>Coordinates {item.coordinates}</p>
              <img className="img-fluid" src={item.splash} alt="" />
              <img className="img-fluid" src={item.displayIcon} alt="" />
            </div>
          );
        })}
    </div>
  );
};

export default MapDetails;
