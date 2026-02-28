import personServices from "../services/persons";

const Person = ({ id, name, number, persons, setPersons }) => {
  
  const handleDeleteClick = () => {
    if (window.confirm(`Delete ${name}?`))
      { 
        personServices
          .remove(id)
          .then(deleted => {
            setPersons(persons.filter(p => p.id !== deleted.id));
          })
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