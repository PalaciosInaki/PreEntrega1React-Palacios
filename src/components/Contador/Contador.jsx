import React from 'react'
import { useState } from 'react'

const Contador = () => {
 const [contador, setContador] = useState(1)
       
      
 const sumarContador = () => {
    setContador(contador + 1)
 }

 const restarContador = () => {
    if (contador >= 1) {
        setContador(contador - 1)
    }
 }


  return (
    <div>
        <button onClick={restarContador}> - </button>
        <strong> {contador} </strong>
        <button onClick={sumarContador}> + </button>
    </div>
  )
}

export default Contador