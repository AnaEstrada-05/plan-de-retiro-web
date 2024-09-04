import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/Footer/footer";
import LandingPage from "./pages/landingPage";
import PlanRetiroMain from "./pages/planDeRetiroMain/planDeRetiroMain";
import CalendlyWidget from "./components/Calendly"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/planderetiro" element={<PlanRetiroMain />} />
        <Route path="/agendar" element={<CalendlyWidget />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
