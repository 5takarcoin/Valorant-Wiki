import React from "react";
import AgentCards from "../components/AgentCards";

import { useState, useEffect } from "react";

const Agents = ({ lang, data }) => {
  return (
    <div className="App">
      <h1 className="text-center my-4">
        {" "}
        <span className="text-danger">VALORANT</span> Agents
      </h1>
      <AgentCards agents={data} />
    </div>
  );
};

export default Agents;
