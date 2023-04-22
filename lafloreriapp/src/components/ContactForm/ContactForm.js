import { useState } from "react"

const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const handleSubmit = () => {
        const userData = {
            name, phone, email
        }

        
        onConfirm(userData)
    }

    return (
        <form onSubmit={handleSubmit} >
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Ingrese su Nombre' required/>
        <input type='tel' value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder='Ingrese su Nro Telefono' required/>
        <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Ingrese su e-mail' required/>
        <button type='submit' >Generar Orden</button>
    </form>
    )
}

export default ContactForm