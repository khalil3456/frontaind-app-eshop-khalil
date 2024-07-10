import React from "react";
import { useParams } from "react-router-dom";
import { produits } from "../data/produit";

function Details({panier, setPanier}) {
  const {id} = useParams()
  const produit = produits.find((elt) => elt.id ===Number(id))
  const addToPanier = () => {
    const produitInPanier = panier.find(
      (item) => item.produit.id === produit.id
    );
    if (produitInPanier) {
      const newCart = [
        ...panier.filter((item) => item.produit.id !== produit.id),
        { produit, qte: produitInPanier.qte + 1 },
      ];
      setPanier(newCart);
    } else {
      const newPanier = [...panier, { produit, qte: 1 }];
      setPanier(newPanier);
    }
  };
  return (
    <main>
            <div id="details-photo">
                <img src={require(`../img/products/${produit.photo}`)} alt="Pollo bleu" />
            </div>
            <div id="details-droite">
                <div id="details-nom-cat-prix">
                    <div id="details-nom-cat">
                        <h2>{produit.nom}</h2>
                        <span>{produit.categorie}</span>
                    </div>
                    <div id="details-prix">
                        <span>{produit.prix}</span> F CFA
                    </div>
                </div>
                <div id="details-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nostrum ipsum ea iusto porro quae dolore est cumque minima voluptas assumenda modi ex inventore repellendus! Quae nobis eius at nostrum!
                </div>
                <div id="details-boutons">
                    <button class="like-btn">Liker</button>
                    <button class="ajout-panier-btn" id="2" onClick={addToPanier}>+Panier</button>
                </div>
            </div>
        </main>
  )
}

export default Details;
