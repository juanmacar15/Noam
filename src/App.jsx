import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Productos } from "./modules/Productos"
import { Inicio } from "./modules/Inicio"
import { Categorias } from "./modules/Categorias"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' element={<Inicio/>} />
          <Route path='/productos' element={<Productos/>} />
          <Route path='/categorias' element={<Categorias/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
