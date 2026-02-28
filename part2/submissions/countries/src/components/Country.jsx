import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'

const Country = ({ country }) => {
  const api_key = import.meta.env.VITE_SOME_KEY;
  const [weather, setWeather] = useState(null);
  console.log('weather: ', weather);


  useEffect(() => {
    const req = axios
      .get(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${api_key}`)
      .then(response => setWeather(response.data))
      .catch(error => console.log(`Error fetching weather data: ${error}`));
  }, [country]);

  const { name, capital, area, languages, flags } = country;
  console.log('Country-props: ', country);
  console.log('flags: ', flags);

  Object.values
  return (
    <div>
      <h1>{name.official}</h1>
      <li>Capital {capital}</li>
      <li>Area {area}</li>
      <h2>Languages</h2>
      <ul>
        {
          Object.values(languages).map(language => <li key={language}>{language}</li>)
        }
      </ul>
      <img src={flags.png} />
      <h2>Weather in {capital}</h2>
      <li>Temperature </li>
      <img />
      <li>Wind </li>
    </div>
  )
}
export default Country;