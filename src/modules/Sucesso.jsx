import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Main from "../components/Main.jsx"
import axios from "axios";
import { Footer } from "../components/Footer.jsx"



export default function Sucesso(props){
    
   const dados = props.sucesso;

   return(
    <>
    <Header />
    <Main>
        <div>Pedido feito com sucesso</div>
        <SucessoContainer>
            <div>
                <h1>Filme e sessão</h1>
                <h4>{dados.filme}</h4>
                <h4>{dados.diasemana} {dados.horario}</h4>
            </div>
            <div>
                <h1>Ingressos</h1>
                {dados.selecionados.map(
                    (i) => {
                        return(
                            <h4>{i}</h4>
                        )
                    }
                )}
            </div>
            <div>
                <h1>Comprador</h1>
                <h4>Nome: {dados.nome}</h4>
                <h4>CPF: {dados.cpf}</h4>
            </div>
        </SucessoContainer>
        <Link to="/">
        <button>Voltar para home</button>
        </Link>
    </Main>
    </>
   )
}

const SucessoContainer = styled.div``