import React from "react";

import Emphasis from "./components/Emphasis";
import Footer from "./components/Footer";
import ListProducts from "./components/ListProducts";
import Menu from "./components/Menu";
import Newsletter from "./components/Newsletter";
import Slider from "./components/Slider";
import ModalContact from "./components/ModalContact";
import Widget from "./components/benefited/Widget";
import Widget2 from "./components/benefited/Widget2";
import ContactForm from "./components/ContactForm";

export default function Principal() {
  return (
    <>
      <div className="bg-light">
        <Emphasis />
        <Menu />
      </div>
      <Widget2 />
           
      <ListProducts />
      <Widget />
   
      <ContactForm />
      <Footer />
    </>
  );
}
