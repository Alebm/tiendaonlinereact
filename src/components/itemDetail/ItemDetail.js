import './ItemDetail.css'

const ItemDetail = ({Modelo , img }) => {

    return (

        <div>
            <h1> {Modelo} </h1>
            <img className="img" src={img} alt={Modelo} ></img>
        </div>
    ) 

}

export default ItemDetail;