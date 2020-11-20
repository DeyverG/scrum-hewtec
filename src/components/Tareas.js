import React from 'react';
import '../assets/styles/tareas.css';


const Tareas = () => {
  return (
    <>
      <div className="contenido-tarea">
              <div className="texto_img">
                  <p>Name Task</p>
              </div>
              <div className="icon_Task">
              <i class="fas fa-edit imgeditar_eliminar"></i>
              <i class="fas fa-trash-alt imgeditar_eliminar1"></i>
              </div>
          </div>
    </>
  );
};

export default Tareas;
