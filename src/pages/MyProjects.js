import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/styles/myProjects.css';
import Project from '../components/Project';


const MyProjects = () => {
    return (
        <>
            <Header />

            <div className="tamañoProjects scrollDiv">
                <div className="contenedorProject">
                    <div className="project">
                        <p className="fas fa-folder-plus projectName iconoFolder"></p>
                        <p className="projectName createProject">Create Project</p>
                    </div>
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>

            </div>
        </>
    );
}

export default MyProjects;