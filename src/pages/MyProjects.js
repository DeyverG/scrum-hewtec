import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../assets/styles/myProjects.css';
import Project from '../components/Project';
import { Link } from 'react-router-dom';


const MyProjects = ({history}) => {

    const [projects, setProjects] = useState([]);

    const consultarDB = async () => {
        const consulta = await JSON.parse(localStorage.getItem('projects'));
        if (!consulta) {
            localStorage.setItem('projects', '[]');
        } else {
            setProjects(consulta)
        }
    }

    const consultaLogin = async () => {
        const peticion = await JSON.parse(localStorage.getItem("userActive"));
        if (!peticion) {
            history.push("/")
        }
    }

    useEffect(() => {
        consultarDB();
        consultaLogin();
    }, [])

    return (
        <>
            <Header bandera={true} projects={projects} setProjects={setProjects}/>
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