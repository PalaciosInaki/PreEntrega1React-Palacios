import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div>
        <header className="navbar bg-primary border-bottom border-body" data-bs-theme="dark">
            <h1>Bamboo PC</h1>
            <nav>
                <ul>
                    <li>Placas Video</li>
                    <li>CPU</li>
                    <li>Prearmadas</li>
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