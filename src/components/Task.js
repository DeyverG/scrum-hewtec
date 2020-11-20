import React from 'react';
import '../assets/styles/task.css';


const Task= () => {
  return (
    <>
      <div className="contenido-tarea">
        <div className="texto_img">
          <p>Name Task</p>
        </div>
        <div className="icon_Task">
          <i className="fas fa-edit imgeditar_eliminar"></i>
          <i className="fas fa-trash-alt imgeditar_eliminar1"></i>
        </div>
      </div>
    </>
  );
};

export default Task;