import React from "react";

const AgentFilter = ({ agents, arr, setArr }) => {
  const handleCheckboxChange = (event) => {
    const v = event.target.labels[0].textContent;
    const b = event.target.checked;

    if (b) setArr([...arr, v]);
    else {
      const array = [...arr];
      const index = array.indexOf(v);
      if (index !== -1) array.splice(index, 1);
      setArr([...array]);
    }
  };

  const categories = agents
    .filter((y) => y.isPlayableCharacter)
    .map((x) => x.role.displayName);
  const cat = [...new Set(categories)];

  //   console.log(arr);
  return (
    <>
      <h3>Filter</h3>
      <div className="col-lg-2 col-12 listGun">
        {cat.map((c) => (
          <div key={c}>
            <label>
              <input
                className="moron"
                type="checkbox"
                onChange={handleCheckboxChange}
              />
              {c}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default AgentFilter;
