import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="container-inner">
        <div className="main-content">
          <div className="main-headings main-headings-js">
            <p id="by-line">
            </p>
            <div className="heading">
              <h3 id="heading1"></h3>
              <h3 id="heading2"></h3>
              <h1 id="heading3">CRM</h1>
            </div>
            <div className="short-bio">
              <p>
               
              </p>
            </div>
            {/* <a href="#" className="link" onclick="readMore()">Read More</a> */}
            <Link to="/" className="link">
              {" "}
              Read More{" "}
            </Link>
          </div>
          <div className="more-info more-info-js">
            <h4>Le CRM.</h4>
            <p>
            Le CRM ou gestion de la relation client (Customer Relationship Management) est une stratégie de gestion des relations et interactions d'une entreprise avec ses clients ou clients potentiels. Un système CRM aide les entreprises à interagir en permanence avec les clients, à rationaliser leurs processus et à améliorer leur rentabilité.
            </p>
            <p>
            Lorsqu'ils parlent de CRM, les gens font généralement référence à un système CRM, outil utilisé pour la gestion des contacts, des ventes, la productivité et bien plus encore. L'objectif d'un système CRM est simple : améliorer les relations commerciales.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              saepe suscipit deleniti porro fugit! Atque nisi alias a porro
              fugiat incidunt exercitationem! Nihil, consectetur. Expedita.
            </p>
          </div>
        </div>
        <div className="image-wrapper">
          <div className="image-container">
            <img
              className="image"
              src="./CRM.jpg"
              alt="pers."
            />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
