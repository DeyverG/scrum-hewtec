import React from "react";
import "../assets/styles/sidebar.css";
import Avatar from "../assets/img/avatar.png";
import Off from "../assets/img/off.png";

const Sidebar = () => {
  return (
    <>
    <input type="checkbox" id="check"></input>
    <label for="check">
    <i className="fas fa-bars iconoHeader" id="sidebar_btn"  ></i>
    </label>
     
      <div className="contenido_Sildebar">
        <div className="sildebar1">
          <div className="admin1">
            <img className="imgavatar" src={Avatar} alt="" />
            <h5>Alejandra Jaimes</h5>
            <h2 className="subtitulo">
              <span></span>
            </h2>
          </div>

          <div className="avatar1">
            <div className="opcion-text">
              <a href="/" className="links_sidebar">
              <h6 className="nav-link links_sidebar" id="op-1">
                <i className="fas fa-folder"></i>My Projects
              </h6>
              </a>
              <a href="/" className="links_sidebar">
              <h6 className="nav-link links_sidebar" >
                <i className="fas fa-users"></i>Colaborations
              </h6>
              </a>

              <a href="/" className="links_sidebar">
              <h6 className="nav-link links_sidebar" >
                <i className="fas fa-bell"></i>Notifications
              </h6>
              </a>           
              
            </div>
          </div>

          <img className="off" src={Off} alt="" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
