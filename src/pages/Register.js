import React from 'react';
import '../assets/styles/register.css';
import Logo4 from "../assets/img/logo4.png";
import Footer from '../components/Footer'

const Register = () => {
    return ( 
         <>
            <div className="contenedor_Register">

                <div id="Register">
                    
                        <img className="img_logo_Register" src={Logo4} alt="" />
                  
                    <div className="ContentForm">
                        <form action="" method="post" name="FormEntrar">
                        <div className="input-group input-group-lg">
                                <span className="input-group-addon" id="sizing-addon1"><i className="glyphicon glyphicon-envelope"></i></span>
                                <input type="text" className="input_Register" placeholder="Name" required />
                            </div>
                            <br/>
                            <div className="input-group input-group-lg">
                                <span className="input-group-addon" id="sizing-addon1"><i className="glyphicon glyphicon-envelope"></i></span>
                                <input type="email" className="input_Register" placeholder="Email" required />
                            </div>
                            <br />
                            <div className="input-group input-group-lg">
                                <span className="input-group-addon" id="sizing-addon1"><i className="glyphicon glyphicon-lock"></i></span>
                                <input type="password" className="input_Register" placeholder="Password" required />
                            </div>
                            <br />
                            <div className="input-group input-group-lg">
                                <span className="input-group-addon" id="sizing-addon1"><i className="glyphicon glyphicon-lock"></i></span>
                                <input type="password" className="input_Register" placeholder="Confirm Password" required />
                            </div>
                           
                            <br />
                            <button className="btn btn_Register" id="IngresoLog" type="submit">Register</button>
                            <br />
                                <a href="/">Sign up</a>
                     
                       </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default Register;