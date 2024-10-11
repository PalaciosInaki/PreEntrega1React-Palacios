import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({nombre, id, descripcion, precio, img, stock}) => {

/* Estado local con cantidad de productos agregados */
const [agregarCantidad, setAgregarCantidad] = useState(0)

/* Funcion manejadora de cantidad */
const manejadorCantidad = (cantidad) => {
  setAgregarCantidad(cantidad)

}

  return (
    <div className='contenedorItemDetail'>
        <img src={img} alt={nombre}/>
        <h3>{nombre}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit blanditiis ullam iure aliquid quo expedita aut, perferendis quis incidunt nostrum consequuntur labore dolorum voluptates, ad, libero et quos ea? Architecto!</p>
        <h3>Precio: {precio}</h3>
        <p>ID : {id}</p>

        {

          agregarCantidad > 0 ? (<Link to="/cart">Terminar compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }




    </div>
  )
}

export default ItemDetail