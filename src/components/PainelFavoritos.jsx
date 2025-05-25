import React from 'react';
import './PainelFavoritos.css';

const PainelFavoritos = ({ favoritos, onRemoverFavorito }) => {
  return (
    <section className="favoritos-panel">
      <div className="panel-header">
        <h2>⭐ Jogadores Favoritos</h2>
        <span className="badge">{favoritos.length}</span>
      </div>

      {favoritos.length === 0 ? (
        <div className="empty-state">
          <img src="/empty-favorites.svg" alt="Lista vazia" />
          <p>Nenhum jogador favoritado ainda</p>
        </div>
      ) : (
        <div className="favoritos-grid">
          {favoritos.map((atleta) => (
            <div key={atleta.player.id} className="favorito-card">
              <img 
                src={atleta.player.photo} 
                alt={atleta.player.name}
                onError={(e) => e.target.src = '/player-placeholder.png'}
              />
              <div className="favorito-info">
                <h3>{atleta.player.name}</h3>
                <p>{atleta.statistics[0]?.team?.name || 'Sem time'}</p>
              </div>
              <button 
                onClick={() => onRemoverFavorito(atleta.player.id)}
                className="remove-btn"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PainelFavoritos;