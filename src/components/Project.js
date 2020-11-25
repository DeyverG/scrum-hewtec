import React from 'react'
import '../assets/styles/project.css'
import { Link } from 'react-router-dom';

const Project = ({ id, name, description }) => {

    const projectON = () =>{
        const project = {
            id,
            name,
            description
        }

        localStorage.setItem('projectON',JSON.stringify(project));
    }

    return (
        <>
            <Link to="/ProjectView" className="marginLink filtro" name={name} onClick={projectON}>
                <div className="project">
                    <p className="projectName">{name}</p>
                </div>
            </Link>
        </>
    );
}

export default Project;