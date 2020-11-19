import React from 'react';
import '../assets/styles/cards.css';
import Eq from '../assets/img/eq.jpg';


const Cards = () => {
  return (
    <>
      
        
        
           <div className="cards_general">
           <img className="imgaeq" src={Eq} alt="" />
           
            <p>Task Last</p>

            <hr/>
            
            <button type="submit" className="btn botton_Edit1">
            New Task
          </button>
          <div className="contenido-tarea">
              <div className="texto_img">
                  <p>Name Task</p>
              </div>
              <div className="icon_Task">
              <i class="fas fa-edit imgeditar_eliminar"></i>
              <i class="fas fa-trash-alt imgeditar_eliminar1"></i>
              </div>
          </div>
           </div>
           
         
    
    </>
  );
};

export default Cards;