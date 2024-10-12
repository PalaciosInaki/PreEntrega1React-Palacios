import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({nombre, id, descripcion, precio, img, stock}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre}/>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>Precio: {precio}</p>
        <p>Stock : {stock}</p>
        <Link to={`/item/${id}`}><button>Ver detalles</button></Link>
    </div>
  )
}

export default Item