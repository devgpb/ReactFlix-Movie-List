import { Link } from "react-router-dom";
import "./error.css"


function Error(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Página Não encontrada!</h2>
            <Link to="/" >Veja Os Filmes do Nosso Site!</Link>
        </div>
    );
}

export default Error;