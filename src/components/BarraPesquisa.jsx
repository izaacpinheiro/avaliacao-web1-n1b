import React, { useState } from 'react';
import { buscarAtletas } from '../api';
import './BarraPesquisa.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError('Digite um nome para buscar');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const players = await buscarAtletas(searchTerm);
      console.log("Resposta da API:", players);
      if (players.length === 0) {
        setError('Nenhum atleta encontrado');
      }
      onSearch(players);
    } catch (err) {
      console.error("Erro na busca:", err);
      setError('Erro ao buscar atletas. Tente novamente.');
      onSearch([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Digite um jogador de futebol"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
        <button 
          onClick={handleSearch}
          disabled={loading || !searchTerm.trim()}
        >
          {loading ? (
            <>
              <span className="spinner"></span> Buscando...
            </>
          ) : 'Buscar'}
        </button>
      </div>
      
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SearchBar;