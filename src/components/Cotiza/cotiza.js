import { Link } from "react-router-dom";
import "./cotiza.css";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";

function Cotiza() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="cotiza">
        <h1>Cotiza tu plan</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          massa ex. Nulla dapibus, metus ut ullamcorper auctor, ex arcu
          pellentesque enim, a tempus lacus arcu in lorem.
        </p>
        <Link to="/agendar" onClick={scrollToTop} className="empezar">
          Agenda una asesoría
        </Link>
      </div>
    <img className="img1" src={hero1} alt="cotiza" />
    <img className="img2" src={hero2} alt="cotiza" />
    </div>
  );
}

export default Cotiza;
