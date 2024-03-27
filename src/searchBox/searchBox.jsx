
const SearchBox = ({filter, setFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
    </div>
  )
}

export default SearchBox
