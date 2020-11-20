import React from 'react';
import '../assets/styles/projectView.css';
import Cards from '../components/Cards';
import Header from '../components/Header';

const ProjectView = () => {
  return (
    <>
      <Header />
      <div className="contenido8">
        <div className="container">

          <div className="row">
            <div className="col-6 iconos_grid">
              <i className="fas fa-user-plus color_icon"></i>
            </div>

            <div className="col-6 iconos_grid1">
              <i className="fas fa-cogs color_icon"></i>

            </div>
          </div>

          <div className="row">
            <div className="col-11 cards_project">
              <Cards />
              <Cards />
              <Cards />
              <div className="cards_general">
                <div className="contenido_new2">
                  <i class="fas fa-plus-circle icono_mas"></i>
                  <p className="contenido_new" >New Section</p>
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
