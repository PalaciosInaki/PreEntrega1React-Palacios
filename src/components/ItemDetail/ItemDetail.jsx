import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({nombre, id, descripcion, precio, img}) => {
  return (
    <div className='contenedorItemDetail'>
        <img src={img} alt={nombre}/>
        <h3>{nombre}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit blanditiis ullam iure aliquid quo expedita aut, perferendis quis incidunt nostrum consequuntur labore dolorum voluptates, ad, libero et quos ea? Architecto!</p>
        <h3>Precio: {precio}</h3>
        <p>ID : {id}</p>
    </div>
  )
}

export default ItemDetail