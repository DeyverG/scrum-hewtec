import React, { useState } from 'react';
import '../assets/styles/task.css';
import Modal from 'react-bootstrap/Modal';

const Task= () => {

  // Modal Edit
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  // Modal Delete
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  return (
    <>
      <div className="contenido-tarea" >
        <div className="texto_img" >
          <p>Name Task</p>
        </div>
        <div className="btn-group dropright icon_Task" >
          <button type="button" className="btn btnModal" id="dropdownMenu" 
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
            <i className="fas fa-ellipsis-v"></i>
          </button>
          <div className="dropdown-menu divIcons" aria-labelledby="dropdown" >

            <button type="button" className="btn btnLeft" >
              <i className="fas fa-chevron-circle-left"></i>
            </button>

            <button type="button" className="btn btnEditTask" onClick={handleShowEdit} >
              <i className="fas fa-edit imgeditar_eliminar" ></i>
            </button>
            <Modal show={showEdit} onHide={handleCloseEdit}>
              <Modal.Header closeButton>
                <Modal.Title>EDIT TASK</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="divModalBodyTask" >
                  <h6>Name</h6>
                  <div className="divInputModalBodyTask" >
                    <input className="form-control inputEditModalTask" ></input>
                  </div>

                  <h6>Description</h6>
                  <div className="divTextareaModalBodyTask" >
                    <textarea className="form-control textareaEditModalTask" ></textarea>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button type="button" className="btn btn-primary btnEditModalSaveTask" onClick={handleCloseEdit} >
                  <h5>Save</h5>
                </button>
              </Modal.Footer>
            </Modal>

            <button type="button" className="btn btnDeleteTask" onClick={handleShowDelete} >
              <i className="fas fa-trash-alt imgeditar_eliminar1"></i>
            </button>
            <Modal show={showDelete} onHide={handleCloseDelete} >
              <Modal.Header closeButton >
                <Modal.Title>DELETE TASK</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h6>Are you sure to delete task?</h6>
              </Modal.Body>
              <Modal.Footer>
                <button type="button" className="btn btn-primary btnDeleteModalCancelTask" onClick={handleCloseDelete} >
                  <h5>Cancel</h5>
                </button>
                <button type="button" className="btn btn-danger btnDeleteModalConfirmTask" onClick={handleCloseDelete} >
                  <h5>Confirm</h5>
                </button>
              </Modal.Footer>
            </Modal>

            <button type="button" className="btn btnRight" >
              <i className="fas fa-chevron-circle-right"></i>
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Task;