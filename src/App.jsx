import Navbar from "./components/Navbar"
import Registro from "./pages/Registro"
import ListaUsuarios from "./pages/ListaUsuarios"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <Navbar />

      <main className="contenedor">
        <Registro />
        <ListaUsuarios />
        <NotFound />
      </main>
    </>
  )
}

export default App
