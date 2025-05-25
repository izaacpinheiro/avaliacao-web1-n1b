import React, { useState } from 'react';
import './App.css';
import CardAtleta from './components/CardAtleta';
import PainelFavoritos from './components/PainelFavoritos';
import SearchBar from './components/BarraPesquisa';

function App() {
  const [atletas, setAtletas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const adicionarAosFavoritos = (atleta) => {
    if (!favoritos.some(f => f.player.id === atleta.player.id)) {
      setFavoritos([...favoritos, atleta]);
    }
  };

  const removerFavorito = (id) => {
    setFavoritos(favoritos.filter(f => f.player.id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Jogadores Profissionais de Futebol</h1>
      </header>

      <main className="app-main">
        <section className="search-section">
          <SearchBar onSearch={setAtletas} setCarregando={setCarregando} />
          {carregando && <div className="loading-spinner"></div>}
        </section>

        <section className="results-section">
          <h2 className="section-title">Resultados da Busca</h2>
          <div className="cards-grid">
            {atletas.map((atleta) => (
              <CardAtleta
                key={atleta.player.id}
                atleta={atleta}
                onFavoritar={adicionarAosFavoritos}
                isFavorito={favoritos.some(f => f.player.id === atleta.player.id)}
              />
            ))}
          </div>
        </section>

        <PainelFavoritos 
          favoritos={favoritos} 
          onRemoverFavorito={removerFavorito}
        />
      </main>

      <footer className="app-footer">
        <p>Dados via API-Football</p>
      </footer>
    </div>
  );
}

export default App;