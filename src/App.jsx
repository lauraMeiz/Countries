// import "./App.css";
import CountryList from "./Components/CountryList";
import "./crud.scss";

function App() {
  return (
    <div className="app">
      <div>
        <h1>Countries List</h1>
      </div>
      <CountryList></CountryList>
    </div>
  );
}

export default App;
