import React, { useState, createContext, useContext, useEffect } from "react";

const CartItemsContext = createContext();

const useCartContext = () => useContext(CartItemsContext);

const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    //Actualizo el carro
    const updateCart = (newCart) => {
    };

    
    const addItem = (newItem) => {
        if (isInCart(newItem.product.id)) {
            //agrego producto
        } else {
            updateCart([...cart, newItem]);
        }
    };

    const calculateTotal = () =>{
       //Calcular total del  precio
        cart.reduce(
            (current, item) => current + item.product.precio * item.quantity,
            0
        );
    }

    const isInCart = (id) => cart.some((item) => item.product.id === id);

    
    return (
        <CartItemsContext.Provider
            value={{
                addItem,
                updateCart,
                calculateTotal,
            }}
        >
            {children}
        </CartItemsContext.Provider>
    );
};

export default CartContext;
export { CartItemsContext, useCartContext };
