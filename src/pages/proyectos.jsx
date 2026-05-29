import { useNavigate } from "react-router-dom";
import { Undo2 } from 'lucide-react';

const Proyectos = [
  {
    titulo: "Sistema Academico",
    descripcion: `Se desarrolló un sistema académico para un colegio utilizando Python en el backend, PostgreSQL como base de datos y React con Tailwind CSS en el frontend.
                Para la gestión de seguridad, el sistema implementa tokens JWT para la verificación y control de roles, y cookies para la transferencia de datos.
                El módulo de docentes permite visualizar los cursos, estudiantes y materias asignadas, además de habilitar la carga de notas.`,
    Programas: ["Python", "PostgreSQL", "React", "Tailwind CSS"]
  },
  {
    titulo: "Sistema de Reciclaje",
    descripcion: `Sistema diseñado para conectar a los usuarios con los puntos de reciclaje más cercanos a su ubicación. A través de un árbol de decisión, el usuario clasifica sus residuos según el tipo de material y, combinado con su dirección, el sistema utiliza grafos para identificar y retornar los 5 puntos de reciclaje más próximos que aceptan dicho material. Las ubicaciones fueron recolectadas y almacenadas en archivos JSON.`,
    Programas: ["Python", "Grafos", "Árboles de decisión", "JSON"]
  },
];
function Proyectosm() {
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