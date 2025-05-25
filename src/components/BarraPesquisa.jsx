import React, { useState } from 'react';
import { buscarAtletas } from '../api';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const players = await buscarAtletas(searchTerm);
    onSearch(players);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Digite o nome de um atleta"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;