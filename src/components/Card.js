import React from 'react';
import '../assets/styles/card.css';
import Eq from '../assets/img/eq.jpg';
import Task from '../component/Task';

const Card = () => {
  return (
    <>
      
        
        
           <div className="cards_general">
           <img className="imgaeq" src={Eq} alt="" />
           
            <p>Task Last</p>

            <hr/>
            
            <button type="submit" className="btn botton_Edit1">
            New Task
          </button>
         <Task/>
           </div>
           
         
    
    </>
  );
};

export default Card;