import { useState } from "react";
import AgentFilter from "./AgentFilter";
import PlayerCard from "./PlayerCard";

const AgentCards = ({ agents }) => {
  const [arr, setArr] = useState([]);
  agents.sort((a, b) =>
    a.displayName.toLowerCase().localeCompare(b.displayName.toLowerCase())
  );
  return (
    <div className="col-lg-10 col-12 row m-auto">
      <AgentFilter agents={agents} arr={arr} setArr={setArr} />
      <div className="agentsagents col-lg-10 col-12 row">
        {agents
          .filter((x) => x.isPlayableCharacter)
          .filter((y) => {
            if (arr.length === 0) return true;
            return arr.includes(y.role.displayName);
          })
          .map((item) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={item.uuid}>
                <PlayerCard
                  name={item.displayName}
                  description={item.description}
                  image={item.displayIcon}
                  role={item.role.displayName}
                  roleIcon={item.role.displayIcon}
                  abilities={item.abilities}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AgentCards;
