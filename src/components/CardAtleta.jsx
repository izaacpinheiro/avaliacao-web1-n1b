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

      <h5>Camisa {atleta.leagues.standard.jersey}</h5>
      <h5>Nacionalidade: {atleta.birth.country}</h5>
      <h5>Time: {atleta.team.name}</h5>

      <br />
      <button onClick={() => onFavoritar(atleta)}>Adicionar aos favoritos</button>
    </div>
  );
}

export default CardAtleta;