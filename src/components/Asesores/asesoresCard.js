import React from 'react';
import './asesores.css';

const AsesorCard = ({ asesor }) => {
  return (
    <div className="infoAsesor">
      <div>
        <img className="fotoAsesor" src={asesor.imagen} alt={asesor.nombre} />
      </div>
      <div className='textoAsesor'>
        <h3>{asesor.nombre}</h3>
        <p>{asesor.descripcion}</p>
      </div>
      <button className="empezar">Empezar</button>
    </div>
  );
};

export default AsesorCard;
