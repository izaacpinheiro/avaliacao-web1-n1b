import React from 'react';
import './CardAtleta.css';

function CardAtleta({ atleta, onFavoritar }) {
  // Objeto seguro com fallbacks para todas as propriedades
  const safeAtleta = {
    firstname: atleta?.firstname || 'Desconhecido',
    lastname: atleta?.lastname || 'Desconhecido',
    id: atleta?.id || '000',
    leagues: {
      standard: {
        jersey: atleta?.leagues?.standard?.jersey || '00'
      }
    },
    birth: {
      country: atleta?.birth?.country || 'Não informado'
    },
    weight: {
      kilograms: atleta?.weight?.kilograms || '--'
    }
  };

  return (
    <div className="card-atleta">
      <h3>{safeAtleta.firstname} {safeAtleta.lastname}</h3>

      <img
        src={`https://cdn.nba.com/headshots/nba/latest/260x190/${safeAtleta.id}.png`}
        alt={`${safeAtleta.firstname} ${safeAtleta.lastname}`}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/260x190?text=Sem+Imagem';
        }}
        className="atleta-photo"
      />

      <br />
      <h3>Camisa: {safeAtleta.leagues.standard.jersey}</h3>
      <h3>Nacionalidade: {safeAtleta.birth.country}</h3>
      <h3>Peso(kg): {safeAtleta.weight.kilograms}</h3>
      <button onClick={() => onFavoritar(atleta)}>★ Adicionar aos Favoritos</button>
    </div>
  );
}

export default CardAtleta;