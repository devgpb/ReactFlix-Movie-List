import './favoritos.css';

import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';

function Favoritos(){
    const [filmes,setFilmes] = useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@reactflix");
        setFilmes(JSON.parse(minhaLista) || []);


    },[])

    function excluirFilme(id){
        let filtro = filmes.filter((item)=>{
            return (item.id !== id)
        })

        setFilmes(filtro);
        localStorage.setItem("@reactflix",JSON.stringify(filtro))
        toast.warn("Filme Excluído!");
    }

    return(
        <div className='fav'>
            <h1>Meus Filmes Favoritos</h1>

            <ul>
            {filmes.length === 0 && <span className='nofil'>Você não possui nenhum filme salvo</span>}
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div className='details'>
                                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                <button onClick={()=> excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Favoritos;