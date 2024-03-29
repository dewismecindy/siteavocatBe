import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Pages
import Home from "./components/Home";
import HomeEnglish from "./pages/HomeEnglish";
import HomeNerland from "./pages/HomeNerland";
import HomeArabe from "./pages/HomeArabe";
import Header from "./pages/Header";
import HeaderEnglish from "./components/HeaderEnglish";
import HeaderNerland from "./components/HeaderNerland";
import HeaderArabe from "./components/HeaderArabe";
import Cabinet from "./pages/Cabinet";
import CabinetEnglish from "./pages/CabinetEnglish";
import CabinetNerland from "./pages/CabinetNerland";
import CabinetArabe from "./pages/CabinetArabe";
import Actualites from "./pages/Actualites";
import ActualitesEnglish from "./pages/ActualitesEnglish";
import ActualitesNerland from "./pages/ActualitesNerland";
import ActualitesArabe from "./pages/ActualitesArabe";
import Expertise from "./pages/Expertise";
import ExpertiseEnglish from "./pages/ExpertiseEnglish";
import ExpertiseNerland from "./pages/ExpertiseNerland";
import ExpertiseArabe from "./pages/ExpertiseArabe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeEnglish" element={<HomeEnglish />} />
        <Route path="/HomeNerland" element={<HomeNerland />} />
        <Route path="/HomeArabe" element={<HomeArabe />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/HeaderEnglish" element={<HeaderEnglish />} />
        <Route path="/HeaderNerland" element={<HeaderNerland />} />
        <Route path="/HeaderArabe" element={<HeaderArabe />} />
        <Route path="/Cabinet" element={<Cabinet />} />
        <Route path="/CabinetEnglish" element={<CabinetEnglish />} />
        <Route path="/CabinetNerland" element={<CabinetNerland />} />
        <Route path="/CabinetArabe" element={<CabinetArabe />} />
        <Route path="/Actualites" element={<Actualites />} />
        <Route path="/ActualitesEnglish" element={<ActualitesEnglish />} />
        <Route path="/ActualitesNerland" element={<ActualitesNerland />} />
        <Route path="/ActualitesArabe" element={<ActualitesArabe />} />
        <Route path="/Expertise" element={<Expertise />} />
        <Route path="/ExpertiseEnglish" element={<ExpertiseEnglish />} />
        <Route path="/ExpertiseNerland" element={<ExpertiseNerland />} />
        <Route path="/ExpertiseArabe" element={<ExpertiseArabe />} />
      </Routes>
    </Router>
  );
}

export default App;
