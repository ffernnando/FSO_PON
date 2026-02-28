import { useState } from "react"
import Country from "./Country";

const CountryTab = ({ country }) => {
  const [shown, toggleShown] = useState(false);

  const handleClickShow = () => {
    toggleShown(!shown);
    console.log('toggling shown for ', country.name.common);
  }

  return (
    <div>
      <li>
        {country.name.common}
        <button onClick={handleClickShow}>{shown ? "hide" : "show"}</button>
        {
          shown && <Country country={country}/>
        }
      </li>
      
      
    </div>
  );
};

export default CountryTab;