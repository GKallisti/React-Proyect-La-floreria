import logo from '../../assets/Logo.png'
import CartWidget from '../CartWidget/CartWidget.js'
import { Link, NavLink } from 'react-router-dom'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../Firebase/Firebase'
import { useState, useEffect } from 'react'
import './Navbar.css'


const Navbar = () => {
    const [categories, setCategories] = useState([])


 useEffect(() => {
      const categoriesRef = query(collection(db, 'categories'), orderBy('label', 'asc'))
  
      getDocs(categoriesRef)
        .then(snapshot => {
          const categoriesAdapted = snapshot.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data}
          })
          setCategories(categoriesAdapted)
        })
    }, [])

return(
     <nav className='Navbar'>
         <Link to='/' className="nav__link">
         <img src={logo} alt = 'Logo-Navbar'/>
          </Link>
            
        <div>{categories.map(cat => {
              return <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
            }) }            
            </div>
            <CartWidget />
        </nav>
    )
}
export default Navbar
