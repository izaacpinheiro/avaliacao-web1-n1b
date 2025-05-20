import './App.css';
import React, { useState} from 'react';
import axios from 'axios'
import PainelFavoritos from './components/PainelFavoritos';
// import CardAtleta from './components/CardAtleta';

function App() {
  const [busca, setBusca] = useState('');
  const [atletas, setAtletas] = useState([]);
  const [favoritos, setFevaritos] = useState([]);

  const buscarAtletas = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/players',
        params: {search: busca},
        headers: {
          'X-RapidAPI-Key' : 'CHAVE_API',
          'X-RapidAPI-Host' : 'api-nba-v1.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);
      setAtletas(response.data.response);
    } catch (error) {
      console.error("Erro ao busca atleta:", error);
    }
  };

  const adicionarAosFavoritos = (atleta) => {
    if (!favoritos.find(f => f.id === atleta.id)) {
      setFevaritos([...favoritos, atleta]);
    }
  };

  return (
    <div className='App'>
      <h1>Busca de Atletas</h1>
      <input
        type="text"
        placeholder='Digite o nome de um atleta'
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <button onClick={buscarAtletas}>Buscar</button>

      <div className='lista-atletas'>
        {atletas.map((atleta) => (
          <div key={atleta.id}>
            {/* <CardAtleta atleta={atleta} onFavoritar={adicionarAosFavoritos} /> */}
            <p>{atleta.firstname} {atleta.lastname}</p>
            <button onClick={() => adicionarAosFavoritos(atleta)}>Favoritar</button>
          </div>
        ))}
      </div>

       <hr />
      <h2>Favoritos</h2>
      {<PainelFavoritos favoritos={favoritos} />}
      <ul>
        {favoritos.map((fav) => (
          <li key={fav.id}>{fav.firstname} {fav.lastname}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
