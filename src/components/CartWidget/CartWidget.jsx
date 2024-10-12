import React from 'react'
import "./CartWidget.css"
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)      

  return (
    <div>
      <Link to='/cart'>
        <img className="carrito-icon" src="https://cdn.icon-icons.com/icons2/933/PNG/512/shopping-cart_icon-icons.com_72552.png" alt="" />
        </Link>
        {
          cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }
        
    </div>
  )
}

export default CartWidget