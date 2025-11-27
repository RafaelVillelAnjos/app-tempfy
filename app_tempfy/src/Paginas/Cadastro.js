import './Cadastro.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Cadastro(){
    return(
        <div className='telaCadastro'>
            <div className='tituloCadastro'>
                <h1>Crie uma conta</h1>
                <p>Preencha os campos abaixo para criar sua conta.</p>
            </div>

            <div className='inputsCadastro'>
                <input type='text' id='nome' placeholder='Nome'></input> <br />
                <input type='text' id='email' placeholder='Email'></input> <br />
                <input type='password' id='senha' placeholder='Senha'></input> <br />
                <input type='password' id='confirmSenha' placeholder='Confirma a senha'></input> <br />
                <Link to='/Login' className='linkLogin'>
                    Já possuo uma conta
                </Link>
            </div>

            <button className='btnCadastrarUser' id='btnCadastraUser'>Cadastrar-se</button>
        </div>
    )
}

export default Cadastro;