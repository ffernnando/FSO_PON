import Person from "./Person";

const Numbers = ({ filter, filteredPersons, persons, setPersons, setNotification }) => {
  console.log(persons);
  return (
    <div>
      <h2>Numbers</h2>
      {
        filter !== ''
          ? filteredPersons.map(person => <Person key={person.name} name={person.name} number={person.number} />)
          : persons.map(person => <Person key={person.id} id={person.id} name={person.name} number={person.number} persons={persons} setPersons={setPersons} setNotification={setNotification}/>)
      }    
    </div>
  )
}

export default Numbers;