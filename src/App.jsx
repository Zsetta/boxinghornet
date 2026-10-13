import {useState,useEffect} from 'react'
import logo from './images/boxinghornet.png'

const App = () => {
  return(
    <div className='contenido'>
      <div className='bar'>
        <h1 className='titulo'>Bienvenido a boxinghornet</h1>
      </div>
      <div className='contenedorImagen'>
        <img className='logo' src={logo}/>
      </div>
      <p>Que onda andres</p>
    </div>
  );
}

export default App