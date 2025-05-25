import React from 'react';
import './CardAtleta.css';

function CardAtleta({ atleta, onFavoritar, isFavorito }) {

  const teamName = atleta.statistics[0]?.team?.name || 'Sem time';
  const jerseyNumber = atleta.statistics[0]?.games?.number || 'N/A';

  return (
    <div className="card-atleta">
      <h3>{atleta.player.name}</h3>
      <img
        src={atleta.player.photo} 
        alt={atleta.player.name}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/150?text=Sem+Foto';
        }}
        className="atleta-photo"
      />
      <div className="atleta-info">
        <h5>Idade: {atleta.player.age}</h5>
        <h5>Time: {teamName}</h5>
        <h5>Camisa: {jerseyNumber}</h5>
        <h5>Posição: {atleta.player.position}</h5>
      </div>
      <button 
        onClick={() => onFavoritar(atleta)}
        className={`favorite-btn ${isFavorito ? 'favorited' : ''}`}
      >
        {isFavorito ? '★ Remover dos favoritos' : '☆ Adicionar aos favoritos'}
      </button>
    </div>
  );
}

export default CardAtleta;