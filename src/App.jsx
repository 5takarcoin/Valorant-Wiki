import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Weapons from "./pages/Weapons";
import Agents from "./pages/Agents";
import Maps from "./pages/Maps";
import { useState, useEffect } from "react";
import AgentDetails from "./pages/AgentDetails";
import MapDetails from "./pages/MapDetails";
import Copyright from "./components/Copyright";
import GunDetails from "./pages/GunDetails";

function App() {
  const [lang, setLang] = useState("en-US");
  const [gunsData, setGunsData] = useState([]);
  const [mapData, setMapData] = useState([]);
  const [data, setData] = useState([]);
  // const [dataEng, setDataEng] = useState([]);
  let end = "agents";
  let api = `https://valorant-api.com/v1/${end}?language=${lang}`;
  useEffect(() => {
    //   (async () => {
    //     const data = await fetch(api).then((res) => res.json());
    //     // data = await res.json();
    //     console.log(data);
    //   })();

    (async () => {
      const d = await fetch(api).then((res) => res.json());
      setData(d.data);
    })();
  }, [api]);
  return (
    <>
      {/* <h1>
        <span className="text-danger">VALORANT</span> WIKI
      </h1> */}
      <BrowserRouter>
        <Navbar lang={[lang, setLang]} />
        {/* <Language lang={[lang, setLang]} /> */}
        <div className="inside">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/agents"
              element={<Agents lang={lang} data={data} />}
            />
            <Route path="/agents/:id" element={<AgentDetails data={data} />} />
            <Route path="/maps/:id" element={<MapDetails data={mapData} />} />
            <Route
              path="/weapons/:id"
              element={<GunDetails data={gunsData} />}
            />
            <Route
              path="/weapons"
              element={<Weapons data={gunsData} setData={setGunsData} />}
            />
            <Route
              path="/maps"
              element={<Maps data={mapData} setData={setMapData} />}
            />
          </Routes>
        </div>
        <Copyright />
      </BrowserRouter>
    </>
  );
}

export default App;
