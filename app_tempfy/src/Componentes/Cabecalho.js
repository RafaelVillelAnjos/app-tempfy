import './Cabecalho.css';
import Logo from '../Imagens/Logo-Tempfy.png';
import React, { use } from "react";
import { useNavigate } from "react-router-dom";
function Cabecalho() {


    return (
        <header className='cabecalho'>
            <div className='logoTempfy'>
                <img src={Logo} alt='Logo da empresa Tempfy' />
            </div>

            <div className="btnInfoUser">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
            </div>

        </header>
    );
}

export default Cabecalho;