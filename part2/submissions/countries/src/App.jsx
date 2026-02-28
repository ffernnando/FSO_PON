import { useEffect } from "react";
import { useState } from "react"
import Country from "./components/Country";
import axios from 'axios';
import CountryTab from "./components/CountryTab";

function App() {
  const [search, setSearch] = useState('');
  const [allCountries, setAllCountries] = useState([]);
  const [searchedCountries, setSearchedCountries] = useState([]);
  const [foundCountry, setFoundCountry] = useState(null);


  const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api';
  useEffect(() => {
    const all = axios
      .get(`${baseUrl}/all`)
      .then(response => setAllCountries(response.data));
    console.log(allCountries);
  }, [])

  const handleSearchChange = (event) => {
    console.log('Search: ', event.target.value);
    setSearch(event.target.value);
    const filtered = allCountries.filter(country => {
      return (country.name.common.toLowerCase().includes(event.target.value.toLowerCase()));
    })
    console.log('filtered: ', filtered);
    setSearchedCountries(filtered);
  }

  

  const searchArea = <div>
    find countries <input value={search} onChange={handleSearchChange}/>
  </div>;

  if (searchedCountries.length === 0) {
    return (<div>
      {searchArea}
    </div>);
  }
  if (searchedCountries.length > 10 ){
    return (
      <div>
        {searchArea}
        <div>Too many matches, specify another filter</div>
      </div>
    );
  } else if (searchedCountries.length > 1) {
    const countryList = searchedCountries.map(sc => <CountryTab key={sc.name.common} country={sc} />);
    return (
      <div>
        {searchArea}
        {countryList}  
      </div>
    );
  } else {
    const found = searchedCountries[0];
    return (
      <div>
        {searchArea}
        <Country country={found}/>
      </div>
    )
  }
}

export default App
