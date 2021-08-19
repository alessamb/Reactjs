import { useParams } from "react-router-dom";
import { productos } from "../Apis/ListProductos";
import { useState } from "react";
import ItemCount from '../ItemCount/ItemCount.js';
import { NavBar } from '../../components/navBar/navBar.js';
import { Link } from 'react-router-dom';

export const ItemDetails = ({ producto }) => {

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="col-md-8 d-flex justify-content-center align-items-center noPad">
                    <div >
                        <div className="container py-3" >
                            <div className="card" style={{ padding: "10px 0px 10px 0px", width: "1002px" }}>
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

                                            <ItemCount />

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