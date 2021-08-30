import React, { useState, createContext, useContext, useEffect } from "react";

const CartItemsContext = createContext();

const useCartContext = () => useContext(CartItemsContext);

const CartContext = ({ children }) => {
    
    const [cart, setCart] = useState([]);

    const updateCart = (newCart) => {
        const sortedItems = newCart.sort((a, b) =>
            a.product.llave > b.product.llave ? 1 : -1
        );
        setCart(sortedItems);
        sessionStorage.setItem("react-cart", JSON.stringify(sortedItems));
    };

    const addItem = (newItem) => {
        if (isInCart(newItem.product.id)) {
            updateItem(newItem);
        } else {
            updateCart([...cart, newItem]);
        }
    };

    const removeItem = (llave) => {
        const itemsFiltered = cart.filter((item) => item.product.llave !== llave);
        updateCart(itemsFiltered);
    };

    const updateItem = (newItem) => {
        const cartCopy = cart.slice();
        const index = cartCopy.findIndex(
            (item) => item.product.id === newItem.product.id
        );
        if (cartCopy[index].quantity !== newItem.quantity) {
            cartCopy.splice(index, 1, newItem);
            updateCart(cartCopy);
        }
    };

    const clearCart = () => {
        setCart([]);
      };
    const hasItemsInCart = () => cart.length > 0;

    const isInCart = (id) => cart.some((item) => item.product.id === id);

    const calculateTotal = () =>
        cart.reduce(
            (current, item) => current + item.product.precio * item.quantity,
            0
        );

    const getItemsCount = () => cart.length;

    return (
        <CartItemsContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                updateCart,
                getItemsCount,
                hasItemsInCart,
                calculateTotal,
                clearCart,
            }}
        >
            {children}
        </CartItemsContext.Provider>
    );
};

export default CartContext;
export { CartItemsContext, useCartContext };
