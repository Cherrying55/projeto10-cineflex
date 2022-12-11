import Sessoes from "./modules/Sessoes";


export default function App(){

    const [sucesso, setSucesso] = useState({});

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/sessoes/:idFilme" element={<Sessoes />} />
                <Route path="/assentos/:idSessao" element={<Assentos setSucesso = {setSucesso} />} />
                <Route path="/sucesso" element={<Sucesso sucesso={sucesso}/>} />
            </Routes>
        </BrowserRouter>
    )
}