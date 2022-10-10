import { useEffect,useState } from "react";
import {useParams,useNavigate, Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import api from "../../services/api";
import "./filme.css";


function Filme(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme,setFilme] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`movie/${id}`,{
                params:{
                    api_key:"cd79deaf08c6eb7b337d1eae83cc1d3f",
                    language:"pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data)
                // console.log(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("Sem Filme")
                navigate("/",{replace: true})
                return
            })
        }

        loadFilme();

        return () => {
            console.log('Conponente desmontado')
        }
    }, [navigate,id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@reactflix");
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((salvo)=> salvo.id === filme.id)
        if(hasFilme){
            toast.warn("Esse Filme já está na sua lista!")
            return
        }
        filmesSalvos.push(filme);
        localStorage.setItem("@reactflix",JSON.stringify(filmesSalvos))
        toast.success("Filme Salvo com sucesso");
        
    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando Detalhes...</h1>
            </div>
        );
    }


    return(
        <div className="filme-info">
            <Link className="exit" to={"/"}>x</Link>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} ></img>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average}/10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button><a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`} >Trailer</a></button>
            </div>
        </div>
    );
}

export default Filme;