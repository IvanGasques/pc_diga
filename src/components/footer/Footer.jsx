import React from 'react'
import logo from '../assets/footer/Group 15142.png'
import socialNavegation from '../assets/footer/Group 15195.png'
// import facebook from '../assets/footer/Vector (6).png'
// import instagran from '../assets/footer/Group 15195.png'
// import twiter from '../assets/footer/Group 15195.png'
// import youtube from '../assets/footer/Group 15195.png'
// import tiktok from '../assets/footer/Group 15195.png'
import payment from '../assets/footer/payments_2x 1.png'
import ReceiveNews from '../ReceiveNews/ReceiveNews'


import './footer.css'

const Footer = () => {
    return (
        <div className="footerPrinc">
<div className='footer-receive'> <ReceiveNews/></div>
       
        <div className='footer'>
        
            <nav className='navegation'>
                <div className='logo'><img src={logo} alt='logo' /><p className='textlogo'>PCDIGA Online - Loja de Informática Nº1 em Portugal. </p></div>
                <div className='socialNavegation'><img src={socialNavegation} alt='rede sociais' /></div>
                <div className='payment'><img src={payment} alt='payment' /></div>
            </nav>
            <div className='infoCards'>
                <div className='information'>
                    <h3>INFORMAÇÕES</h3>
                    <p>Modos de Pagamento<br/>
                        Envio de Encomendas e Portes<br/>
                        Trocas e Devoluções<br/>
                        Garantia e RMAs<br/>
                        Termos/Política de Privacidade<br/>
                        Blog PCDIGA<br/>
                        3x 4x Oney<br/></p>
                </div>
                <div className='faq'>
                    <p className='align'><br/>
                    <h3> </h3>
                    FAQ's ( Perguntas Frequentes)<br/>
                        Resolução de Litígios Online<br/>
                        Seguro Mapfre<br/>
                        Crédito Cetelem<br/>
                        Livro de Reclamações<br/>
                        Ficha de Atividade de Intermediação de Crédito<br/></p>
                </div>
                <div className='loja'>
                    <h3>LOJA</h3>
                    <p>Área de Cliente<br/>
                        Promoções<br/>
                        Novos Produtos<br/>
                        Mais Vendidos<br/></p>
                </div>
                <div className='pcdiga'><br/>
                    <p>PCDIGA<br/>
                        Recrutamento<br/>
                        Empresas<br/>
                        Contactos<br/></p>
                </div>
            </div>
        </div></div>
    )
}

export default Footer
