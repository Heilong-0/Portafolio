import { useNavigate } from "react-router-dom";
import { Undo2 } from 'lucide-react';

const Proyectos = [
  {
    titulo: "",
    descripcion: "",
    Programas: [""]
  },
  {
    titulo: "",
    descripcion: "",
    Programas: [""]
  },
];
function Proyectosm() {
  const navigate = useNavigate();

  return (
    <div className="intro">
      <div className="NavBar NavBarInter">
        <Undo2 className="flecha" onClick={() => navigate(`/`)} />
        <div className="links">
          <a className="menu" onClick={() => navigate(`/SobreMi`)}>Sobre mi</a>
          <a className="menu" onClick={() => navigate(`/Proyectos`)}>Proyectos</a>
        </div>
      </div>

      <div className="color1" id="proyColor1"></div>
      <div className="color2" id="proyColor2">
        <div className="Proyectos-Contenido">
          <h1 className="Titulo-Proyectos" data-text="<PROYECTOS />">&lt;PROYECTOS /&gt;</h1>
          <p className="Subtitulo-SobreMi">&gt; Mis proyectos...</p>
          <div className="Proyectos-Grid">
            {Proyectos.map((proyecto, i) => (
              <div className="Proyecto-Card" key={i}>
                <h3 className="Proyecto-Titulo">{proyecto.titulo}</h3>
                <p className="Proyecto-Descripcion">{proyecto.descripcion}</p>
                <div className="Proyecto-Tags">
                  {proyecto.Programas.map((tech, j) => (
                    <span className="Proyecto-Tag" key={j}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Proyectosm;