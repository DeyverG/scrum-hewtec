import React from 'react';
import '../assets/styles/login.css';
import Footer from '../components/Footer.js'
import Logo4 from "../assets/img/logo4.png";

const Login = () => {
    return (
        <>
            <div className="contenedor_login">

                <div id="Contenedor">
                    
                        <img className="img_logo_login" src={Logo4} alt="" />
                  
                    <div className="ContentForm">
                        <form action="" method="post" name="FormEntrar">
                            <div className="input-group input-group-lg">
                                <span className="input-group-addon" id="sizing-addon1"><i className="glyphicon glyphicon-envelope"></i></span>
                                <input type="email" className="input_login" placeholder="User" required />
                            </div>
                            <br />
                            <div className="input-group input-group-lg">
                                <span className="input-group-addon" id="sizing-addon1"><i className="glyphicon glyphicon-lock"></i></span>
                                <input type="password" className="input_login" placeholder="Password" required />
                            </div>
                            <br />
                            <div className="text_login">
                                <a href="/">Forget your password?</a>
                                <br />
                                <a href="/">Sign up</a>

                            </div>
                            <br />
                            <button className="btn btn_login" id="IngresoLog" type="submit">Login</button>

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;