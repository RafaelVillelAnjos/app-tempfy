import React from "react";
import './Login.css';

function Login(){
    function LoginUsuario(){

    }

    return(
        <div className="loginPage">
            <div className="tituloLogin"> 
                <h1>Faça seu Login</h1>
                <p>Preencha os campos abaixo para entrar na sua conta.</p>
            </div>
            
            <div className="inputsLogin">
                <input type="text" id="email" placeholder="Email"/> <br />
                <input type="password" id="senha" placeholder="Senha"/>
                <br />
                <a>Não possuo uma conta.</a>
            </div>

            <button className="btnEntrar" onClick={LoginUsuario}>Entrar</button>
        </div>
    )
}

export default Login;