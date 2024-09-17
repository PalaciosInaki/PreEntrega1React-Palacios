import React from 'react'
import { useEffect, useState } from 'react'
import { getUnProd } from '../../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    useEffect(() =>{
        getUnProd(1)
           .then (respuesta => setProducto(respuesta))
    }, [])





  return (
    <div>
        <ItemDetail {...producto}/>

    </div>
  )
}

export default ItemDetailContainer