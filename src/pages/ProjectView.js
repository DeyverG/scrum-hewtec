import React, { useEffect, useState } from 'react';
import '../assets/styles/projectView.css';
import Card from '../components/Card';
import Header from '../components/Header';
import Modal from 'react-bootstrap/Modal';
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom';

const ProjectView = ({history}) => {

  // Modal New Task
  const [showNewSection, setShowNewSection] = useState(false);
  const handleCloseNewSection = () => setShowNewSection(false);
  const handleShowNewSection = () => setShowNewSection(true);

  // Modal info
  const [showinfo, setShowinfo] = useState(false);
  const handleCloseinfo = () => setShowinfo(false);
  const handleShowinfo = () => setShowinfo(true);

  const [idProject, setIdProject] = useState({});
  const [sections, setSections] = useState([]);
  const [newSection, setNewSection] = useState({
    id: nanoid(),
    name: ''

  });
  const [bandera, setBandera] = useState(true);

  const consultaBD = () => {
    const idPeticion = JSON.parse(localStorage.getItem('projectON'));
    setIdProject(idPeticion);
    consultaSection(idPeticion.id);
  }

  const consultaSection = id => {
    const peticion = JSON.parse(localStorage.getItem(`${id}`));

    if (!peticion) {
      localStorage.setItem(`${id}`, '[]');
      return
    }
    setSections(peticion);
  }

  const handleSubmit = async () => {
    const generarID = await nanoid()
    setNewSection({
      ...newSection,
      id: generarID
    })

    const peticion = JSON.parse(localStorage.getItem(`${idProject.id}`));
    peticion.push(newSection)
    localStorage.setItem(`${idProject.id}`, JSON.stringify(peticion))
    handleCloseNewSection();
    setBandera(true);
  }

  const handleChange = e => {
    setNewSection({
      ...newSection,
      [e.target.name]: e.target.value
    })
  }

  const consultaLogin = async () => {
    const peticion = await JSON.parse(localStorage.getItem("userActive"));
    if (!peticion) {
      history.push("/")
    }
  }

  useEffect(() => {

    if (bandera) {
      consultaBD();
      setBandera(false);
      consultaLogin();
    }
  }, [bandera])

  return (
    <>
      <Header />
      <div className="contenido8">
        <div className="container">

          <div className="row">
            <div className="col-6 iconos_grid">
              <Link to="/AddCollaborator">
                <i className="fas fa-user-plus color_icon"></i>
              </Link>
              <i className="fas fa-exclamation-circle iconExclamation" onClick={handleShowinfo} ></i>
            </div>

            <div className="col-6 iconos_grid1">
              <Link to="/EditProject">
                <i className="fas fa-cogs color_icon"></i>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="cards_project scrollDiv">
              <div className="alineandoCard">
                {
                  sections.map(section => (
                    <Card
                      key={section.id}
                      id={section.id}
                      name={section.name}
                      sections={sections}
                      setSections={setSections}
                      setBandera={setBandera}
                      idProject={idProject.id}
                    />
                  ))
                }

                <div className="cards_general cursorSection" onClick={handleShowNewSection} >
                  <div className="contenido_new2">
                    <i className="fas fa-plus-circle icono_mas"></i>
                    <p>New Section</p>
                  </div>
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

      {/* Info Modal */}
      <Modal show={showinfo} onHide={handleCloseinfo}>
        <Modal.Header closeButton>
          <Modal.Title>PROJECT INFORMATION</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="divModalBodyTask" >
            <h4>Name</h4>
            <div className="divInputModalBodyTask" >
              <input className="form-control inputEditModalTask" disabled value={idProject.name}></input>
            </div>

            <h4>Description</h4>
            <div className="divTextareaModalBodyTask" >
              <textarea className="form-control textareaEditModalTask" disabled value={idProject.description}></textarea>
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

export default ProjectView;
