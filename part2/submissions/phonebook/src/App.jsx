import { useState } from 'react'
import AddForm from './components/AddForm';
import SearchFilter from './components/SearchFilter';
import Numbers from './components/Numbers';
import { useEffect } from 'react';
import personServices from './services/persons'
import { Notification } from './components/Notification';


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setNewFilter] = useState('');
  const [filteredPersons, setNewFilteredPersons] = useState([]);
  const [notification, setNotification] = useState('');
  console.log('notification: ', notification);
  useEffect(() => {
    personServices
      .getAll()
      .then(allPersons => {
        setPersons(allPersons);
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/>
      <SearchFilter filter={filter} setNewFilter={setNewFilter} persons={persons} setNewFilteredPersons={setNewFilteredPersons} />
      <AddForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} notification={notification} setNotification={setNotification}/>
      <Numbers filter={filter} filteredPersons={filteredPersons} persons={persons} setPersons={setPersons} setNotification={setNotification}/>
    </div>
  )
}

export default App