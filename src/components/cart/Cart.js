import './Cart.css'
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from './CartItem'
import Button from '../button/Button'


const Cart = () => {
    const { cart, clearCart, getQuantity, getTotal } = useContext(CartContext)


    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
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
        </div>
    )
}

export default Cart