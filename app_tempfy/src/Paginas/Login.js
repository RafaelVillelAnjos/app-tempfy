import React from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
                <Link to='/Cadastro' className="linkCadastro">
                    Não possuo uma conta
                </Link>
            </div>

            <button className="btnEntrar" onClick={LoginUsuario} id="btnLogarUser">Entrar</button>
        </div>
    )
}

export default Login;