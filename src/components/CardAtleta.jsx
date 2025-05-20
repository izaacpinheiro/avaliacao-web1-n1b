import React from 'react';
import './CardAtleta.css';

function CardAtleta({ atleta, onFavoritar }) {
  return (
    <div className="card-atleta">
      <h3>{atleta.firstname} {atleta.lastname}</h3>

      <img
        src={`https://nba-players.herokuapp.com/players/${atleta.lastname}/${atleta.firstname}`}
        alt={`${atleta.firstname} ${atleta.lastname}`}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/150?text=Sem+Foto';
        }}
      />

      <br />
      <button onClick={() => onFavoritar(atleta)}>Adicionar aos favoritos</button>
    </div>
  );
}

export default CardAtleta;
