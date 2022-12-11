

export default function Sucesso(props){
   return(
    <Main>
        <div>Pedido feito com sucesso</div>
        <SucessoContainer>
            <div>
                <h1>Filme e sessão</h1>
                <h4>{props.filme}</h4>
                <h4>{props.diasemana} {props.horario}</h4>
            </div>
            <div>
                <h1>Ingressos</h1>
                {props.ids.map(
                    (i) => {
                        return(
                            <h4>{i}</h4>
                        )
                    }
                )}
            </div>
            <div>
                <h1>Comprador</h1>
                <h4>Nome: {props.nome}</h4>
                <h4>CPF: {props.cpf}</h4>
            </div>
        </SucessoContainer>
        <Link to="/">
        <button>Voltar para home</button>
        </Link>
    </Main>
   )
}