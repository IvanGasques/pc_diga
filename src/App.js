import React from "react";
import Banner from "./components/Banner/Banner";
import Categorias from "./components/Categorias/Categorias";
import './App.css';
import Destaques from "./components/Destaque/Destaques";
import Cards from "./components/Cards/Cards";
function App() {
  return (
    <div className="app">
   <Banner></Banner>
   <Categorias/>
   <Cards/>
   <Destaques/>
    </div>
  );
}

export default App;
