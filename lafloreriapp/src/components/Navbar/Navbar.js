import './Navbar.css'
import logo from './assets/LogoNavbar.png'
import CartWidget from '../CartWidget/CartWidget.js'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='Navbar'>
            <Link to='/'>
            <img src={logo} alt = 'Logo-Navbar'/>
            </Link>
            
            <div>
               
            <NavLink to='/category/Licores' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> <button className = 'botonbarra'>Licores</button> </NavLink>
        
            <NavLink to='/category/Destilados' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> <button className = 'botonbarra'>Destilados</button></NavLink>
            
            <NavLink to='/category/Cervezas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><button className = 'botonbarra'>Cervezas</button></NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}
export default Navbar
