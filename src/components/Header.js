import React from 'react';
import '../assets/styles/header.css'
const Header = () => {
    return (
        <>
            <div className="header">
                <i className="fas fa-bars iconoHeader"></i>
                <div className=" buscador">
                    <div className="iconobuscar form-control">
                        <i className="fas fa-search"></i>
                    </div>
                    <input type="text" className="form-control inputBuscador" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
        </>
    );
}

export default Header;