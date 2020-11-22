import React from 'react';
import '../assets/styles/login.css';
import Footer from '../components/Footer.js'
import Logo4 from "../assets/img/logo4.png";
import GoogleLogin from 'react-google-login';

const Login = ({history}) => {

   const responseGoogle = (response) => {
      console.log(response);
      localStorage.setItem('userActive', JSON.stringify({
         name: `${response.profileObj.givenName}  ${response.profileObj.familyName}`,
         email: response.profileObj.email,
         img: response.profileObj.imageUrl,
         authenticated: true
      }))
      history.push("/MyProjects")
   }

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
                     <p className="txt_with">Sign in with</p>
                     <hr className="hr_with"/>
                     <GoogleLogin
                        className="btn btn_login_google"
                        clientId="645911758856-jaj7n3f3ct0ubjb48v5vo3303lf7ae2e.apps.googleusercontent.com"
                        buttonText="Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                     />

                  </form>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}

export default Login;