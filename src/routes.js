import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import './index.css';
//API Key:   cd79deaf08c6eb7b337d1eae83cc1d3f
import Header from "./components/Header";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Error from "./pages/Error";
import Favoritos from "./pages/Favoritos";

function RoutesApp() {
    return(
        <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/filme/:id" element={<Filme></Filme>} />
            <Route path="/favoritos/" element={<Favoritos></Favoritos>} />


            
            <Route path="*" element={<Error></Error>} />
        </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;