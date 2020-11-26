import React from 'react';
import '../assets/styles/collaborator.css';

const Collaborator = () => {
    return ( 
        <>
        <div className="fondoCollaborator" >
            <i className="fas fa-user iconUserColl"></i>
            <p className="emailCollaborator" >mail@gmail.com</p>
            <i className="fas fa-trash iconTrashColl"></i>
        </div>
        </>
     );
}
 
export default Collaborator;