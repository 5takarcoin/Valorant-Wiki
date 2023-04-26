import React, { useEffect, useState } from "react";
import WeaponCard from "../components/WeaponCard";
import GunsFilter from "../components/GunsFilter";

const Weapons = ({ data, setData }) => {
  const [arr, setArr] = useState([]);

  // const [data, setData] = useState([]);
  let end = "weapons";
  let api = `https://valorant-api.com/v1/${end}`;
  useEffect(() => {
    (async () => {
      const d = await fetch(api).then((res) => res.json());
      setData(d.data);
      console.log(data);
    })();
  }, [api]);
  return (
    <div className="col-lg-10 col-12 row m-auto">
      <h1 className="text-center my-4">
        {" "}
        <span className="text-danger">VALORANT</span> Weapons
      </h1>
      <GunsFilter guns={data} arr={arr} setArr={setArr} />
      <div className="gridgun row col-lg-10 col-12">
        {data
          .filter((x) => {
            if (arr.length === 0) return true;
            return arr.includes(x.category.split("::")[1]);
          })
          .map((m) => (
            <WeaponCard key={m.uuid} gun={m} />
          ))}
      </div>
    </div>
  );
};

export default Weapons;
