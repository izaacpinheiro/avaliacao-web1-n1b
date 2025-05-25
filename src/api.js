
const opt = {
    method: "GET",
    headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": 'api-football-v1.p.rapidapi.com',
    }
};

export const buscarAtletas = async (nome) => {
    try {
        const response = await fetch(
            `https://api-football-v1.p.rapidapi.com/v3/players/profiles?search=${nome}`, 
            opt
        );
        const data = await response.json();
        console.log("Response completa:", data);
        return data.response || [];
    } catch (error) {
        console.error("Detalhes do erro:", {
            status: error.response?.status,
            data: error.response?.data
        });
        return [];
    }
};