function AssentoCard(props) {
    const [selecionado, setSelecionado] = useState(false);

    function selecionar(e){
        if(props.disponivel){
            if(!selecionado){
                setSelecionado(true);
                props.setAssentos([...assentos, e.target.textContent]);
            }
            else{
                setSelecionado(false);
                let filtrado = [...props.assentos];
                filtrado.filter((e) => {
                    if(e === e.target.textContent){
                        return false;
                    }
                    else{
                        return true;
                    }
                })
                props.setAssentos([...filtrado]);
                
            }
        }
    }

    return(
        <>
        <Assento selecionado={selecionado}>{props.id}</Assento>
        </>
    )


}