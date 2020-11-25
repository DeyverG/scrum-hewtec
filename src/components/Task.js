import React, { useState } from 'react';
import '../assets/styles/task.css';
import Modal from 'react-bootstrap/Modal';

const Task = ({ id, idSection, name, description, setBandera, setSections, sections }) => {

  // Modal Edit
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  // Modal Delete
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  // Modal info
  const [showinfo, setShowinfo] = useState(false);
  const handleCloseinfo = () => setShowinfo(false);
  const handleShowinfo = () => setShowinfo(true);

  const [editTask, setEditTask] = useState({
    id: id,
    idSection: idSection,
    name: name,
    description: description,
  })

  const handleChange = e => {
    setEditTask({
      ...editTask,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    if (editTask.name.trim() === '' || editTask.description.trim() === '') {
      alert('todos los datos son requeridos');
      return
    }
    const taskDB = JSON.parse(localStorage.getItem('task'));
    const change = taskDB.map(task => task.id === editTask.id ? {
      id: editTask.id,
      idSection: editTask.idSection,
      name: editTask.name,
      description: editTask.description
    } : task)
    localStorage.setItem('task', JSON.stringify(change));
    setBandera(true)
    setSections([])
    handleCloseEdit()
  }
  const handleDelete = () => {
    const taskDB = JSON.parse(localStorage.getItem('task'));
    const change = taskDB.filter(task => task.id !== editTask.id);
    localStorage.setItem('task', JSON.stringify(change));
    setBandera(true)
    setSections([])
    handleCloseDelete()
  }

  const handleMoveTaskNext = () => {
    const taskDB = JSON.parse(localStorage.getItem('task'));
    const pos = sections.findIndex(section => section.id === editTask.idSection);
    const newPos = sections[(pos + 1)].id
    const change = taskDB.map(task => task.id === editTask.id ? {
      id: editTask.id,
      idSection: newPos,
      name: editTask.name,
      description: editTask.description
    } : task)
    localStorage.setItem('task', JSON.stringify(change));
    setBandera(true)
    setSections([])
    handleCloseEdit()
  }

  const handleMoveTaskPrevious = () => {
    const taskDB = JSON.parse(localStorage.getItem('task'));
    const pos = sections.findIndex(section => section.id === editTask.idSection);
    const newPos = sections[(pos - 1)].id
    const change = taskDB.map(task => task.id === editTask.id ? {
      id: editTask.id,
      idSection: newPos,
      name: editTask.name,
      description: editTask.description
    } : task)
    localStorage.setItem('task', JSON.stringify(change));
    setBandera(true)
    setSections([])
    handleCloseEdit()
  }

  return (
    <>
      <div className="contenido-tarea" >
        <div className="texto_img" >
          <p onClick={handleShowinfo} className="titulo-task">{name}</p>
        </div>
        <div className="btn-group dropright icon_Task" >
          <button type="button" className="btn btnModal" id="dropdownMenu"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
            <i className="fas fa-ellipsis-v"></i>
          </button>
          <div className="dropdown-menu divIcons" aria-labelledby="dropdown" >
            {sections[0].id === idSection
              ?
              null
              :
              <button type="button" className="btn btnLeft" onClick={handleMoveTaskPrevious}>
                <i className="fas fa-chevron-circle-left"></i>
              </button>
            }


            <button type="button" className="btn btnEditTask" onClick={handleShowEdit} >
              <i className="fas fa-edit imgeditar_eliminar" ></i>
            </button>


            <button type="button" className="btn btnDeleteTask" onClick={handleShowDelete} >
              <i className="fas fa-trash-alt imgeditar_eliminar1"></i>
            </button>
            {sections[(sections.length - 1)].id === idSection
              ?
              null
              :
              <button type="button" className="btn btnRight" onClick={handleMoveTaskNext}>
                <i className="fas fa-chevron-circle-right"></i>
              </button>
            }


          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT TASK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="divModalBodyTask" >
            <h6>Name</h6>
            <div className="divInputModalBodyTask" >
              <input className="form-control inputEditModalTask" name="name" value={editTask.name} onChange={handleChange}></input>
            </div>

            <h6>Description</h6>
            <div className="divTextareaModalBodyTask" >
              <textarea className="form-control textareaEditModalTask" name="description" value={editTask.description} onChange={handleChange}></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-primary btnEditModalSaveTask" onClick={handleSave} >
            <h5>Save</h5>
          </button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}
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
          <button type="button" className="btn btn-danger btnDeleteModalConfirmTask" onClick={handleDelete} >
            <h5>Confirm</h5>
          </button>
        </Modal.Footer>
      </Modal>

      {/* Info Modal */}
      <Modal show={showinfo} onHide={handleCloseinfo}>
        <Modal.Header closeButton>
          <Modal.Title>TASK INFORMATION</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="divModalBodyTask" >
            <h4>Name</h4>
            <div className="divInputModalBodyTask" >
              <input className="form-control inputEditModalTask" disabled value={name}></input>
            </div>

            <h4>Description</h4>
            <div className="divTextareaModalBodyTask" >
              <textarea className="form-control textareaEditModalTask" disabled value={description}></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-primary btnEditModalSaveTask" onClick={handleCloseinfo} >
            <h5>Close</h5>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Task;