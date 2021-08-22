import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const CartContainer = () => {

    const { calculateTotal, clearCart } = useCartContext();

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="box">
                        <div className="is-flex is-align-items-center is-justify-content-space-between mb-3">
                            <p className="is-size-3 p-1 has-text-weight-bold">Tu Carrito</p>
                        </div>

                        <div className="table-container">
                            <table className="table is-fullwidth has-text-centered is-hoverable is-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Producto</th>
                                        <td>{"Hola"}</td>
                                        <th scope="col">Cantidad</th>
                                        <td>{"test"}</td>
                                        <th scope="col">Precio</th>
                                        <td>${"123"}</td>
                                        <th scope="col">Subtotal</th>
                                        <th></th>
                                        <button className="btn btn-sm btn-outline-warning waves-effect" value={123}
                                            title="Borrar orden" > Eliminar</button>
                                        <Link to={`/ItemDetailContainer/${123}`}>
                                            <button role="link" className="btn btn-sm btn-outline-warning waves-effect"
                                                title="Editar orden">Editar</button>
                                        </Link>
                                    </tr>
                                </thead>

                                <tfoot>
                                    <tr className="has-text-center is-size-5">
                                        <td colSpan="5">Total: ${calculateTotal()}</td>
                                    </tr>
                                </tfoot>
                            </table>

                            <button type="button" className="btn btn-sm btn-outline-warning waves-effect"
                                title="Limpiar Carrito" onClick={clearCart}>Limpiar Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}