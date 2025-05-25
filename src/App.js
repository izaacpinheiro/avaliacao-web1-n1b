import './App.css';
import React, { useState, useEffect} from 'react';

import CardAtleta from './components/CardAtleta';
import PainelFavoritos from './components/PainelFavoritos';
import SearchBar from './components/BarraPesquisa';

function App() {

  const [atletas, setAtletas] = useState([]);
  const [favoritos, setFevaritos] = useState([]);

  const adicionarAosFavoritos = (atleta) => {
    if (!favoritos.find(f => f.id === atleta.id)) {
      setFevaritos([...favoritos, atleta]);
    }
  };

  return (
    <div className='app'>
      <h1>Busca de Atletas da NBA</h1>
      <SearchBar onSearch={setAtletas}/>

      <div className='player-grid'>
        {atletas.map((atleta) => (
          <CardAtleta
            atleta={atleta}
            onFavoritar={adicionarAosFavoritos}
          />
        ))}
      </div>

        <PainelFavoritos favoritos={favoritos}/>
    </div>
  );
}

export default App;