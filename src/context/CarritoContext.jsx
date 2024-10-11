import { Children, createContext } from "react";
import { useState } from "react";


/* Carrito y logica del carrito se podra utilizar en cualquier seccion llamandola por contexto */

export const CarritoContext = createContext({
      carrito: [],
      total: 0,
      cantidadTotal: 0
})

export const CarritoProvider = ({children}) => {
/* Estado para el carrito, total y cantidadTotal */
    const[carrito, setCarrito] = useState([])
    const[total, setTotal] = useState(0)
    const[cantidadTotal, setCantidadTotal] = useState(0)



    console.log(carrito)

    


/* Funciones auxiliares para logica del carrito */
    const agregarAlCarrito = (item, cantidad) =>{
        const productoExistente = carrito.find(prod => prod.item.id === item.id)

        if(!productoExistente) {
            setCarrito(prev =>[...prev, {item,cantidad}])
            /* se crea un nuevo array apartir del estado anterior de carrito y agrega un nuevo objeto que representa el producto agregado*/
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        }else {
            const carritoActualizado = carrito.map ( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad}
                }else {
                    return prod
                }
            })
            setCarrito(carritoActualizado)
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        }
    }


    const eliminarProducto =(id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id)
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id)

        setCarrito(carritoActualizado)
        setCantidadTotal(prev => prev - productoEliminado.cantidad)
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad))
    }


    const vaciarCarrito = () => {
        setCarrito([])
        setCantidadTotal(0)
        setTotal(0)
    }

    return (
        <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )


}
