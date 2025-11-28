import React, { use } from "react";
import './Apresentacao.css';
import { useNavigate } from "react-router-dom";
import imagemApresentacao from '../Imagens/Imagem_inicial.png';


function Apresentacao(){
    const navigate = useNavigate(); 

    function IrParaLogin(){
        navigate('/Login')
    }

    function IrParaCadastro(){
        navigate('/Cadastro')
    }

    return(
        <div className="body">
            <div className="imgApresentacao">
                <img src={imagemApresentacao} alt='Imagem ilustrativa de nosso produto.'/>
            </div>

            <div className="textoApresentacao">
                <div className="titulo">
                    <h1>Bem vindo à <a className="destaque">Tempfy</a></h1> 
                </div>

                <p>Neste aplicativo você poderá controlar seus aparelhos <a className="destaque">Temp Monitors.</a> <br />
                Para começar, clique em <a className="destaque">“Login”</a> caso já possua uma conta ou em <a className="destaque">“Cadastrar”</a> para criar uma.</p>
            </div>

            <div className="btns">
                <button onClick={IrParaLogin}>Login</button> <br/>
                <button onClick={IrParaCadastro}>Cadastrar</button>
            </div>
        </div>
    )

}

export default Apresentacao;