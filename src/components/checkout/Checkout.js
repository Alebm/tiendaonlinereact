import CartContext from "../../context/CartContext"
import { useContext } from "react"


import { db } from "../../services/firebase"
import { addDoc, collection } from "firebase/firestore"

const Checkout = () => {
    const { cart, getQuantity, getTotal } = useContext(CartContext);

    const createOrder = () => {


        const totalQuantity = getQuantity();
        const total = getTotal();

        const objOrder = {
            buyer: {
                firstName: 'Alejandro',
                lastName: 'Bedoya',
                phone: '31134456',
                address: 'direccion 432'
            },
            items: cart,//cartcontext
            totalQuantity, //cartcontext
            total, //cartcontext
            date: new Date()
        }

        const orderRef = collection(db, 'orders');
    
        addDoc(orderRef, objOrder).then(Response => {
            console.log(Response);
        })
    }


    return (
        <div>
            <h1>Checkout</h1>
            <button onClick={createOrder} >Generer Orden</button>
        </div>
    )
}

export default Checkout;