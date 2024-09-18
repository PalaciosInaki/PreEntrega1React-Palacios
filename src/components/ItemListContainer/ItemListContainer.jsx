import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCategoria } from '../../asynmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'




const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams()

  useEffect( ()=>{
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
    .then(respuesta => setProductos(respuesta))
    .catch(error => console.log(error)) 
  }, [idCategoria])

  return (
    <>
        <h2>Nuestros Productos</h2>
        <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer