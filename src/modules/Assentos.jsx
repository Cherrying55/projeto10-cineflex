import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function Assentos(props){

    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        req.then((res) => {
             setAssentos(res.data)
        })
    }, []
    )

    function postar(){
       //usenavigate
       e.preventDefault();
       let pedido = {assentos, nome, cpf};
       const req = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", pedido);
       req.then(
        props.setSucesso({...pedido})
        //useNavigate
       )
    }

    function definirnome(e){
        setNome(e.target.value);
    }

    function definircpf(e){
        setCPF(e.target.value);
    }

    return(
        <Main>
            <h1>Selecione o(s) assento(s)</h1>
            {assentos.seats.map((a) => {
                return(
                     <AssentoCard id={a.id} onClick={selecionar} disponivel={a.isAvailable} assentos={assentos} setAssentos={setAssentos}/>
                )
            })}
            <Dados onSubmit={postar}>
                <input type="text" onChange={definirnome} />
                <input type="text" onChange={definircpf} />
            </Dados>
            <button>Reservar assento(s)</button>

        </Main>
    )
};





//form styled

