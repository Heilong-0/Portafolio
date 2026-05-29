import { useNavigate } from "react-router-dom";
import { Undo2 } from 'lucide-react';
import {useEffect, useState} from "react";
const descripcion = "Soy una desarrolladora apasionada por la tecnología y el diseño, con experiencia en frontend y backend. Me encanta crear experiencias digitales y soluciones innovadoras."

function SobreMi() {
    const navigate = useNavigate();
    const [texto, setTexto] = useState("");
    const [indice, setIndice] = useState(0);
    useEffect(() => {
        if (indice < descripcion.length) {
             const timeout = setTimeout(() => {
                 setTexto(descripcion.slice(0, indice + 1));
                 setIndice(prev => prev + 1);
                 }, 38);
                  return () => clearTimeout(timeout);
    }
  }, [indice]);
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
         <div className="color1" id="sobreColor1">
        </div>
        <div className="color2" id="sobreColor2">
          <div className="texto-SobreMi">
           <h1 className= "Titulo-SobreMi"data-text="<SOBRE_MI />">
            &lt;SOBRE_MI /&gt;
          </h1>
          <p className="Subtitulo-SobreMi">&gt; Cargando datos...</p>
          <pre className="Texto-Animado">
            {texto}<span className="cursor">█</span>
          </pre>

        </div>
      </div>

      <div className="Linea"></div>
    </div>
  );
}

export default SobreMi;