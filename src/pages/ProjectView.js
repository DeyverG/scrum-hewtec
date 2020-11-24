import React, { useEffect, useState } from 'react';
import '../assets/styles/projectView.css';
import Card from '../components/Card';
import Header from '../components/Header';
import Modal from 'react-bootstrap/Modal';

const ProjectView = () => {

  // Modal New Task
  const [showNewSection, setShowNewSection] = useState(false);
  const handleCloseNewSection = () => setShowNewSection(false);
  const handleShowNewSection = () => setShowNewSection(true);

  const [idProject, setIdProject] = useState({});
  const [sections, setSections] = useState([]);
  const [newSection, setNewSection] = useState({name:''});
  const [bandera, setBandera] = useState(true);

  const consultaBD = () => {
    const idPeticion = JSON.parse(localStorage.getItem('projectON'));
    setIdProject(idPeticion);
    consultaSection(idPeticion.id);
  }

  const consultaSection = id => {
    const peticion = JSON.parse(localStorage.getItem(`${id}`));

    if(!peticion){
      localStorage.setItem(`${id}`, '[]');
      return
    }
    setSections(peticion);
  }

  const handleSubmit = () => {
    const peticion = JSON.parse(localStorage.getItem(`${idProject.id}`));
    peticion.push(newSection)
    localStorage.setItem(`${idProject.id}`, JSON.stringify(peticion))
    handleCloseNewSection();
    setBandera(true);
  }

  const handleChange = e => {
    setNewSection({[e.target.name]:e.target.value})
  }

  useEffect(() => {
    
    if(bandera){
      consultaBD();
      setBandera(false);
    }
  }, [bandera])

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
              {
                sections.map(section => (
                  <Card 
                    name={section.name}
                  />
                ))
              }
              <div className="cards_general cursorSection" onClick={handleShowNewSection} >
                <div className="contenido_new2">
                  <i className="fas fa-plus-circle icono_mas"></i>
                  <p className="contenido_new" >New Section</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showNewSection} onHide={handleCloseNewSection}>
        <Modal.Header closeButton>
          <Modal.Title>NEW SECTION</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="divModalBodyNewSection" >
            <h6>Name</h6>
            <div className="divInputModalBodyNewSection" >
              <input className="form-control inputEditModalNewSection" onChange={handleChange} name="name" ></input>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-primary btnEditModalSaveNewSection" onClick={handleSubmit} >
            <h5>Save</h5>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectView;
