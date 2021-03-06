import React, { useEffect } from 'react';
import '../assets/styles/editUser.css';
import Header from '../components/Header';

const EditUser = ({ history }) => {
  
  const consultaLogin = async () => {
    const peticion = await JSON.parse(localStorage.getItem("userActive"));
    if (!peticion) {
      history.push("/")
    }
  }

  useEffect(() => {
    consultaLogin();
  }, [])

  return (
    <>
      <Header />
      <div className="contenido2">
       

        <div className="editar_Usuario">

          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
              <div className="mensaje">
                <p>To save the changes onter the old password</p>
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Old Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>

            <button type="submit" className="btn botton_Edit">
              Save Changes
          </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
