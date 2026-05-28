import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/intro";
import SobreMi from "./pages/sobre";
import Proyectos from "./pages/proyectos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/SobreMi" element={<SobreMi />} />
        <Route path="/Proyectos" element={<Proyectos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
