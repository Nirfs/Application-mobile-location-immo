import { NavLink } from 'react-router-dom';
//image
import logo from "../assets/logo_kasa.svg"
//style
import "../styles/header.scss"

export function Header(){
    return(
        <header>
            <img className="desktop" src={logo} alt='logo de kasa'/>
            <nav>
                <NavLink className="link" to='/'>Acceuil</NavLink>
                <NavLink className="link" to='/about'>A Propos</NavLink>
            </nav>
        </header>
    )
}