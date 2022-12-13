import Sessoes from "./modules/Sessoes.jsx";
import { BrowserRouter, Routes , Route, Link } from "react-router-dom"
import { useState } from "react";
import Filmes from "./modules/Filmes.jsx";
import Assentos from "./modules/Assentos.jsx";
import Sucesso from "./modules/Sucesso.jsx";
import GlobalStyle from "./GlobalStyle";

export default function App(){

    const [sucesso, setSucesso] = useState({});

    return(
        <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/sessoes/:idFilme" element={<Sessoes />} />
                <Route path="/assentos/:idSessao" element={<Assentos setSucesso = {setSucesso} />} />
                <Route path="/sucesso" element={<Sucesso sucesso={sucesso}/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}