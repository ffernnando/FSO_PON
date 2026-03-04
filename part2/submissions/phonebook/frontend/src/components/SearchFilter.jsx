
const SearchFilter = ({ filter, setNewFilter, persons, setNewFilteredPersons }) => {
  const handleFilterChange = (event) => {
    const newFilterVal = event.target.value;
    setNewFilter(newFilterVal);
    const filtered = persons.filter(person => person.name.toLowerCase().includes(newFilterVal.toLowerCase()));
    setNewFilteredPersons(filtered);
  }
  return(
    <div>
      filter shown with <input value={filter} onChange={handleFilterChange}/>
    </div>
  )
}

export default SearchFilter;