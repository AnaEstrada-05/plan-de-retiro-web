import React from 'react';
import './asesores.css';
import AsesorCard from './asesoresCard';

function Asesores() {
  const asesores = [
    {
      nombre: "Asesor 1",
      descripcion: "Descripción aquí",
      imagen:
        "https://cdn.icon-icons.com/icons2/884/PNG/512/person_4_icon-icons.com_68900.png",
    },
    {
      nombre: "Asesor 2",
      descripcion: "Descripción aquí",
      imagen:
        "https://cdn.icon-icons.com/icons2/884/PNG/512/person_4_icon-icons.com_68900.png",
    },
  ];

  return (
    <div>
      <h1 className="tituloAsesores">
        Te acompañamos en <span style={{ color: "#426FFE" }}>cada paso.</span>{" "}
      </h1>
      <p
        style={{
          fontSize: "1.9w",
          width: "77vw",
          marginLeft: "12vw",
          marginRight: "12vw",
          textAlign: "center",
          fontSize: "1.8vw",
        }}
      >
        Nuestros asesores tienen amplia experiencia en el sector financiero y te
        ayudarán a entender tus necesidades y objetivos, para encontrar el
        producto que{" "}
        <span style={{ color: "#426FFE" }}>mejor se adapte a ti.</span>{" "}
      </p>
      <div className="asesores">
        {asesores.map((asesor, index) => (
          <AsesorCard key={index} asesor={asesor} />
        ))}
      </div>
    </div>
  );
}

export default Asesores;
