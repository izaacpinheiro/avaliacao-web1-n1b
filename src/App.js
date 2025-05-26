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
    <div className="app-container">
      <header className="app-header">
      <center><h1>Busca de Atletas da NBA</h1></center>
      </header>

      
      <section className="search-section">
      <center><BarraPesquisa onSearch={setAtletas} /></center>
      </section>


      <section className="results-section">
          <h2 className="section-title">Resultados da Busca</h2>
          <div className="cards-grid">
            {atletas.map((atleta) => (
              <CardAtleta
              key={atleta.id}
            atleta={atleta}
            onFavoritar={adicionarAosFavoritos}
          />
        ))}
          </div>
        </section>


      <PainelFavoritos favoritos={favoritos} />
    </div>
  );
}

export default App;
