import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({nombre, id, descripcion, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre}/>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>Precio: {precio}</p>
        <p>ID : {id}</p>
        <Link to={`/item/${id}`}><button>Ver detalles</button></Link>
    </div>
  )
}

export default Item