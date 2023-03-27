import './ItemDetail.css'

const ItemDetail = ({name, img, price, category, stock, description}) => {
    return (
        <div className="card">
            <img src={img} alt={name}/>
            <div className='container'>
                <h4 className='text'>{name}</h4>
                <p>{description}</p>
                <p>Tipo: {category}</p>
                <p>Cantidad en Stock: {stock}</p>
                <h4 className='price'>Precio: ${price}</h4>
                <div>
                    <button className='button'>Comprar</button>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail