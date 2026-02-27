import Person from "./Person";

const Numbers = ({ filter, filteredPersons, persons }) => {
  console.log(persons);
  return (
    <div>
      <h2>Numbers</h2>
      {
        filter !== ''
          ? filteredPersons.map(person => <Person key={person.name} name={person.name} number={person.number} />)
          : persons.map(person => <Person key={person.name} name={person.name} number={person.number} />)
      }    
    </div>
  )
}

export default Numbers;