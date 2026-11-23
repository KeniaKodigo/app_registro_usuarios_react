import Navbar from "./components/Navbar"
import Registro from "./pages/Registro"
import ListaUsuarios from "./pages/ListaUsuarios"
import NotFound from "./pages/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"

function App() {

  // Constante para obtener datos del localstorage
  const usuariosLocalstorage = localStorage.getItem("usuarios");

  const [listaUsuarios, setListaUsuarios] = useState(usuariosLocalstorage ? JSON.parse(usuariosLocalstorage) : [])

  return (
    
    <BrowserRouter>
    {/** Manejo de rutas globales */}
      <>
        <Navbar />

        <main className="contenedor">
          {/** declarando la cajita de rutas de la aplicacion */}
          <Routes>
            <Route path="/" element={<Registro listaUsuarios={listaUsuarios} setListaUsuarios={setListaUsuarios} />} />
            <Route path="/usuarios" element={<ListaUsuarios />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </>
    </BrowserRouter>
  )
}

export default App
