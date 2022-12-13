import { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Main from "../components/Main.jsx"
import axios from "axios";


export default function Filmes(){
    
    const [filmes, setFilmes] = useState([])
    useEffect(
        () => {
            axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then((res) => {
                setFilmes(res.data);
            })
            .catch(err => console.log(err.response.data));
        }, []
    );

    return(
        <>
        <Header>CINEFLEX</Header>
        <Main>
            <h1>Selecione o filme</h1>
            <FilmesContainer>
                {filmes.map((f) => {
                    return(
                        <FilmeCard id={f.id} img={f.posterURL}></FilmeCard>
                    )
                })}
            </FilmesContainer>
        </Main>
        </>
    )
}

const FilmeCard = (props) => {
    return(
        <Link to={`/sessoes/${props.id}`}>
            <img src={props.img} />
        </Link>
    )
}

const FilmesContainer = styled.div`
width: 80%;
display: flex;
flex-wrap: wrap;
gap: 5%;
justify-content: center;

img{
    width: 100%;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 5%;
}

a{
    width: 41%;
}
`

