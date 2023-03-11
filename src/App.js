import React from "react";
import Banner from "./components/Banner/Banner";
import Categorias from "./components/Categorias/Categorias";
import './App.css';
import Feature from "./components/Feature/Feature";
import Cards from "./components/Cards/Cards";
function App() {
  return (
    <div className="app">
   <Banner></Banner>
   <Categorias/>
   <Cards/>
   <Feature/>
    </div>
  );
}

export default App;
