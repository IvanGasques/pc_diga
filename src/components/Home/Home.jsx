import React,{useState} from "react";
import Banner from "../Banner/Banner";
import Categorias from "../Categorias/Categorias";
import Feature from "../Feature/Feature";
import Cards from "../Cards/Cards";
import Promoçoes from "../Promoçoes/Promoçoes";
import { FeatureList } from "../Feature/featureList";
import { PromoçoesList } from "../Promoçoes/promocoesList";
import News from "../News/News";
function Home() {


    return (
        <div className="home">
    
            <Banner />
            <Categorias />
            <Cards />
            <Feature features={FeatureList} />
            <Promoçoes features={PromoçoesList} />
            <News />
        </div>
    );
}

export default Home;