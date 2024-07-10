import { Link, NavLink } from "react-router-dom";
import icoEshop from "../img/icons/ico-eshop-s.png";
import userIcon from "../img/user.png";
import PropTypes from 'prop-types';


function Header({panier}) {
  return (
    <header>
      <div id="header-top">
        <div id="logo-nom">
          <img src={icoEshop} alt="Logo de eshop" />
          <h1>Shopez en toute sécurité !</h1>
        </div>
        <div id="user-nav">
          <div id="user">
            <div className="profile">
              <h3>
                Username
                <br />
                <span>Vu le 01/01/2024</span>
              </h3>
              <div className="imgBx">
                <img src={userIcon} alt="icone profil" />
              </div>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link to="connexion">
                    <ion-icon name="log-in-outline"></ion-icon>
                    Connexion
                  </Link>
                </li>
                <li>
                  <Link to="inscription">
                    <ion-icon name="person-add-outline"></ion-icon>
                    Inscription
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ion-icon name="person-outline"></ion-icon>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ion-icon name="cart-outline"></ion-icon>
                    Mes commandes
                  </Link>
                </li>
                <li>
                  <Link to="deconnexion">
                    <ion-icon name="log-out-outline"></ion-icon>
                    Déconnexion
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/" >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="panier" activeClassName="">
                  Panier (<span id="nav-panier">{panier.reduce((nb, item)=> nb + item.qte, 0)}</span>)
                </NavLink>
              </li>
              <li>
                <Link to="#" activeClassName="">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="header-banniere">
        <div id="banniere_promo">
          -20% <br />
          Faites le plein du panier &#129321;
        </div>
        <div id="banniere_bouton">
          <marquee behavior="scroll" direction="left">
            Livraison partout au Mali. Satisfait ou remboursé sur 3 jours !
          </marquee>
          <Link to="produits" className="bouton_rouge">
            Voir les produits <img src="img/icons/fleche.png" alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
