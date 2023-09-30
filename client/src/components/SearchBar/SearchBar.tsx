import './SearchBar.style.scss';
import { useState } from "react";

interface Props {
  searchTerm : string;
}

function SearchBar ({ searchTerm }: Props) {
  const [search, setSearch] = useState('');

  return (
    <div className="search-bar">
      <input 
        className="search-bar__input"
        placeholder= {searchTerm}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /> 
    </div>
  )
}

export default SearchBar;