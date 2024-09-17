import { useState, useEffect } from 'react'
import { getProductos } from '../../asynmock'
import ItemList from '../ItemList/ItemList'



const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  useEffect( ()=>{
      getProductos()
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error)) 
  }, [])

  return (
    <>
        <h2>Nuestros Productos</h2>
        <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer