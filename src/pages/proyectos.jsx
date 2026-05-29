import { useNavigate } from "react-router-dom";
import { Undo2 } from 'lucide-react';

function Proyectos() {
    const navigate = useNavigate();
  return (
    <div className="intro">
        <div className="NavBar NavBarInter">
            <Undo2 className="flecha" onClick={() => navigate(`/`)}/>
            <div className="links">
                <a className="menu" onClick={() => navigate(`/SobreMi`)}>Sobre mi</a>
                <a className="menu" onClick={() => navigate(`/Proyectos`)}>Proyectos</a>
                <a className="menu" onClick={() => navigate("/Contacto")}>Contáctame</a>
            </div>
        </div>
        <div className="color1" id="proyColor1"></div>
        <div className="color2" id="proyColor2"></div>
    </div>
  );
}

export default Proyectos;