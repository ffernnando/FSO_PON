import { useState } from 'react'
import AddForm from './components/AddForm';
import SearchFilter from './components/SearchFilter';
import Numbers from './components/Numbers';
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setNewFilter] = useState('');
  const [filteredPersons, setNewFilteredPersons] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filter={filter} setNewFilter={setNewFilter} persons={persons} setNewFilteredPersons={setNewFilteredPersons} />
      <AddForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
      <Numbers filter={filter} filteredPersons={filteredPersons} persons={persons} />
    </div>
  )
}

export default App