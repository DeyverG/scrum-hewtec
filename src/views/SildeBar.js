import React from 'react';
import '../assets/styles/sildebar.css';
import Avatar from'../img/avatar.png'
import Off from'../img/off.png'

const SildeBar = () => {
    return (  
        
        <div className="contenido_Sildebar">
            <div className="sildebar1">
           
            <div className="admin1">
                <img className="imgavatar" src={Avatar} alt=""/>
                <h5>Alejandra Jaimes</h5>
                    <h2 className="subtitulo"><span></span></h2>
            </div>

            <div className="avatar1">
                <div className="opcion-text">
                    <h6 className="nav-link" id="op-1"><i className="fas fa-folder"></i>&nbsp;My Projects</h6>
                    <h6 className="nav-link" id="op-2"><i className="fas fa-users"></i>&nbsp;Colaborations</h6>
                    <h6 className="nav-link" id="op-4"><i className="fas fa-bell"></i>&nbsp;notifications</h6>
                    
                </div>
            </div>

            <img className="off" src={Off} alt=""/>
             
            
              </div>
       
        </div>
        
    );
}
 
export default SildeBar;
