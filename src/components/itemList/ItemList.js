
import Item from "../item/Item"

const ItemList = ({listProducts}) => {

    return(
        <ul>
            {listProducts.map(prod => <Item key = {prod.Id} product={prod} />)} 
        </ul>
    )
}

export default ItemList