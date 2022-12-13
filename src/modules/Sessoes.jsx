import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import styled from "styled-components";
import Main from "../components/Main.jsx"
import axios from "axios";
import Footer from "../components/Footer.jsx"
import SessaoCard from "../modules/SessaoCard.jsx"


export default function Sessoes(){

    const { idFilme } = useParams();
    const [sessoes, setSessoes] = useState(undefined)

    useEffect(
        () => {
            axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then((res) => {
                console.log("Sessoes");
                console.log(res.data);
                setSessoes(res.data);
                
            })
            .catch(err => console.log(err.response.data));
        }, []
    );

    if (!sessoes) {
        return <div>Carregando...</div>
    };

    return(
        <>
        <Header />
        <Main>
            <SessoesContainer>
                <h1>Selecione o Horário</h1>
                {
                    sessoes.days.map(
                        (s) => {
                            return(
                                <SessaoCard semana={s.weekday} data={s.date} horarios={s.showtimes} />
                            )
                        }
                    )
                }
            </SessoesContainer>
        </Main>
        <Footer>
            <img src={sessoes.posterURL} />
            <h2>{sessoes.title}</h2>
        </Footer>
        </>
    )
};

const SessoesContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;

h1{
    height: 98px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #293845;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
}
`

