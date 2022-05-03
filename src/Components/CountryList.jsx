import { useEffect, useState } from "react";
import Country from "./Country";

function CountryList() {
  const [countries, setCountries] = useState([]);
  // const [smaller, setSmaller] = useState("");
  const [filteredCountry, setFilteredCountry] = useState("");

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
    // countriesCopy.sort((a, b) => a.area - b.area);
    countriesCopy.sort();
    setCountries(countriesCopy);
  };

  const sortArea2 = () => {
    const countriesCopy = [...countries];
    // countriesCopy.sort((a, b) => b.area - a.area);
    countriesCopy.sort();
    countriesCopy.reverse();
    setCountries(countriesCopy);
  };

  // const getSmaller = () => {
  //   const countriesCopy = [...countries];
  //   console.log(countriesCopy);
  //   const filtered = countriesCopy.filter((a) => a.area < 65300);
  //   setCountries(filtered);
  //   console.log(filtered);
  // };

  // const getOceania = () => {
  //   const countriesCopy = [...countries];

  //   const filtered = countriesCopy.filter((a) => a.region === "Oceania");
  //   setCountries(filtered);
  // };
  const handleInput = (e) => {
    switch (e.target.value) {
      case "smaller":
        const countriesCo = [...countries];
        console.log(countriesCo);
        const filter = countriesCo.filter((a) => a.area < 65300);
        console.log(filter);
        setCountries(filter);

        break;
      case "oceania":
        const countriesCopy = [...countries];
        const filtered = countriesCopy.filter((a) => a.region === "Oceania");

        setCountries(filtered);
        // setOceania(e.target.value);
        break;

      default:
    }
  };
  return (
    <>
      <div className="buttons">
        <button onClick={sortArea}>Acending</button>
        <button onClick={sortArea2}>Descending</button>
        <select onChange={(e) => handleInput(e)}>
          <option value="oceania">That are in “Oceania” region</option>
          <option value="smaller">Smaller than Lithuania</option>
          {/* <option value="oceania">That are in “Oceania” region</option> */}
        </select>
        {/* <button onClick={getSmaller}>Smaller than Lithuania</button>
        <button onClick={getOceania}>That are in “Oceania” region</button> */}
      </div>
      <Country
        // oceania={oceania}
        // smaller={smaller}
        countries={countries}
      ></Country>
    </>
  );
}

export default CountryList;
