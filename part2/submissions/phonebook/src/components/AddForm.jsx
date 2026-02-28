import personServices from "../services/persons";

const AddForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {
  const addName = (event) => {
    event.preventDefault();
    if (newName === '' || newNumber === '') {
      window.alert('Both the name and the number MUST be filled in!');
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
          })
          .catch(() => alert(`The person you are trying to update is already deleted from the server!`));
      }
    } else {
      personServices
        .create(newPerson)
        .then(addedPerson => setPersons(persons.concat(addedPerson)))
        .catch(error => console.log(error));
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