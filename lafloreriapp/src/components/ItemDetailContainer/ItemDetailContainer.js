import { getProductsById } from '../../asyncMock.js'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail.js";
import './ItemDetailContainer.css'
import { useState, useEffect } from "react";



const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const { itemId } = useParams()
    useEffect( () => {
        getProductsById(itemId)
            .then(response =>{
                setProducts(response)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [itemId])
    return(
        <div className="itemdetail">
           
            <ItemDetail {...products}/> 
        </div>
    )
}

export default ItemDetailContainer