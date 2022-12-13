import { useState, useEffect } from "react";
import styled from "styled-components";
import seatColors from "./seatColors.jsx"

export default function AssentoCard({ seat, handleSeats, isSelected }) {
    const [selecionado, setSelecionado] = useState("selected");

    useEffect(() => {
        if (isSelected) {
            setSelecionado("selected")
        } else if (seat.isAvailable) {
            setSelecionado("available")
        } else {
            setSelecionado("unavailable")
        };
    }, [isSelected, selecionado]);


    return(
        <>
        <Assento status={selecionado}  onClick={() => handleSeats(seat)}>{seat.name}</Assento>
        </>
    )


}

const Assento=styled.button`
border: 1px solid ${props => seatColors[props.status].border};
background-color: ${props => seatColors[props.status].background};
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #000000;
height: 25px;
width: 25px;
border-radius: 25px;
border: 1px solid #0E7D71;
margin-bottom: 5px;
`
/*
function selecionar(e){
    console.log(props.selecionados);
    if(props.disponivel){
        if(!selecionado){
            setSelecionado(true);
            let nextselecionados = [...props.selecionados, e.target.textContent];
            console.log(nextselecionados);
            if(!props.selecionados.includes(e.target.textContent)){
                props.setSelecionados([...nextselecionados]);
            }
        }
        else{
            setSelecionado(false);
            let filtrado = [...props.selecionados];
            const tem = (elemento) => e === e.target.textContent;
            if(filtrado.some(tem)){
                for(const i in filtrado){
                    if(filtrado[i] === e.target.textContent){
                        filtrado.splice(i,1);
                    }
                }
            };
            props.setSelecionados([...filtrado]);
            
        }
    }
}
*/