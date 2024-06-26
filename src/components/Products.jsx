import React, { useState } from 'react'

export const Products = ({productos}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const openModal = (imagen) => {
    setModalImageSrc(imagen);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalImageSrc('');
  };

{/*invierto los productos para que al momentos de agregarlos al array, los que se añaden de ulitmo en el array aparezcan de primeros*/}
  const productosInvertidos = [...productos].reverse(); 
  return (
    <>
      {
        productosInvertidos.map(pro =>
          <div key={pro.id} className='flex flex-col items-center w-[40%] md:w-[24%] lg:w-[15%] m-4 md:m-8  rounded-3xl border-t-[5px] border-pink-400 shadow-2xl hover:shadow-pink-300'>
            <h1 className='text-center pt-3 lg:pt-5 font-extrabold text-sm '>{pro.nombre}</h1>
            <div className='flex justify-center w-full h-full'>
            <img className='w-[60%] cursor-pointer' src={pro.img} alt={pro.nombre} onClick={() => openModal(pro.img)}/>
            </div>
            <h3 className='text-center font-semibold'>{pro.precio} COP</h3>
            <div className='w-full flex flex-col items-center '>
              <a className='md:w-[50%]  bg-pink-200 hover:bg-pink-500 hover:text-white my-3 mx-3 p-2 rounded-md ' href={`https://wa.me/573117205725/?text=Hola,%20esta%20disponible%20el%20producto:%20${pro.id}?%20${pro.img}`} target='blanñ'>
                <p className='text-center '>
                  Comprar
                </p>
              </a>
            </div>
          </div>
        )
      }
      {isOpen && (
        <div className="flex items-center justify-center fixed z-[1] pt[60px] top-0 w-full h-full backdrop-blur-lg" onClick={closeModal}>
          <div className=''>
          <img className="m-auto block w-[80%] max-w-[700px] " src={modalImageSrc} alt="Modal" />
          </div>
        </div>
      )}
    </>
  )
}
