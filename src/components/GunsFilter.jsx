import React from "react";

const GunsFilter = ({ guns, arr, setArr }) => {
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

  const categories = guns.map((x) => {
    return x.category.split("::")[1];
  });
  const cat = [...new Set(categories)];

  console.log(arr);
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

export default GunsFilter;
