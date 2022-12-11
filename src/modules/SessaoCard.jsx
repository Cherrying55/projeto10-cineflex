function SessaoCard (props) {
    return(
        <>
        <h2>{props.semana} - {props.data}</h2>
        {
           props.horarios.map(
                (h) => {
                    return(
                        <Link to={`/${h.id}/seats`}>
                        <Horario>{h.name}</Horario>
                        </Link>
                    )
                }
            )
        }
        </>
    )
};