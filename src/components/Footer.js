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
               <i className="fab fa-facebook styleIcon"></i>
               <i className="fab fa-instagram styleIcon"></i>
               <i className="fab fa-linkedin styleIcon"></i>
            </div>
         </div>
      </>
   );
}

export default Footer;