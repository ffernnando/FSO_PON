import personServices from "../services/persons";
import { changeNotification } from "./Notification";

const Person = ({ id, name, number, persons, setPersons, setNotification }) => {
  
  const handleDeleteClick = () => {
    if (window.confirm(`Delete ${name}?`))
      { 
        personServices
          .remove(id)
          .then(deleted => {
            setPersons(persons.filter(p => p.id !== deleted.id));
            changeNotification(`Person ${deleted.name} successfully deleted!`, setNotification);
            
          })
          .catch(error => {
            console.log(`Getting error: ${error}`);
            setPersons(persons.filter(p => p.id !== id));
            changeNotification(`Error! Person is already deleted from the server!`, setNotification);
          });
    }
  }

  return (
    <li>
      {name} {number}
      <button onClick={handleDeleteClick}>delete</button>
    </li>
  )
  
};

export default Person;