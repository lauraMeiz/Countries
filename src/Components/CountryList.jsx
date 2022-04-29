import { useEffect, useState } from "react";
import Country from "./Country";

function CountryList() {
  const [countries, setCountries] = useState([]);

  // const [smaller, setSmaller] = useState("");
  // const [ocean, setOcean] = useState("");
  // const [filterH, setFilterH] = useState("");
  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };
  // console.log(filmai.id);

  // const show = (filmas) => {
  //   setChoice(filmas);
  //   setFilmai("");
  // };
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => res.json())

      .then((result) => {
        setCountries(result);
      })
      .catch((error) => console.log(error));
  }, []);

  const sortArea = () => {
    const countriesCopy = [...countries];
    countriesCopy.sort((a, b) => a.area - b.area);

    setCountries(countriesCopy);
  };

  // const handleInput = (e, d) => {
  //   switch (d) {
  //     case "EAN":
  //       setSmaller(e.target.value);
  //       break;
  //     case "name":
  //       setOcean(e.target.value);
  //       break;

  //     default:
  //   }
  // };

  return (
    <>
      {/* <div className="buttons">
        <button onClick={sortArea}>Acending</button>
        <button>Descending</button>
        <select value={filterH} onChange={(e) => handleInput(e, "smaller")}>
          <option value="smaller">
            That are smaller than Lithuania by area.
          </option>
          <option value="ocean">That are in “Oceania” region.</option>
        </select>
      </div> */}
      <div className="buttons">
        <button onClick={sortArea}>Acending</button>
        <button>Descending</button>
      </div>
      <Country className="one" countries={countries}></Country>
    </>
  );
}

export default CountryList;
