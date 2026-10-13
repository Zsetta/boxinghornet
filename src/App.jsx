import {useState,useEffect} from 'react'
import logo from './images/boxinghornet.png'

const App = () => {
  return(
    <div className='contenido'>
      <div className='bar'>
        <h1 className='titulo'>Bienvenido a boxinghornet</h1>
      </div>
      <div className='contenedorImagen'>
        <img src={logo}/>
      </div>
      <p>Anto sos una wachina</p>
    </div>
  );
}

export default App