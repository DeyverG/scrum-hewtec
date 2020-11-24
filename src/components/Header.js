import React, { useState } from 'react';
import '../assets/styles/header.css'
import Sidebar from '../components/Sidebar'
import { Link, Redirect } from 'react-router-dom';

const Header = ({ bandera }) => {

    return (
        <>
            <div className="header">

                <div class="dropdown">

                    <i data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="fas fa-bars iconoHeader" ></i>

                    <div class="dropdown-menu sildebar_menu" >
                         <Sidebar />

                    </div>
                </div>
                {!bandera
                    ?
                    null
                    :
                    <div className=" buscador">
                        <div className="iconobuscar form-control">
                            <i className="fas fa-search"></i>
                        </div>
                        <input type="text" className="form-control inputBuscador" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                }
            </div>
        </>
    );
}

export default Header;