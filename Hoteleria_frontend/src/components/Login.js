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
          <div className="software text-white col-6 min-vh-100 text-white d-flex align-items-center justify-content-center flex-column info">

            <h4 class="text-white mb-4">Bienvenidos de nuevo a tu</h4>
            <h1 class="text-white mb-4">SOFTWARE DE HOTELERÍA</h1>
            <h4 class="text-white">Bienvenidos de nuevo a tu</h4>
            
          </div>



          <div className="login col-6 text-black d-flex align-items-center justify-content-center flex-column">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="text-center">

                  <img src={Senalogo} width="30px" height="30px"></img>
                  <p>Regional tolima</p>
                  <br />
                  
                  <br />
                  <h2>Iniciar sesión</h2>

                  <p>Inicia sesion con tu cuenta asignada por el instructor de proyecto</p>
                  <br />
                </div>
                <label>Email:</label>
                <input className="border-top-0 border-end-0 border-start-0"
                
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  
                />
              </div>
              <div>
                <label>Contraseña:</label>

                <input className="border-top-0 border-end-0 border-start-0   class='bi bi-eye-slash'" 
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  />
                  <i class="bi bi-eye-slash"></i>
              </div>
              <br />
              <button type="submit" href="/">Ingresar</button>
            </form>
          </div>
        </div>

  );
}

export default Login;
