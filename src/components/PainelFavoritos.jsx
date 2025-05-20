import React from "react";

function PainelFavoritos({ favoritos }) {
    if (favoritos.length === 0)  {
        return <p>Nenhum atleta favoritado</p>
    }

    return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '20px' }}>
      <h3>Atletas Favoritos</h3>
      <ul>
        {favoritos.map((a) => (
          <li key={a.id}>
            {a.firstname} {a.lastname}
          </li>
        ))}
      </ul>
    </div>
    )
}

export default PainelFavoritos;