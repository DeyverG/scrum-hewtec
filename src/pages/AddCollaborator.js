import React from 'react';
import '../assets/styles/addCollaborator.css';

const AddCollaborator = () => {
    return ( 
        <>
        <div className="containerAddColl" >
            <div className="modalAddColl" >
                <h2 className="titleAddColl" >Add Collaborator</h2>
                <div className="divInputAddColl" >
                    <p className="pAddColl" >Enter email</p>
                    <input className="inputAddColl" ></input>
                </div>
                <div className="divButtonAddColl" >
                    <button className="btn btn-lg buttonAddColl" ><b>Accept</b></button>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default AddCollaborator;