import Hero from "../components/Hero/hero";
import Productos from "../components/Productos/productos";
import Logos from "../components/Logos/logos";
import Beneficios from "../components/Beneficios/beneficios";
import AsSeenOnYoutube from "../components/AsSeenOnYoutube/asSeenOnYoutube";
import Asesores from "../components/Asesores/asesores";
import Cotiza from "../components/Cotiza/cotiza";


function LandingPage() {
  return (
    <div>
      <Hero />
      <Productos />
      <Logos />
      <Beneficios />
      <AsSeenOnYoutube />
      <Asesores />
      <Cotiza />
    </div>
  );
}

export default LandingPage;
