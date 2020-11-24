import React, { useEffect, useState } from "react";
import "../assets/styles/sidebar.css";
import Avatar from "../assets/img/avatar.png";
import Off from "../assets/img/off.png";
import { Link, Redirect } from 'react-router-dom';

const Sidebar = ({ history }) => {
  const [user, setUser] = useState({ name: '', img: Avatar })
  const consulta = async () => {
    const peticion = await JSON.parse(localStorage.getItem("userActive"));
    if (!peticion) {
      history.push("/")
    }
    setUser(peticion)
  }
  useEffect(() => {
    consulta()

  }, [])
  return (
    <>
      <div className="contenido_Sildebar">
        <div className="sildebar1">
          <div className="admin1">
            <img className="imgavatar" src={user.img} alt="" />
            <h5>{user.name}</h5>
            <h2 className="subtitulo">
              <span></span>
            </h2>
          </div>

          <div className="avatar1">
            <div className="opcion-text">
              <Link to="/MyProjects">
                <a className="links_sidebar">
                  <h6 className="nav-link links_sidebar" id="op-1">
                    <i className="fas fa-folder"></i>My Projects
              </h6>
                </a>
              </Link>
              <Link to="/">
                <a className="links_sidebar">
                  <h6 className="nav-link links_sidebar" >
                    <i className="fas fa-users"></i>Colaborations
              </h6>
                </a>
              </Link>

              <Link to="/">
                <a className="links_sidebar">
                  <h6 className="nav-link links_sidebar" >
                    <i className="fas fa-bell"></i>Notifications
              </h6>
                </a>
              </Link>

            </div>
          </div>

          <img className="off" src={Off} alt="" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
