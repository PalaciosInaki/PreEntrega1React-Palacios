import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div>
        <header className='navbar' >
            <h1>Bamboo PC</h1>
            <nav>
                <ul>
                    <li>Placas de Video</li>
                    <li>Procesadores</li>
                    <li>PC Prearmadas</li>
                    <li>Almacenamiento</li>
                    <li>Periféricos</li>
                </ul>
            </nav>

            <CartWidget/>

        </header>

    </div>
  )
}

export default NavBar