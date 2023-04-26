import React from "react";
import { useParams } from "react-router-dom";

const AgentDetails = ({ data }) => {
  const { id } = useParams();

  return (
    <div className="col-lg-10 col-12 row m-auto">
      {data
        .filter((x) => x.isPlayableCharacter && x.displayName === id)
        .map((item) => {
          return (
            <div className="col-lg-10 col-12 m-auto" key={item.uuid}>
              <div className="hero">
                <img
                  className="fullPic img-fluid my-4 col-lg-6 col-12"
                  src={item.fullPortrait}
                  alt=""
                />
                <img src={item.background} alt="" className="designPic" />
                <div className="detdet">
                  <h1>{item.displayName}</h1>
                  <div className="roleSection">
                    <img src={item.role.displayIcon} alt="" />
                    <p>{item.role.displayName}</p>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>

              <div className="abilitySec row">
                {item.abilities.map((ability) => {
                  return (
                    <div className="oneAbility">
                      <img src={ability.displayIcon} alt="" />
                      <div className="abiHead">
                        <h3>{ability.displayName}</h3>
                        <p>{ability.description}</p>
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

export default AgentDetails;
