import React from "react";
import { produits } from "../data/produit";
import BadgeProduit from "./BadgeProduit";
import { useState } from 'react';



function Accueil({ panier, setPanier }) {
  const [filters, setFilters] = useState({
    nom: '',
    cat: 'Tout',
    prixmin: '',
    prixmax: '',
  })

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters({ ...filters, [name]: value })
  }

  const filteredProduits = produits.filter((produit) => {
    const nomMatch = produit.nom
      .toLowerCase()
      .includes(filters.nom.toLowerCase())
    const catMatch = filters.cat === 'Tout' || produit.categorie === filters.cat
    const prixMinMatch =
      filters.prixmin === '' || produit.prix >= parseFloat(filters.prixmin)
    const prixMaxMatch =
      filters.prixmax === '' || produit.prix <= parseFloat(filters.prixmax)
    return nomMatch && catMatch && prixMinMatch && prixMaxMatch
  })

  return (
    <main>
      <section id="produits">
        <div id="produits-liste">
          {filteredProduits.map((produit) => (
            <BadgeProduit
              produit={produit}
              panier={panier}
              setPanier={setPanier}
            />
          ))}
        </div>
        <div id="produits-boutons">
          <a href="produits.html">Voir plus</a>
        </div>
      </section>
      <aside id="filtre">
        <form>
          <div className="form-group">
            <label for="nom">Produit:</label>
            <input
              type="research"
              className="form-control"
              name="nom"
              id="nom"
              placeholder="Que cherchez-vous?"
              onChange={(handleFilterChange)}
              value={filters.nom}
            />
          </div>
          <div className="form-group">
            <label for="cat">Categorie:</label>
            <select name="cat" id="cat" className="form-control"
              onChange={handleFilterChange}
              value={filters.cat} >
              <option value="Tout">Toutes les catégories</option>
              <option value="Habits/Mode">Habits/Mode</option>
              <option value="Electronique">Appareils électroniques</option>
              <option value="Meuble">Meubles</option>
              <option value="Cosmétique">Produits cosmétiques</option>
            </select>
          </div>
          <div className="form-group">
            <label for="prixmin">Prix min:</label>
            <input
              type="text"
              className="form-control"
              name="prixmin"
              id="prixmin"
              placeholder="Prix min"
              onChange={handleFilterChange}
              value={filters.prixmin}
            />
          </div>
          <div className="form-group">
            <label for="prixmax">Prix max:</label>
            <input
              type="text"
              className="form-control"
              name="prixmax"
              id="prixmax"
              placeholder="Prix max"
              onChange={handleFilterChange}
              value={filters.prixmax}
            />
          </div>
          <div>
            <button className="btn btn-primary" id="btn-filter">
              Filtrer les produits
            </button>
          </div>
        </form>
      </aside>
    </main>
  );
}

export default Accueil;
