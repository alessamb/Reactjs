import React, { useState, createContext, useContext } from "react";
import {getFirestore} from "../containers/Firebase/Index.js";

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

    const [OrdenId, setOrdenId] = useState(null);

    const addOrder = () => {
        const newOrder = {
            buyer: {
                name: document.getElementById('nombre').value,
                phone: document.getElementById('telefono').value,
                email: document.getElementById('email').value,
                direccion : document.getElementById('direccion').value
            },
            items: cart.map(({ product }, quantity) => ({
                product: {
                    id: product.llave,
                    nombre: product.nombre,
                    precio: product.precio,
                    cantidad: quantity
                },
           
               
            })),
            total: calculateTotal()
        };

        const db = getFirestore();
        const orders = db.collection("orders");
        const batch = db.batch();

        orders
        .add(newOrder)
        .then(({ id }) => {
            cart.forEach(({product}, quantity) => {
                const docRef = db.collection("item").doc(product.llave);
                batch.update(docRef, {stock: product.stock - quantity})
            });
            batch.commit();
            setOrdenId(id);
            alert('¡Gracias por tu compra! 😊' +
            'Tu pedido ha sido enviado, id de transacción: ' + id);
            clearCart();
            
        })
        .catch(err => {
            console.log(err);
        });
    };
  

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
                addOrder
            }}
        >
            {children}
        </CartItemsContext.Provider>
    );
};

export default CartContext;
export { CartItemsContext, useCartContext };
