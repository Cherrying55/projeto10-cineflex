import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import styled from "styled-components";
import Main from "../components/Main.jsx"
import axios from "axios";
import AssentoCard from "../modules/AssentoCard.jsx";
import Footer from "../components/Footer.jsx";


export default function Assentos(props){

    const { idSessao } = useParams();
    const [dados, setDados] = useState([]);
    const [selecionados, setSelecionados] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        .then((res) => {
             setDados(res.data);
             console.log("Dados: ");
             console.log(dados);
        })
    }, []
    )

    function postar(e){
       //usenavigate
       e.preventDefault();
       let pedido = {selecionados, nome, cpf};
       const req = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", pedido)
       req.then((res) => {
              let done = {...pedido,
                filme: dados.movie.title,
                diasemana: dados.day.weekday,
                horario: dados.name,
                };
                props.setSucesso({...done});
                //useNavigate
       }
       )
    }

    function definirnome(e){
        setNome(e.target.value);
    }

    function definircpf(e){
        setCPF(e.target.value);
    }

    return(
        <>
        <Header/>
        <Main>
            <h1>Selecione o(s) assento(s)</h1>
            <AssentosContainer>
            {dados.seats.map((a) => {
                return(
                     <AssentoCard id={a.id} disponivel={a.isAvailable} selecionados={selecionados} setSelecionados={setSelecionados}/>
                )
            })}
            </AssentosContainer>
            <Dados onSubmit={postar}>
                <label htmlFor='nome'>
                    Nome do comprador:
                    <input type="text" name="nome" onChange={definirnome} placeholder="Digite seu nome..." />
                </label>
                <label htmlFor='cpf'>
                    CPF do comprador:
                    <input type="text" name="cpf" onChange={definircpf} placeholder="Digite seu CPF..."/>
                </label>
            </Dados>
            <button>Reservar assento(s)</button>
        </Main>
        <Footer>
                <img src={dados.movie.posterURL} />
                <div>
                    <h2>{dados.movie.title}</h2>
                    <h2>{dados.day.weekday} - {dados.day.date}</h2>
                </div>
        </Footer>
        </>
    )
};


const AssentosContainer = styled.div`
width: 80%;
display: flex;
gap: 4%;
flex-wrap: wrap;
`
const Dados = styled.form`
display: flex;
flex-direction: column;
width: 80%;
gap: 7px;

label{
 display: flex;
 flex-direction: column;
 font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #293845;
width: 100%;
}

input{
    width: 100%;
    background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 3px;
height: 51px;
display: flex;
align-items: center;
padding-left: 18px;
font-family: 'Roboto';
font-style: italic;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #AFAFAF;
}
`

//form styled

