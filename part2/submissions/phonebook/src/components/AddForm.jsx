import personServices from "../services/persons";
import { changeNotification } from './Notification';


const AddForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, setNotification}) => {

  const addName = (event) => {
    event.preventDefault();
    if (newName === '' || newNumber === '') {
      changeNotification('Both the name and the number MUST be filled in!', setNotification);
      return;
    }

    const newPerson = { name: newName, number: newNumber };
    const foundPerson = persons.find(person => person.name === newPerson.name);

    if (foundPerson) {
      if (window.confirm(`${newPerson.name} is already added to the phonebook, replace the old number with a new one?`)) {
        personServices
          .update(foundPerson.id, newPerson)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson));
            changeNotification(`Phone number of ${updatedPerson.name} successfully changed to ${newPerson.number}`, setNotification);
          })
          .catch(() => changeNotification('The person you are trying to update is already deleted from the server!', setNotification));
      }
    } else {
      personServices
        .create(newPerson)
        .then(addedPerson => {
          setPersons(persons.concat(addedPerson));
          changeNotification(`Added ${addedPerson.name}`, setNotification);
        })
        .catch(error => {
          console.log(error);
          changeNotification(`Error: ${error}`, setNotification);
        });
    }
    setNewName('');
    setNewNumber('');
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }
  return (
    <div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default AddForm;