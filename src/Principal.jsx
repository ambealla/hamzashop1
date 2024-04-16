import React from "react";

import BlackFriday from "./assets/img/black-friday.svg";
import Emphasis from "./components/Emphasis";
import Footer from "./components/Footer";
import ListProducts from "./components/ListProducts";
import Menu from "./components/Menu";
import Newsletter from "./components/Newsletter";
import Slider from "./components/Slider";
import TypeProducts from "./components/TypeProducts";
import ModalContact from "./components/ModalContact";
import Widget from "./components/benefited/Widget";

export default function Principal() {
  return (
    <>
      <div className="bg-light">
        <Emphasis />
        <Menu />
      </div>
      <Slider />
      <ListProducts />

      <Widget />

      <div className="bloco-post Container" style={{ marginTop: "80px" }}>
        <div className="post1">
          <img src={BlackFriday} alt="banner Black Friday" />
        </div>

        <div className="post2">
          <p style={{color :"#198754", fontFamily:"sans-serif"}}>
            Daniel Wellington L’Iconic Link Unitone est notre première montre
            unicolore dotée d’un luxueux bracelet à maillons en métal et d’un
            cadran de montre parfaitement assortis. Disponible en acier
            inoxydable poli avec une finition argentée éclatante, en or raffiné
            ou en plaqué or. Cet ajout unique à la collection Iconic Link fait
            de l’Unitone une montre indéniablement accrocheuse qui donne le ton
            à toute occasion.{" "}
          </p>
        </div>
      </div>

      <Newsletter />
      <ModalContact />
      <Footer />
    </>
  );
}
