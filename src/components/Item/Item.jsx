import React from 'react'
import "./Item.css"

const Item = ({nombre, id, descripcion, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre}/>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>Precio: {precio}</p>
        <p>ID : {id}</p>
        <button>Ver detalles</button>
    </div>
  )
}

export default Item