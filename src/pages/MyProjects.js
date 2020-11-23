import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/styles/myProjects.css';
import Project from '../components/Project';
import { Link } from 'react-router-dom';


const MyProjects = () => {

    const [projects, setProjects] = useState([]);

    const consultarDB = async () => {
        const consulta = await JSON.parse(localStorage.getItem('projects'));
        if (!consulta) {
            localStorage.setItem('projects', '[]');
        } else {
            setProjects(consulta)
        }
    }

    useEffect(() => {
        consultarDB()
    }, [])

    return (
        <>
            <Header bandera={true}/>
            <div className="tamañoProjects scrollDiv">

                <div className="contenedorProject">
                    <Link to="/CreateProject" className="marginLink">
                        <div className="project">
                            <p className="fas fa-folder-plus projectName iconoFolder"></p>
                            <p className="projectName createProject">Create Project</p>
                        </div>
                    </Link>
                    {projects.map(project => (
                        <Project
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            description={project.description}
                        />
                    ))}
                </div>

            </div>
        </>
    );
}

export default MyProjects;