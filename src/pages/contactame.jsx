import { useNavigate } from "react-router-dom";
import { Undo2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState, useEffect } from "react";

function Contacto() {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");
    const [celular, setCelular] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [cargo, setCargo] = useState("");
    const [enviado, setEnviado] = useState(false);
    const simbolos = ["<",">","//","||","&&","{","}","[","]"];
    const [gotas, setGotas] = useState(
        Array.from({ length: 700 }, () => ({
            simbolo: simbolos[Math.floor(Math.random() * simbolos.length)],
            x: Math.random() * 100,
            y: Math.random() * -100,
            velocidad: Math.random() * 2 + 1,
            color: Math.random() > 0.2 ? 'rgb(41, 41, 41)' : 'red'
        }))
    );
    useEffect(() => {
        const intervaloGotas = setInterval(() => {
          setGotas(prev => prev.map(gota => ({
            ...gota,
            y: gota.y > 100 ? -10 : gota.y + gota.velocidad
          })));
        }, 50);
        return () => clearInterval(intervaloGotas);
      }, []);

    function handleSubmit() {
        emailjs.send(
            'service_cro2hfq',
            'template_bl0bjqq',
            { nombre, apellidos, correo, celular, empresa, cargo },
            'sA68_rTEpI_Nfj1gM'
        ).then(() => {
            alert('Mensaje enviado!');
        });
    }

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
        <form id="entradas">
            <div className="margen">
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    className="margen-formulario ingreso"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Apellidos" 
                    className="margen-formulario ingreso"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                />
            </div>
            <div className="margen" >
                <input 
                    type="text" 
                    placeholder="Correo" 
                    className="margen-formulario ingreso"
                    id="margen2"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Celular" 
                    className="margen-formulario ingreso"
                    id="margen2"
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                />
            </div>
            <div className="margen" >
                <input 
                    type="text" 
                    placeholder="Empresa" 
                    className="margen-formulario ingreso"
                    id="margen2"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Cargo" 
                    className="margen-formulario ingreso"
                    id="margen2"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                />
            </div>
            <div id="terminos">
                <button type="button" onClick={handleSubmit}>Enviar</button>
            </div>
        </form>
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
  );
}

export default Contacto;