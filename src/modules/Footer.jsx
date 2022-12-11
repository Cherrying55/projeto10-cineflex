export default function Footer(props){
    return(
        <FooterStyle>
            <img src={props.img} />
            <h2>{props.titulo}</h2>
        </FooterStyle>
    )
}