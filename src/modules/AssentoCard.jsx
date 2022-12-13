import useState from "react";
import styled from "styled-components";

export default function AssentoCard(props) {
    const [selecionado, setSelecionado] = useState(false);

    function selecionar(e){
        if(props.disponivel){
            if(!selecionado){
                setSelecionado(true);
                props.setSelecionados([...props.selecionados, e.target.textContent]);
            }
            else{
                setSelecionado(false);
                let filtrado = [...props.selecionados];
                filtrado.filter((e) => {
                    if(e === e.target.textContent){
                        return false;
                    }
                    else{
                        return true;
                    }
                })
                //talvez aqui complique o useeffect
                props.setSelecionados([...filtrado]);
                
            }
        }
    }

    return(
        <>
        <Assento selecionado={selecionado} disponivel={props.disponivel}>{props.id}</Assento>
        </>
    )


}

const Assento=styled.button`
background: ${(props) => !props.disponivel ? "#FBE192" : (props.disponivel && props.selecionado ? "#1AAE9E" : "#C3CFD9")};
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #000000;
width: 6.4%
height: 6.4%;
border: 1px solid #0E7D71;
border-radius: 17px;
`