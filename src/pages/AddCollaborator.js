import React from 'react';
import '../assets/styles/addCollaborator.css';
import Header from '../components/Header';

const AddCollaborator = () => {
    return ( 
        <>
        <Header />
        <form>
            <div className="containerAddColl" >
                <div className="modalAddColl" >
                    <h2 className="titleAddColl" >Add Collaborator</h2>
                    <div className="divInputAddColl" >
                        <p className="pAddColl" >Enter email</p>
                        <input className="form-control inputAddColl" ></input>
                    </div>
                    <div className="divButtonAddColl" >
                        <button className="btn btn-primary buttonAddColl" ><b>Accept</b></button>
                    </div>
                </div>
            </div>
        </form>
        </>
     );
}
 
export default AddCollaborator;