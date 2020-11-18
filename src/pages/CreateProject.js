import React from 'react';
import Header from '../components/Header'
import '../assets/styles/createProject.css';

const CreateProject = () => {
    return ( 
        <>
        <Header/>
        <div className="props-create-projects">
            <div className="contenedor-create-project">
                <p className="margin-create-project props-text-createP">Name Project</p>
                <input type="text" className="form-control margin-create-project size-inputs-create"/>
                <p className="margin-create-project props-text-createP">Description</p>
                <textarea className="form-control margin-create-project size-inputs-create" name="" id=""rows="5"></textarea>
                <button className="btn btn-primary props-btn-createP">Register</button>
            </div>
        </div>
        </>
     );
}
 
export default CreateProject;