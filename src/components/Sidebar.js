import React, { useEffect, useState } from "react";
import "../assets/styles/sidebar.css";
import Avatar from "../assets/img/avatar.png";
import Off from "../assets/img/off.png";
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

const Sidebar = () => {
  const [user, setUser] = useState({ name: '', img: Avatar })
  const consultaLogin = async () => {
    const peticion = await JSON.parse(localStorage.getItem("userActive"));
    if(!peticion){
      return
    }
    setUser(peticion)
  }
   
  useEffect(() => {
    consultaLogin();

  }, [])

  const logout = (response) => {
    localStorage.setItem('userActive', '{}');
  }
  
  return (
    <>
      <div className="contenido_Sidebar">
        <div className="sidebar1">
          <div className="admin1">
            <img className="imgavatar" src={user.img} alt="" />
            <Link to="/EditUser" >
              <h5 className="colorUserName" >{user.name}</h5>
            </Link>
            <h2 className="subtitulo">
              <span></span>
            </h2>
          </div>

          <div className="avatar1">
            <div className="opcion-text">
              <Link to="/MyProjects" className="links_sidebar" >
                <h6 className="nav-link links_sidebar" id="op-1">
                  <i className="fas fa-folder"></i>My Projects
                </h6>
              </Link>
              <Link to="/MyProjects" className="links_sidebar" >
                <h6 className="nav-link links_sidebar" >
                  <i className="fas fa-users"></i>Colaborations
                </h6>
              </Link>

              <Link to="/Notifications" className="links_sidebar">
                <h6 className="nav-link links_sidebar" >
                  <i className="fas fa-bell"></i>Notifications
                </h6>
              </Link>

            </div>
          </div>

          <Link to="/" >
            <GoogleLogout
              clientId="645911758856-jaj7n3f3ct0ubjb48v5vo3303lf7ae2e.apps.googleusercontent.com"
              render={renderProps => (
                <button className="logoutGoogle" onClick={renderProps.onClick} disabled={renderProps.disabled}><img className="off" src={Off} alt="" /></button>
              )}
              onLogoutSuccess={logout}
            >
            </GoogleLogout>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
