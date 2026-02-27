import { useState } from 'react'
import AddForm from './components/AddForm';
import SearchFilter from './components/SearchFilter';
import Numbers from './components/Numbers';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setNewFilter] = useState('');
  const [filteredPersons, setNewFilteredPersons] = useState([]);

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