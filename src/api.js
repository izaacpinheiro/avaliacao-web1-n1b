import axios from 'axios';

const CHAVE_API = process.env.REACT_APP_CHAVE_API
const HOST_API = process.env.REACT_APP_HOST_API

export const buscarAtletas = async (busca) => {
    
    
      const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/players',
        params: {
          search: busca,
          
        },
        headers: {
          'x-rapidapi-key' : CHAVE_API,
          'x-rapidapi-host' : HOST_API,
        },
      };
    try {
      //console.log(CHAVE_API)
      const response = await axios.request(options);
      return response.data.response;
    } catch (error) {
      console.error("Erro ao buscar atleta:", error);
      return [];
    }
    
  };