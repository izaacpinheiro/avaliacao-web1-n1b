import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react';

import CardAtleta from './components/CardAtleta';
import PainelFavoritos from './components/PainelFavoritos';
import BarraPesquisa from './components/BarraPesquisa';

function App() {
  
  const [atletas, setAtletas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const adicionarAosFavoritos = (atleta) => {
    if (!favoritos.find(f => f.id === atleta.id)) {
      setFavoritos([...favoritos, atleta]);
    }
  };

  return (
    <div className="app">
      <h1>Busca de Atletas da NBA</h1>
      <BarraPesquisa onSearch={setAtletas} />
      
      <div className="players-grid">
        {atletas.map((atleta) => (
          <CardAtleta
            atleta={atleta}
            onFavoritar={adicionarAosFavoritos}
          />
        ))}
      </div>

      <PainelFavoritos favoritos={favoritos} />
    </div>
  );
}

export default App;
