import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_HOST = 'api-football-v1.p.rapidapi.com';

const api = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v3',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST
  }
});

export const buscarAtletas = async (nome) => {
  try {
    const response = await api.get('/players', {
      params: {
        search: nome,
        season: '2023'
      }
    });
    console.log("Resposta completa:", response.data);
    return response.data.response || [];
  } catch (error) {
    console.error("Detalhes do erro:", {
      status: error.response?.status,
      data: error.response?.data
    });
    return [];
  }
};