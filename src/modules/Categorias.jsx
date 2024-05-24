import React, { useState } from 'react';
import { productos as productoInicial } from '../js/productosNoam';
import { Products } from '../components/Products';


export const Categorias = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(productoInicial);

  const categorias = [...new Set(productoInicial.map(producto => producto.categoria))];

  const cambioCategoria = (e) => {
    const categoria = e.target.value;
    setCategoriaSeleccionada(categoria);
    if (categoria === '') {
      setProductosFiltrados(productoInicial);
    } else {
      setProductosFiltrados(productoInicial.filter(producto => producto.categoria === categoria));
    }
  };

  return (
    <div className='flex flex-col justify-center  items-center'>
      <div>
      <label className='text-lg mr-4' htmlFor="categoria">categoría:</label>
      <select className='bg-pink-200 border-none p-4 rounded-lg hover:bg-pink-400' id="categoria" value={categoriaSeleccionada} onChange={cambioCategoria}>
        <option className='bg-pink-400 border-none' value="">Todas</option>
        {categorias.map(categoria => (
          <option key={categoria} value={categoria}>{categoria}</option>
        ))}
      </select>
      </div>
      <div className='flex justify-center flex-wrap'>
      <Products productos={productosFiltrados} />
      </div>
    </div>
  );
};