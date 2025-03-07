import React, { useState } from 'react';

import "./Login.css"; // Importar el archivo CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Senalogo from '../images/LogoSena.png'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos de inicio de sesión al servidor o realizar cualquier otra acción que desees.
    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  return (
        
        <div className="col-12 row">
          
          <div className="software text-white col-6 min-vh-100 text-white align-items-center justify-content-center flex-column info">
            
            <h4 class="text-white mb-4">Bienvenidos de nuevo a tu</h4>
            <h1 class="text-white mb-4">SOFTWARE DE HOTELERÍA</h1>
            <h4 class="text-white ">Aprendiz del SENA</h4>

          </div>

          <div className="pp-5 login col-6 text-black d-flex align-items-center justify-content-center flex-column">
            <form onSubmit={handleSubmit}>
              <div className=''>
                <div className="text-center">

                  <img src={Senalogo} alt='LogoSena' width="50px" height="50px"></img>
                  <p>Regional tolima</p>
                  <br /><br />
                  <h2>Iniciar sesión</h2>
                  <p>Inicia sesión con tu cuenta asignada</p>
                  <p> por el instructor de proyecto</p>
                  <p></p>
                  <br />

                </div>
                <div className='col-12 pp-5'>
                    <div className='col-12'>
                      <label className='text-start w-100'>Email:</label>
                      <div>
                        <input className="border-top-0 border-end-0 border-start-0 justify-content-center"
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                          required/>
                      </div>
                    </div>
                    
                    <div className='col-12' >
                      <label>Contraseña:</label>

                      <input className="border-top-0 border-end-0 border-start-0" 
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                      />
                    </div>
                    <br />
                    <div className='col-12 d-flex justify-content-center text-center'>
                      <button className='col-8' type="submit" href="/">Ingresar</button>
                    </div>
                    <br /><br />
                    <div className='text-center'  >
                      <p className='pie mt-5' >Proyecto de Hotelería</p>
                    </div>
                </div>
              </div>
            </form>
          </div>
        </div>

  );
}

export default Login;
