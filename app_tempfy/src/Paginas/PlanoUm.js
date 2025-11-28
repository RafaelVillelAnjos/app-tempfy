import './Planos.css';
import { useNavigate } from "react-router-dom";
import React, { use } from "react";
import ImgProduto from '../Imagens/Temp-Monitor.png';
import Cabecalho from '../Componentes/Cabecalho';

function PlanoUm() {
    const navigate = useNavigate();

    function VoltarPgProdutos(){
        navigate('/Produtos')    
    }

    return (
        <div className='telaPlanoUm'>
            <Cabecalho />
            <h1 className='tituloTelaProdutoUm'>Um aparelho <br />Temp Monitor</h1>

            <div className='areaProduto'>
                <div className='imgProduto'>
                    <img src={ImgProduto} alt='Foto de nosso produto: o Temp Monitor' />
                </div>

                <div className='descProduto'>
                    <h2 id='precoProduto'>R$ 50,00</h2>
                    <p>Neste plano está incluso um aparelho Temp Monitor, o serviço de entrega e de instalação do mesmo.</p>
                </div>
            </div>

            <div className='areaPagamento'>
                <div className='formaQuantidade'>
                    <select className='formaPagemento'>
                        <option selected disabled>Formas de pagamento</option>
                        <option>Pix</option>
                        <option>Cartão de crédito</option>
                        <option>Boleto</option>
                    </select>

                    <div className='btnQuantidade'>
                        <button>-</button>
                        <span id='quantidade'>1</span>
                        <button>+</button>
                    </div>
                </div>

                <button className='btnComprar'>Comprar</button> <br />
                <button className='btnVoltarPlanoUm' onClick={VoltarPgProdutos}>Voltar</button>
            </div>
        </div>
    )
}

export default PlanoUm;

