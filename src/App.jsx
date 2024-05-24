import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Productos } from "./modules/Productos"
import { Inicio } from "./modules/Inicio"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' element={<Inicio/>} />
          <Route path='/productos' element={<Productos/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
