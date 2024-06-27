import "./hero.css";
import { Link } from "react-router-dom";
import coins from "../../assets/coins.png";
import candado from "../../assets/candado.png";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";

function Hero() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="hero" style={{ backgroundColor: "white" }}>
      <h1>
        Tu <span style={{ color: "#426FFE" }}>futuro</span> financiero en buenas
        manos
      </h1>
      <p>
        Encuentra información sobre los diferentes tipos de seguros, planes de
        retiro y de ahorro disponibles en México que te ayudarán a tomar{" "}
        <span style={{ color: "#426FFE" }}>
          las mejores decisiones financieras
        </span>{" "}
        para tu futuro.
      </p>
      <div className="tarjetas">
        <div className="tarjeta">
          <Link to="/planderetiro" onClick={scrollToTop} className="no-underline">
            <div className="textoTarjeta">
              <img
                src={candado}
                alt="imgPlanDeRetiro"
                className="imgTarjeta"
              ></img>
              <br></br>
              Plan de Retiro{" "}
            </div>
          </Link>
        </div>
        <div className="tarjeta">
          <Link to="/plandeahorro" onClick={scrollToTop} className="no-underline">
            <div className="textoTarjeta">
              <img
                src={coins}
                alt="imgPlanDeAhorro"
                className="imgTarjeta"
              ></img>
              <br></br>
              Plan de Ahorro{" "}
            </div>
          </Link>
        </div>
        <div className="tarjeta">
          <Link to="/gmm" onClick={scrollToTop} className="no-underline">
            <div className="textoTarjeta">
              <img
                src="https://ouch-cdn2.icons8.com/RKnbDgXTvjJcu-XGEOxaW3jEGr5apYwQFNUHkloREQk/rs:fit:368:390/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTUx/L2NhOWU3OGI0LWU5/N2ItNDUzNS1iMDFi/LTQyMWQ0N2UwMjEy/MS5wbmc.png"
                alt="Logo"
                className="imgTarjeta"
              ></img>
              <br></br>
              GMM{" "}
            </div>
          </Link>
        </div>
      </div>
      <img src={hero1} alt="Logo" className="imagen1"></img>
      <img src={hero2} alt="Logo" className="imagen2"></img>
    </div>
  );
}

export default Hero;
