import styled from "styled-components";

export default function Footer(){
    return(
        <FooterStyle>
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
width: 100%;
background: #DFE6ED;
display: flex;
gap: 5%;
align-items: center;
height: 117px;
img{
    width: 48px;
    height: 72px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    border: 8px solid white;
}
h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
}

div{
    display: flex;
    flex-direction: column;
    gap: 2px;
}
`