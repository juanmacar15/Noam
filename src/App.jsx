import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Header } from "./components/Header"
import { Productos } from "./modules/Productos"
import { Inicio } from "./modules/Inicio"
import { Categorias } from "./modules/Categorias"
import { Footer } from "./components/Footer"

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
        <div className="mt-20">
        <Footer/>
        </div>
      </BrowserRouter>
      <SpeedInsights />
    </>
  )
}

export default App
