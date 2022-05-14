import { useEffect, useState } from "react";
import Country from "./Country";
import Pagination from "./Pagination";

// import getNewId from "../Common/id";

function CountryList({ pages }) {
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(17);
  const [currentButton, setCurrentButton] = useState(1);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => res.json())

      .then((result) => {
        setCountries(result);
      })
      .catch((error) => console.log(error));
  }, []);

  // const renderPageNumbers = pages.map((number, index) => {
  //   return (
  //     <li key={number} number={index} onClick={handleClick}>
  //       {number}
  //     </li>
  //   );
  // });

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
      case "all":
        setFilteredCountry([]);
        break;

      default:
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCountry.length
    ? filteredCountry.slice(indexOfFirstItem, indexOfLastItem)
    : countries.slice(indexOfFirstItem, indexOfLastItem);
  //change page

  const paginate = (pages) => setCurrentPage(pages);

  return (
    <>
      <select onChange={(e) => handleInput(e)}>
        <option value="oceania">That are in “Oceania” region</option>
        <option value="smaller">Smaller than Lithuania</option>
        <option value="all">All countries</option>
      </select>
      <div className="buttons">
        <button onClick={sortArea}>A-Z</button>
        <button onClick={sortArea2}>Z-A</button>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={
          filteredCountry.length ? filteredCountry.length : countries.length
        }
        paginate={paginate}
        currentButton={currentButton}
      ></Pagination>
      <Country countries={currentItems}></Country>
      {/* <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={countries.length}
        paginate={paginate}
      ></Pagination> */}
    </>
  );
}

export default CountryList;
