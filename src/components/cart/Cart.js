import './Cart.css'
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from './CartItem'
import Button from '../button/Button'
import { Link } from 'react-router-dom'


const Cart = () => {
    const { cart, clearCart, getQuantity, getTotal } = useContext(CartContext)
    console.log(cart);

    const totalQuantity = getQuantity()
    console.log(totalQuantity);
    const total = getTotal()

    if(cart.length === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1>Cart</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <Button Click={() => clearCart()} label={'Clear Cart'} />
            <Link to='/checkout'>crear orden</Link>
        </div>
    )
}

export default Cart