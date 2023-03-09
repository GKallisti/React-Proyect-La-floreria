import './Navbar.css'
import logo from './assets/LogoNavbar.png'


const Navbar = () => {
    return(
        <nav className='Navbar'>
            <img src={logo} alt = 'Logo-Navbar'/>
            <div>
                <button className = 'botonbarra'>Aperitivos</button>
                <button className = 'botonbarra'>Licores</button>
                <button className = 'botonbarra'>Destilados</button>
                <button className = 'botonbarra'>Cervezas</button>
            </div>
        </nav>
    )
}
export default Navbar