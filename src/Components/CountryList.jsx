import { useEffect, useState } from "react";
import Country from "./Country";

function CountryList() {
  const [countries, setCountries] = useState([]);
  // const [smaller, setSmaller] = useState("");
  const [filteredCountry, setFilteredCountry] = useState([]);

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

    countriesCopy.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    setCountries(countriesCopy);
  };

  const sortArea2 = () => {
    const countriesCopy = [...countries];
    countriesCopy.sort(function (a, b) {
      if (b.name < a.name) {
        return -1;
      }
      if (b.name > a.name) {
        return 1;
      }
      return 0;
    });
    setCountries(countriesCopy);
  };

  const handleInput = (e) => {
    switch (e.target.value) {
      case "smaller":
        const countriesCo = [...countries];
        console.log(countriesCo);
        const filter = countriesCo.filter((a) => a.area < 65300);
        console.log(filter);
        setFilteredCountry(filter);

        break;
      case "oceania":
        const countriesCopy = [...countries];
        const filtered = countriesCopy.filter((a) => a.region === "Oceania");

        // setOceania(e.target.value);
        setFilteredCountry(filtered);
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
        </select>
        {/* <button>Reset</button> */}
      </div>
      <Country
        countries={filteredCountry.length > 0 ? filteredCountry : countries}
      ></Country>
    </>
  );
}

export default CountryList;
