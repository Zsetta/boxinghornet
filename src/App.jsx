import {useState,useEffect} from 'react'
import logo from './images/boxinghornet.png'

const App = () => {
  return(
    <div className='contenido'>
      <div className='bar'>
        <h1 className='titulo'>Bienvenido a BoxingHornet</h1>
      </div>
      <div className='contenedorImagen'>
        <img className='logo' src={logo}/>
      </div>
    </div>
  );
}

export default App