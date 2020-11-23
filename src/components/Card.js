import React, {useState} from 'react';
import '../assets/styles/card.css';
import Eq from '../assets/img/eq.jpg';
import Task from '../components/Task';
import Modal from 'react-bootstrap/Modal';

const Card = () => {

  // Modal New Task
  const [showNewTask, setShowNewTask] = useState(false);
  const handleCloseNewTask = () => setShowNewTask(false);
  const handleShowNewTask = () => setShowNewTask(true);

  return (
    <>
      <div className="cards_general">
        <img className="imgaeq" src={Eq} alt="" />
        <p>Task List</p>
        <hr/>
        <button type="submit" className="btn botton_Edit1" onClick={handleShowNewTask} >
          New Task
        </button>
        <Modal show={showNewTask} onHide={handleCloseNewTask}>
          <Modal.Header closeButton>
            <Modal.Title>NEW TASK</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="divModalBodyNewTask" >
              <h6>Name</h6>
              <div className="divInputModalBodyNewTask" >
                <input className="form-control inputEditModalNewTask" ></input>
              </div>

              <h6>Description</h6>
              <div className="divTextareaModalBodyNewTask" >
                <textarea className="form-control textareaEditModalNewTask" ></textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-primary btnEditModalSaveNewTask" onClick={handleCloseNewTask} >
              <h5>Save</h5>
            </button>
          </Modal.Footer>
        </Modal>


        <Task/>
      </div>
    </>
  );
};

export default Card;