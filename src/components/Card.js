import React, { useEffect, useState } from 'react';
import '../assets/styles/card.css';
import Eq from '../assets/img/eq.jpg';
import Task from '../components/Task';
import Modal from 'react-bootstrap/Modal';
import { nanoid } from 'nanoid'

const Card = ({ id, name, sections, setSections, setBandera, idProject }) => {

  // Modal New Task
  const [showNewTask, setShowNewTask] = useState(false);
  const handleCloseNewTask = () => setShowNewTask(false);
  const handleShowNewTask = () => setShowNewTask(true);

  // Modal Delete Section
  const [showDeleteTask, setDeleteTask] = useState(false);
  const handleCloseDeleteTask = () => setDeleteTask(false);
  const handleShowDeleteTask = () => setDeleteTask(true);

  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState({
    id: nanoid(),
    idSection: id,
    name: '',
    description: ''
  })
  const handleDelete = e => {
    const filtrado = sections.filter(section => section.id !== e);
    localStorage.setItem(`${idProject}`, JSON.stringify(filtrado));
    setSections(filtrado);
    setBandera(true)
    handleCloseDeleteTask()
  }

  const consultaDBTask = () => {
    const peticion = JSON.parse(localStorage.getItem('task'));
    if (!peticion) {
      localStorage.setItem('task', '[]')
      return
    }
    const filtrado = peticion.filter(result => result.idSection === id)
    setTasks(filtrado)
  }

  const handleChange = e => {
    setNewTask({
      ...newtask,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = () => {

    if (newtask.name.trim() === '' || newtask.description.trim() === '') {
      alert('todos los datos son requeridos');
      return
    }
    setNewTask({
      id: nanoid()
    })
    const taskBD = JSON.parse(localStorage.getItem("task"));
    taskBD.push(newtask);
    localStorage.setItem('task', JSON.stringify(taskBD));
    setBandera(true)
    setSections([])
    handleCloseNewTask()
  }

  useEffect(() => {
    consultaDBTask()
  }, [])

  return (
    <>
      <div className="cards_general">
        <img className="imgaeq" src={Eq} id={id} alt="" onClick={handleShowDeleteTask} />
        <p>{name}</p>
        <hr />
        <button type="submit" className="btn botton_Edit1" onClick={handleShowNewTask} >
          New Task
        </button>
        {tasks.map(task => (
          <Task
            id={task.id}
            idSection={task.idSection}
            name={task.name}
            description={task.description}
            setBandera={setBandera}
            setSections={setSections}
            sections={sections}
          />
        ))}
      </div>

      <Modal show={showNewTask} onHide={handleCloseNewTask}>
        <Modal.Header closeButton>
          <Modal.Title>NEW TASK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="divModalBodyNewTask" >
            <h6>Name</h6>
            <div className="divInputModalBodyNewTask" >
              <input className="form-control inputEditModalNewTask" onChange={handleChange} name="name"></input>
            </div>

            <h6>Description</h6>
            <div className="divTextareaModalBodyNewTask" >
              <textarea className="form-control textareaEditModalNewTask" name="description" onChange={handleChange}></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-primary btnEditModalSaveNewTask" onClick={handleSubmit} >
            <h5>Save</h5>
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteTask} onHide={handleCloseDeleteTask}>
        <Modal.Header closeButton>
          <Modal.Title>DELETE SECTION</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="divModalBodyNewTask" >
            <h6>Delete</h6>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-primary btnEditModalSaveNewTask" onClick={() => handleDelete(id)} >
            <h5>Delete</h5>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Card;