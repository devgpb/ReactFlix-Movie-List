import './header.css';
import logo from './ReactFlix.svg'
import { Link } from 'react-router-dom'; 

function Header(){
    return(
        <header>
            <Link className='logo' to="/"><img src={logo} alt="logo"></img>React Flix</Link>
            <Link className='favoritos' to="/favoritos">Filmes Salvos</Link>

        </header>
    );
}
export default Header;