import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <header className="navbar bg-primary border-bottom border-body" data-bs-theme="dark">
            <h1>Bamboo PC</h1>
            <nav>
                <ul>
                    <li>
                    <NavLink to="/"> Home </NavLink>
                    </li>
                    <li>
                    <NavLink to="/categoria/computadoras"> Computadoras </NavLink>
                    </li>
                    <li>
                    <NavLink to="/categoria/componentes"> Componentes </NavLink>
                    </li>
                    <li>
                    <NavLink to='/categoria/perifericos'> Perifericos </NavLink> 
                    </li>
                </ul>
            </nav>

            <CartWidget/>

        </header>

    </div>
  )
}

export default NavBar