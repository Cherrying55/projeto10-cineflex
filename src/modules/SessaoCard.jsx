import styled from "styled-components";
import { Link } from "react-router-dom";


export default function SessaoCard (props) {
    return(
        <SessaoStyled>
        <h2>{props.semana} - {props.data}</h2>
        <ButtonContainer>
        {
           props.horarios.map(
                (h) => {
                    return(
                        <Link to={`/${h.id}/seats`}>
                        <button>{h.name}</button>
                        </Link>
                    )
                }
            )
        }
        </ButtonContainer>
        </SessaoStyled>
    )
};

const SessaoStyled = styled.div`
h2{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: #293845;
}
`

const ButtonContainer = styled.div`
display: flex;
gap: 8px;

button{
    color: #FFFFFF;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background: #E8833A;
border-radius: 3px;
width: 82px;
height: 43px;
}
`
