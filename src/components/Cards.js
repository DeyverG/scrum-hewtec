import React from 'react';
import '../assets/styles/cards.css';
import Eq from '../assets/img/eq.jpg';
import Tareas from '../components/Tareas';

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
         <Tareas/>
           </div>
           
         
    
    </>
  );
};

export default Cards;