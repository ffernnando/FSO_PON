
const AddForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {
  const addName = (event) => {
    event.preventDefault();
    if (newName === '' || newNumber === '') {
      window.alert('Both the name and the number MUST be filled in!');
      return;
    }
    const newPerson = { name: newName, number: newNumber };
    persons.find(person => person.name === newPerson.name)
      ? window.alert(`${newPerson.name} is already added to the phonebook!`)
      : setPersons(persons.concat(newPerson));
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