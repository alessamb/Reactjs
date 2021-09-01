import { useState } from "react";
import ItemCount from '../ItemCount/ItemCount.js';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";

export const ItemDetails = ({ producto }) => {
    const [count, setCount] = useState(1);
    const updateCount = (event) => setCount(count + +event.target.value);

    const { addItem } = useCartContext();
   
    const clickHandler = () => {
        const newItem = { product: { ...producto }, quantity: count };
        addItem(newItem);
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="col-md-8 d-flex justify-content-center align-items-center noPad">
                    <div >
                        <div className="container py-3" >
                            <div className="card" style={{ padding: "10px 0px 10px 0px", width: "1002px", borderColor: "burlywood" }}>
                                <div className="row ">
                                    <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
                                        <img src={producto.imagen} alt="" style={{ marginTop: "30px", width: "300px", marginLeft: "55px" }} />
                                        <p>Stock: {producto.stock}</p>
                                    </div>
                                    <div className="col-md-8 px-3">
                                        <div className="card-block px-3" style={{ marginTop: "30px" }}>
                                            <h4 className="card-title">{producto.nombre}</h4>
                                            <p className="card-text">{producto.descripcion} </p>
                                            <p className="card-text">Precio: {producto.precio}</p>
                                            <div className="card-text">
                                                <div className="d-flex justify-content-left fixC">
                                                    <div className="cantidad2">
                                                        <div className="center">
                                                            <button type="button" className="btn restarNowC carAdd" style={{ paddingLeft: "0px" }}>
                                                                <span className="material-icons carAdd"></span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            {/* <ItemCount stock={producto.stock}
                                                onAdd={updateCount}
                                                count={count} /> */}
                                            
                                                <Link to="/cart">
                                                    <button style={{ marginTop: "20px" }} type="button" role="link" className="btn btn-sm btn-outline-warning waves-effect"
                                                        title="Agregar a Carrito" onClick={clickHandler}>  Agregar a Carrito</button>
                                                </Link>
                                            
                                                <ItemCount count={count} stock={producto.stock} onAdd={updateCount} />
                                            
                                        </div>

                                       

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}