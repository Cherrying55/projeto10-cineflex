import { useState, useEffect } from 'react';


export default function Filmes(){
    
    const [filmes, setFilmes] = useState([])
    useEffect(
        () => {
            const requisiçao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

            requisicao.then((res) => {
                setFilmes(res.data.message);
            });
        }, []
    );

    return(
        <>
        <Header />
        <Main>
            <h1>Selecione o filme</h1>
            <FilmesContainer>
                {filmes.map(() => {
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
        <Link to={`https://mock-api.driven.com.br/api/v8/cineflex/movies/${props.id}`}>
            <img src={props.img} />
        </Link>
    )
}

const FilmesContainer = styled.div`
width: 80%;
display: flex;
gap: 10%;
flex-wrap: wrap;

img{
    width: 44%;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
}
`

