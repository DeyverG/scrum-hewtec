import React, { useEffect, useState } from 'react';
import '../assets/styles/editProject.css';
import Header from '../components/Header';
import Collaborator from '../components/Collaborator';

const EditProject = ({history}) => {

    const [editProject, setEditProject] = useState({
        id:'',
        name:'',
        description:''
    })

    const getIdProject = () => {
        const getId = JSON.parse(localStorage.getItem('projectON'));
        setEditProject(getId);
    }

    const handleChange = e => {
        setEditProject({
            ...editProject,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        const getProjects = JSON.parse(localStorage.getItem('projects'));
        
        const change = getProjects.map(project => project.id === editProject.id 
            ?
                editProject
            :
                project
            );
        localStorage.setItem('projects', JSON.stringify(change));
        localStorage.setItem('projectON', JSON.stringify(editProject));
        history.push('/ProjectView');
    }

    const consultaLogin = async () => {
        const peticion = await JSON.parse(localStorage.getItem("userActive"));
        if (!peticion) {
            history.push("/")
        }
    }

    useEffect(() => {
        getIdProject();
        consultaLogin();
    }, [])

    return ( 
        <>
        <Header />
        <form>
            <div className="containerEditPro" >
                <div className="row modalEditPro" >
                    <div className="form-group col-md-6" >
                        <h5 className="titleEditPro" >Project Name</h5>
                        <div className="input-group mb-3" >
                            <input type="text" className="form-control inputEditPro" value={editProject.name} name="name" onChange={handleChange} ></input>
                            <div className="input-group-append iconoEditPro" >
                                <span className="input-group-text spanEditPro" ><i className="fas fa-edit"></i></span>
                            </div>
                        </div>
                        <h5 className="titleEditPro" >Description</h5>
                        <textarea className="form-control textEditPro" value={editProject.description} name="description" onChange={handleChange} ></textarea>
                        <div className="divButtonEditPro" >
                            <button type="button" className="btn btn-primary buttonEditPro" onClick={handleSubmit} >Save</button>
                        </div>
                    </div>
                    <div className="form-group col-md-6" >
                        <h5 className="titleEditPro" >Collaborators</h5>
                        <div className="collEditPro scrollDiv" >
                            <Collaborator />
                            <Collaborator />
                            <Collaborator />
                            <Collaborator />
                            <Collaborator />
                            <Collaborator />
                            <Collaborator />
                            <Collaborator />
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
     );
}
 
export default EditProject;