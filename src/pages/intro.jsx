import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Intro() {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const simbolos = ["<",">","//","||","&&","{","}","[","]"];
    const [gotas, setGotas] = useState(
      Array.from({ length: 250 }, () => ({
          simbolo: simbolos[Math.floor(Math.random() * simbolos.length)],
          x: Math.random() * 100,
          y: Math.random() * -100,
          velocidad: Math.random() * 2 + 1,
          color: Math.random() > 0.6 ? 'white' : 'red'
      }))
    );
    const [aniSalir,setAniSalir] = useState(false);
    
    function animacion(ruta){
      setAniSalir(true);
      setTimeout(() => {
        navigate(ruta)
      }, 800);
    }

    useEffect(() => {
      let i=0;
      const intervalo= setInterval(() => {
          setText(prev => prev + "BBackend Developer"[i]);
          i++;
          if(i>= "Backend Developer".length) {
            clearInterval(intervalo);
          }
        }, 200);
      }, []);
    
      useEffect(() => {
        const intervaloGotas = setInterval(() => {
          setGotas(prev => prev.map(gota => ({
            ...gota,
            y: gota.y > 100 ? -10 : gota.y + gota.velocidad
          })));
        }, 50);
        return () => clearInterval(intervaloGotas);
      }, []);
  return (
    <div className="intro">
        <div className="NavBar">
            <a className="menu" onClick={() => animacion("/SobreMi")}>Sobre mi</a>
            <a className="menu" onClick={() => animacion("/Proyectos")}>Proyectos</a>
            <a className="menu" onClick={() => animacion("/Contacto")}>Contáctame</a>
        </div>
        <div className={`color1 ${aniSalir ? 'salir' : ''}`}>
            <div id="colorName"><h1 id="name">Hola, soy Maria</h1></div>
            {gotas.map((gota, index) => (
              <span
                key={index}
                style={{
                  position: 'absolute',
                  left: `${gota.x}%`,
                  top: `${gota.y}%`,
                  color: gota.color,
                  opacity: 0.5,
                  fontSize: '17px',
                  zIndex: 0
                }}
                >
                {gota.simbolo}
              </span>
              ))}
          </div>
        <div className={`color2 ${aniSalir ? 'salir' : ''}`}>
            <h2 id="puesto">{text}</h2>
        </div>
    </div>
  );
}
export default Intro;