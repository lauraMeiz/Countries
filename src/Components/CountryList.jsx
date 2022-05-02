import { useEffect, useState } from "react";
import Country from "./Country";

function CountryList() {
  const [countries, setCountries] = useState([]);

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

  const sortArea2 = () => {
    const countriesCopy = [...countries];
    countriesCopy.sort((a, b) => b.area - a.area);

    setCountries(countriesCopy);
  };

  const getSmaller = () => {
    const countriesCopy = [...countries];

    const filtered = countriesCopy.filter((a) => a.area < 65300);
    setCountries(filtered);
    console.log(filtered);
  };

  return (
    <>
      <div className="buttons">
        <button onClick={sortArea}>Acending</button>
        <button onClick={sortArea2}>Descending</button>
      </div>
      <button onClick={getSmaller}>Smaller than Lithuania</button>
      <Country className="one" countries={countries}></Country>
    </>
  );
}

export default CountryList;
