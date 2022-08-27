import { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addVehicle = (productAdd) => {
    if (!isInCart(productAdd.id)) {
      setCart([...cart, productAdd]);
    } else {
      const updateCart = cart.map((prod) => {
        if (prod.id === productAdd.id) {
          const updateProduct = {
            ...prod,
            quantity: productAdd.quantity,
          };
          return updateProduct;
        } else {
          return prod;
        }
      });
      setCart(updateCart);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeVehicle = (id) => {
    const removeOneVehicleInCart = cart.filter((prod) => prod.id !== id);
    setCart(removeOneVehicleInCart);
  };

  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.quantity;
  };

  const getQuantity = () => {
    let accumulated = 0;

    cart.forEach((prod) => {
      accumulated += prod.quantity;
    });
    return accumulated;
  };

  const getTotal = () => {
    let accumulated = 0;

    cart.forEach((prod) => {
      accumulated += prod.quantity * prod.Precio;
    });

    return accumulated;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addVehicle,
        getQuantity,
        isInCart,
        removeVehicle,
        clearCart,
        getProductQuantity,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
