import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./components/Accueil";
import Panier from "./components/Panier";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Details from "./components/Details";
import Connexion from "./components/Connexion";
import Inscription from "./components/Inscription";
import { useState , useEffect} from "react";

function App() {
  
  const savedPanier = localStorage.getItem('panier')
  const [panier, setPanier] = useState(
    savedPanier ? JSON.parse(savedPanier) : []
  )
  useEffect(() => {
    localStorage.setItem('panier', JSON.stringify(panier))
  }, [panier])

  return (
    <Router>
      <Header panier={panier} />
      <Routes>
        <Route path="/" element={<Accueil setPanier={setPanier} panier={panier}/>} />
        <Route path="/panier" element={<Panier panier={panier} setPanier={setPanier}/>} />
        <Route path="/details/:id" element={<Details panier={panier} setPanier={setPanier}/>} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
