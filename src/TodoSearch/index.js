import React from 'react';
import './TodoSearch.css';

function TodoSearch({setSearchValue,searchValue, loading}) {

  return (
    <input
      placeholder="Buscar..."
      className="TodoSearch"
      value={searchValue}
      onChange={
        (event) => {
          setSearchValue(event.target.value) 
      }}
      disabled={loading}
    />
  );
}

export { TodoSearch };