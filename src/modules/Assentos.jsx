import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import styled from "styled-components";
import Main from "../components/Main.jsx"
import axios from "axios";
import AssentoCard from "../modules/AssentoCard.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom"


export default function Assentos(props){

    const { idSessao } = useParams();
    const [dados, setDados] = useState(undefined);
    const [selecionados, setSelecionados] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        .then((res) => {
             setDados(res.data);
             console.log("Dados: ");
             console.log(dados);
             console.log(res.data);
        })
    }, []
    );

    function handleSeats(seat) {
        if (seat.isAvailable === false) {
            alert("Esse assento não está disponível")
        } else {
            const isSelected = selecionados.some(s => seat.id === s.id)
            if (isSelected) {
                const newList = selecionados.filter(s => seat.id !== s.id)
                setSelecionados(newList)
            } else {
                setSelecionados([...selecionados, seat])
            }
        };
        console.log(selecionados);
    }

    function postar(e){
       //usenavigate
       e.preventDefault();
       let pedido = {ids: selecionados, name: nome, cpf};
       axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", pedido)
       .then((res) => {
              let done = {...pedido,
                movie: dados.movie.title,
                date: dados.day.date,
                hour: dados.name,
                };
                props.setSucesso({...done});
                setSelecionados([]);
                navigate("/sucesso");
       })
       .catch(err => alert(err.response.data));

    }

    function definirnome(e){
        setNome(e.target.value);
    }

    function definircpf(e){
        setCPF(e.target.value);
    }

    if(!dados){
        return(
            <h1>Carregando...</h1>
        )
    }

    return(
        <>
        <Header>CINEFLEX</Header>
        <Main>
            <h1>Selecione o(s) assento(s)</h1>
            <AssentosContainer>
            {dados.seats.map((a) => {
                return(
                     <AssentoCard id={a.id} 
                     disponivel={a.isAvailable} 
                     selecionados={selecionados} 
                     handleSeats={handleSeats}
                     seat={a}
                     isSelected={selecionados.some(s => a.id === s.id)}
                     />
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
gap: 5px;
flex-wrap: wrap;
justify-content: center;
margin-bottom: 25px;
`
const Dados = styled.form`
display: flex;
flex-direction: column;
width: 80%;
gap: 7px;
margin-bottom: 25px;

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
