import './Produtos.css';
import { useNavigate } from "react-router-dom";
import React, { use } from "react";
import Cabecalho from '../Componentes/Cabecalho';


function Produtos() {
    const navigate = useNavigate();

    function IrParaPlanoUm() {
        navigate('/PlanoUm')
    }

    function IrParaPlanoDois() {
        navigate('/PlanoDois')
    }

    return (
        <div className='telaProdutos'>
            <Cabecalho />

            <h1>Escolha seu plano</h1>

            <div className='planoUm' onClick={IrParaPlanoUm}>
                <div className='tituloPlanoUm'>
                    <p>Plano 1 - Um aparelho Temp Monitor</p>
                    <h2>R$ 50,00</h2>
                </div>

                <div className='descPlanoUm'>
                    <p>Neste plano está incluso um aparelho Temp Monitor, o serviço de entrega e de instalação do mesmo.</p>
                </div>
            </div>

            <div className='planoDois' onClick={IrParaPlanoDois}>
                <div className='tituloPlanoDois'>
                    <p>Plano 2 - Dois aprelhos Temp Monitor</p>
                    <h2>R$ 70,00</h2>
                </div>

                <div className='descPlanoDois'>
                    <p>Neste plano estão inclusos dois aparelhos Temp Monitor, o serviço de entrega e de instalação dos mesmos.</p>
                </div>
            </div>
        </div>
    )
}

export default Produtos;