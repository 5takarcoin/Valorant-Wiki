import React, { useEffect, useState } from "react";
import MapCard from "../components/MapCard";

const Maps = ({ data, setData }) => {
  // const [data, setData] = useState([]);
  let end = "maps";
  let api = `https://valorant-api.com/v1/${end}`;
  useEffect(() => {
    (async () => {
      const d = await fetch(api).then((res) => res.json());
      setData(d.data);
      console.log(data);
    })();
  }, [api]);
  return (
    <div className="mapsmaps col-10 row m-auto">
      <h1 className="text-center my-4">
        {" "}
        <span className="text-danger">VALORANT</span> Maps
      </h1>
      {data.map((m) => (
        <MapCard key={m.uuid} map={m} />
      ))}
    </div>
  );
};

export default Maps;
