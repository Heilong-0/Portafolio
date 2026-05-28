import { useNavigate } from "react-router-dom";

function Intro() {
    const navigate = useNavigate();
  return (
    <div className="intro">
        <div className="NavBar">
            <a className="menu" onClick={() => navigate(`/SobreMi`)}>Sobre mi</a>
            <a className="menu" onClick={() => navigate(`/Proyectos`)}>Proyectos</a>
        </div>
        <div className="color1">
        </div>
        <div className="color2">
        </div>
    </div>
  );
}

export default Intro;