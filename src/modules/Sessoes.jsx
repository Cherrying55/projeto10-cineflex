import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function Sessoes(){

    const { idFilme } = useParams();

    const [sessoes, setSessoes] = useState([]);

    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);

        req.then((res) => {
             setSessoes(res.data)
        })
    }, [])

    

    return(
        <Main>
            <SessoesContainer>
                <h1>Selecione o Horário</h1>
                {
                    sessoes.days.map(
                        (s) => {
                            return(
                                <SessaoCard semana={s.weekday} data={s.date} horarios={s.showtime} />
                            )
                        }
                    )
                }
            </SessoesContainer>
        </Main>
    )
};

//Horario styleddiv