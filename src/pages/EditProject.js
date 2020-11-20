import React from 'react';
import '../assets/styles/editProject.css';
import Header from '../components/Header';
import Collaborator from '../components/Collaborator';

const EditProject = () => {
    return ( 
        <>
        <Header />
        <form>
            <div className="containerEditPro" >
                <div className="row modalEditPro" >
                    <div className="form-group col-md-6" >
                        <h5 className="titleEditPro" >Project Name</h5>
                        <div className="input-group mb-3" >
                            <input type="text" className="form-control inputEditPro" ></input>
                            <div className="input-group-append iconoEditPro" >
                                <span className="input-group-text spanEditPro" ><i className="fas fa-edit"></i></span>
                            </div>
                        </div>
                        <h5 className="titleEditPro" >Description</h5>
                        <textarea className="form-control textEditPro" ></textarea>
                        <div className="divButtonEditPro" >
                            <button className="btn btn-primary buttonEditPro" >Save</button>
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