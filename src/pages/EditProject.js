import React from 'react';
import '../assets/styles/editProject.css';

const EditProject = () => {
    return ( 
        <>
        <div className="containerEditPro" >
            <div className="modalEditPro" >
                <div className="divH1EditPro" >
                    <h2>Project Name</h2>
                    <input></input>
                    <input></input>
                </div>
                <div className="divH2EditPro" >
                    <h2>Collaborators</h2>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default EditProject;