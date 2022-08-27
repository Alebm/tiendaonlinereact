
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Button from "../button/Button";

const CartItem = ({ id, Modelo, quantity, Precio }) => {
    const { removeVehicle } = useContext(CartContext);
    console.log(id, Modelo, quantity, Precio);

    const handleRemove = (id) => {
        removeVehicle(id);
    }

    return (
        <article>       
        <header>
            <h3>
                {Modelo}
            </h3>
        </header>
        <section>
            <span>
                Cantidad: {quantity}
            </span>
            <span>
                Precio Unidad: {Precio}
            </span>
        </section>
        <footer>
            <span>
                Subtotal: ${Precio * quantity}
            </span>
        </footer>
        <Button click={() => handleRemove(id)} label={'Remove'}/>
    </article>
    )

}

export default CartItem;