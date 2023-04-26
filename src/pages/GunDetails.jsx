import React from "react";
import { useParams } from "react-router-dom";

const GunDetails = ({ data }) => {
  const { id } = useParams();

  console.log(data);

  return (
    <div className="col-lg-10 col-12 p-4 row m-auto">
      {data
        .filter((x) => x.displayName === id)
        .map((item) => {
          return (
            <div className="col-lg-10 col-12 p-4 m-auto" key={item.uuid}>
              <h1>{item.displayName}</h1>
              <img
                className="img-fluid p-4 my-4"
                src={item.displayIcon}
                alt=""
              />
              {item.displayName === "Melee" ? (
                <p>Melee</p>
              ) : (
                <>
                  <h3>{item.shopData.categoryText}</h3>
                  <p>Cost {item.shopData.cost}</p>
                  <br />
                  <br />
                </>
              )}
              <h2>Skins</h2>
              <div className="row">
                {item.skins
                  .filter((y) => {
                    const check = y.displayName.split(" ")[0];
                    return check !== "Random";
                  })
                  .map((x) => {
                    const check = x.displayName.split(" ")[0];
                    let icon;
                    if (check === "Standard") icon = item.displayIcon;
                    else icon = x.displayIcon;

                    return (
                      <div className="col-lg-4 col-md-6 col-12 gunskins p-3">
                        <div className="">
                          <h3>{x.displayName}</h3>
                          <img className="img-fluid" src={icon} alt="" />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default GunDetails;
