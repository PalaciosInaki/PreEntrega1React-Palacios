import React from 'react'
import { useEffect, useState } from 'react'
import { getUnProd } from '../../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const {idItem} = useParams()

    useEffect(() =>{
        getUnProd(idItem)
           .then (respuesta => setProducto(respuesta))
    }, [idItem])


  return (
    <div>
        <ItemDetail {...producto}/>

    </div>
  )
}

export default ItemDetailContainer