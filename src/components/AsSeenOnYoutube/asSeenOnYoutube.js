import "./asSeenOnYoutube.css";
import { Link } from "react-router-dom";
import logoInstagram from "../../assets/instagramLogo.svg";
import logoTiktok from "../../assets/tiktokLogo.svg";
import logoYoutube from "../../assets/youtubeLogo.svg";
import david from "../../assets/david.png";

function AsSeenOnYoutube() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="asSeenOnYoutube" style={{ backgroundColor: "white" }}>
      <div className="imagDavid">
        <img
          id="davidImagen"
          src={david}
          alt="davidImagen"
        ></img>
      </div>
      <div className="infoDavid">
        <p className="lightText">Como lo viste en Youtube</p>
        <h2>
          Carlos Estrada <br />
          <span style={{ color: "#426FFE" }}>Libertad Financiera</span>{" "}
        </h2>
        <p>
          Aprendamos juntos sobre finanzas personales e inversiones. Al aplicar
          lo que verás en mis videos estarás cada vez más cerca de la{" "}
          <span style={{ color: "#426FFE" }}>libertad financiera.</span>{" "}
        </p>
        <Link
          to="/agendar"
          onClick={scrollToTop}
          className="agendar"
          id="asSeenAgendar"
        >
          Agenda una asesoría personalizada
        </Link>
        <p>Encuéntralo en sus redes sociales</p>
        <div className="socialMedia">
          <a href="https://www.youtube.com/@carlosefin" target="_blank">
            <img
              className="logoSocialMedia"
              src={logoYoutube}
              alt="youtube"
            ></img>
          </a>
          <a href="https://www.tiktok.com/@carlosefin" target="_blank">
            <img
              className="logoSocialMedia"
              src={logoTiktok}
              alt="tiktok"
            ></img>
          </a>
          <a href="https://www.instagram.com/carlosefin/" target="_blank">
            <img
              className="logoSocialMedia"
              src={logoInstagram}
              alt="instagram"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AsSeenOnYoutube;
