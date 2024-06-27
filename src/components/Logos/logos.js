import React, { useState } from "react";
import "./logos.css";
import allianz from "../../assets/allianz.png";
import prudential from "../../assets/prudential.png";
import segurosMonterrey from "../../assets/segurosMonterrey.png";

function Logos() {
  const [selectedLogo, setSelectedLogo] = useState(null);

  const handleLogoClick = (logo) => {
    setSelectedLogo(logo);
  };

  return (
    <div className="logos">
      <div>
        <a
          href="/segurosmonterrey"
          onClick={() => handleLogoClick("segurosMonterrey")}
        >
          <img
            id="logoSM"
            src={segurosMonterrey}
            alt="segurosMonterrey"
            className={selectedLogo === "segurosMonterrey" ? "darken" : ""}
          />
        </a>
      </div>
      <div>
        <a href="/prudential" onClick={() => handleLogoClick("prudential")}>
          <img
            id="logoPru"
            src={prudential}
            alt="prudential"
            className={selectedLogo === "prudential" ? "darken" : ""}
          />
        </a>
      </div>
      <div>
        <a href="/allianz" onClick={() => handleLogoClick("allianz")}>
          <img
            id="logoAll"
            src={allianz}
            alt="allianz"
            className={selectedLogo === "allianz" ? "darken" : ""}
          />
        </a>
      </div>
    </div>
  );
}

export default Logos;
