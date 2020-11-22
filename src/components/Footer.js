import React from 'react'
import '../assets/styles/footer.css'

const Footer = () => {
   return (
      <>
         <div className="footer">
            <div className="iconosRedes">
               <p className="rights">All rights reserved ADAC 2020</p>
            </div>
            <div className="iconosRedes contenedorIcon">
               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="space_link"><i className="fab fa-facebook styleIcon"></i></a>
               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="space_link"><i className="fab fa-instagram styleIcon"></i></a>
               <a href="https://co.linkedin.com/" target="_blank" rel="noopener noreferrer" className="space_link"><i className="fab fa-linkedin styleIcon"></i></a>
            </div>
         </div>
      </>
   );
}

export default Footer;