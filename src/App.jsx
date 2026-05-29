import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/intro";
import SobreMi from "./pages/sobre";
import Proyectos from "./pages/proyectos";
import Contacto from "./pages/contactame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/SobreMi" element={<SobreMi />} />
        <Route path="/Proyectos" element={<Proyectos />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;