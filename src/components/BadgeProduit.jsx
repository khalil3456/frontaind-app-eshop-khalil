import { Link } from "react-router-dom";
function BadgeProduit({ produit, panier = [], setPanier }) {
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
    <div className="produit-badge">
      <div className="produit-image">
        <img
          src={require(`../img/products/${produit.photo}`)}
          alt="Appareil-photo-canon"
        />
      </div>
      <div className="produit-details">
        <h2>{produit.nom}</h2>
        <h3>{produit.prix}</h3>
      </div>
      <div className="produit-bouton">
        <button
          className="ajout-panier-btn"
          id="1"
          onClick={addToPanier}
        >
          +Panier
        </button>
        <Link to={`/details/${produit.id}`} className="details-btn" id="1">
          Détails
        </Link>
      </div>
    </div>
  );
}

export default BadgeProduit;
