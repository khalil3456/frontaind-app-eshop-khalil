import React from "react";
import btnPlus from "../img/icons/add.png";
import btnMoins from "../img/icons/minus.png";
import btnDelete from "../img/icons/delete.png";

function Panier({panier, setPanier}) {

    const plusQtePanier = (produit) => {
        const newPanier = panier.map((item) => {
            if(item.produit.id === produit.id)
                return {...item, qte: item.qte + 1};
            return item;
        })
        setPanier(newPanier);
    }

    const moinsQtePanier = (produit) => {
        const newPanier = panier.map((item) => {
            if(item.produit.id === produit.id && item.qte > 1)
                return {...item, qte: item.qte - 1};
            return item;
        })
        setPanier(newPanier);
    }

    const supItemInPanier = (produit) => {
        const newPanier = panier.filter((item) => item.produit.id !== produit.id);
        setPanier(newPanier);
    }

    return (
        <main>
            <div id="panier">
                <table>
                    <thead>
                        <tr>
                            <th className="photo">Photo</th>
                            <th className="nom">Nom</th>
                            <th className="prix">Prix (F CFA)</th>
                            <th className="quantite">Quantité</th>
                            <th className="total">Total (F CFA)</th>
                            <th className="action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { panier.map((item) =>
                            <tr key={item.produit.id}>
                                <td className="photo"><img src={require(`../img/products/${item.produit.photo}`)} /></td>
                                <td className="nom">{item.produit.nom}</td>
                                <td className="prix">{item.produit.prix}</td>
                                <td className="quantite">{item.qte}</td>
                                <td className="total">{item.qte * item.produit.prix}</td>
                                <td className="action">
                                    <button className="plus-panier" onClick={() => plusQtePanier(item.produit)}><img src={btnPlus} /></button>
                                    <button className="minus-panier" onClick={() => moinsQtePanier(item.produit)}><img src={btnMoins} /></button>
                                    <button className="remove-panier"><img src={() => supItemInPanier(item.produit)} /></button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2" className="grandtotal">GRAND TOTAL (F CFA)</td>
                            <td colspan="4" className="grandtotalv">{panier.reduce((total, item) => total + item.qte * item.produit.prix, 0)}</td>
                        </tr>
                    </tfoot>
                </table>
                <div id="btns-confirmer-annuler-panier">
                    <button id="confirmer-payer">Confirmer le panier et payer</button>
                    <button id="vider-panier">Vider le panier et reprendre</button>
                </div>
            </div>
        </main>
    )
}

export default Panier