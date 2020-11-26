import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import '../assets/styles/createProject.css';
import { nanoid } from 'nanoid'

const CreateProject = ({ history }) => {

   const [newProject, setNewProject] = useState({
      id: nanoid(),
      name: '',
      description: ''
   })

   const { name, description } = newProject;

   const handleChange = e => {
      setNewProject({
         ...newProject,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = () => {
      if (name.trim() === '' || description.trim() === '') {
         alert('datos faltantes')
         return
      }
      const projects = JSON.parse(localStorage.getItem('projects'));
      projects.push(newProject);
      localStorage.setItem('projects', JSON.stringify(projects));
      history.push('/MyProjects');
   }

   const consultaLogin = async () => {
      const peticion = await JSON.parse(localStorage.getItem("userActive"));
      if (!peticion) {
        history.push("/")
      }
   }

   useEffect(() => {
      consultaLogin();
  
    }, [])
   
   return (
      <>
         <Header />
         <div className="props-create-projects">
            <div className="contenedor-create-project">
               <p className="margin-create-project props-text-createP">Name Project</p>
               <input type="text" className="form-control margin-create-project size-inputs-create" name="name" onChange={handleChange} />
               <p className="margin-create-project props-text-createP">Description</p>
               <textarea className="form-control margin-create-project size-inputs-create" name="description" id="" rows="5" onChange={handleChange}></textarea>
               <button className="btn btn-primary props-btn-createP" onClick={handleSubmit}>Register</button>
            </div>
         </div>
      </>
   );
}

export default CreateProject;