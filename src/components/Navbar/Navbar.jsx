import React from 'react'
import logo from "../assets/navbar/Group 15142.png"
import barra from "../assets/navbar/coolicon0.png"
import ligth from "../assets/navbar/coolicon2.png"
import dark from "../assets/navbar/coolicon3.png"
import info from "../assets/navbar/coolicon.png"
import person from "../assets/navbar/coolicon1.png"
import heart from "../assets/navbar/1coolicon.png"
import car from "../assets/navbar/cart.png"
import { Link } from "react-router-dom"
import lupa from '../assets/navbar/coolicon_1.png'
import './navbar.css'
const Navbar = () => {

    // const { handleToggleDarkMode, isDarkMode } = props;
    
        
    return (
        <div className='navbar'>
        
         {/* <button onClick={handleToggleDarkMode}>
        {isDarkMode ? "Light mode" : "Dark mode"}
      </button> */}
            <div className='navbarContent'>
                <div className='navbar_logo'>
                    <img src={barra} alt='barra' />
                    <Link to="/">   <img src={logo} alt='logo' /></Link>
                </div>
            </div>
            <nav className='nav'>
                <ul>
                    <li><Link to="/topVendas">Top Vendas</Link></li>
                    <li><Link to="/promocoes">Promoções</Link></li>
                    <li><Link to="/campanhas">Campanhas</Link></li>
                </ul>
            </nav>
            <div className='search'>
                <img src={lupa} alt='lupa' />
                <input type="text" name="search" placeholder="Escreva aqui o que procura" />
            </div>
           <div className='darkmode'> 
           <img className='img1' src={dark} alt='darkmode' />
           <button></button>
           <img className='img2' src={ligth} alt='ligth' />
           <span className='text'>Poupe Energia</span>
           <img className='img3' src={info} alt='info' />
           </div>
           <div className='icon'>
            <img className='icon1' src={person} alt='info' />
            <img className='icon2' src={heart} alt='info' />
            <img className='icon3' src={car} alt='info' />
           </div>
        </div>
    )
}

export default Navbar
