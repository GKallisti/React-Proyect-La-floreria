import './CartWidget.css'
import cart from './assets/Cart.svg'

const CartWidget = () => {

    return(
        <div to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {0}
        </div>
    );
}

export default CartWidget