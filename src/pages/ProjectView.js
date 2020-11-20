import React from 'react';
import '../assets/styles/projectView.css';
import Cards from '../components/Cards';

const ProjectView = () => {
  return (
    <>
      <div className="contenido8">
      <div class="container ">
        
          <div class="row">
    <div class="col-6 iconos_grid">
    <i class="fas fa-user-plus color_icon"></i>
    </div>
    
    <div class="col-6 iconos_grid1">
    <i class="fas fa-cogs color_icon"></i>
    
    </div>
  </div>
  
          <div class="row">
            <div class="col-11 cards_project">
              <Cards/>
              <Cards/>
              <Cards/>
              <div className="cards_general">
             <div className="contenido_new2">
             <i class="fas fa-plus-circle icono_mas"></i>
             <p className="contenido_new" >NeSection</p>
             </div>
           </div>
            </div>
          </div>
</div>
      
      
                
      </div>
    </>
  );
};

export default ProjectView;
