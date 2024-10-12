import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({nombre, id, descripcion, precio, img, stock}) => {

/* Estado local con cantidad de productos agregados */
const [agregarCantidad, setAgregarCantidad] = useState(0)


const {agregarAlCarrito} = useContext(CarritoContext)

/* Funcion manejadora de cantidad */
const manejadorCantidad = (cantidad) => {
  setAgregarCantidad(cantidad);
  console.log("Prod agregado:" + cantidad)

  const item = {id, nombre, precio}
  agregarAlCarrito(item, cantidad)
}

  return (
    <div className='contenedorItemDetail'>
        <img src={img} alt={nombre}/>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <h3>Precio: {precio}</h3>
        <p>Stock : {stock}</p>

        {

          agregarCantidad > 0 ? (<Link to="/cart">Terminar compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }




    </div>
  )
}

export default ItemDetail