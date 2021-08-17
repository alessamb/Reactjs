import { useParams } from "react-router-dom";
import { productos } from "../Apis/ListProductos";
import { useState } from "react";
import ItemCount from '../ItemCount/ItemCount.js'

export const ItemDetails = ({ producto }) => {
    return (
            <div className="HOLA">
                <div>
                    <div className="col-md-4" key={producto.id}>
                        <div className="card mb-4 shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225">

                            </svg>
                            <div className="card-body" >
                                <p className="card-text" key={producto.key}>{producto.nombre}</p>
                                <p className="">{producto.descripcion}</p>
                                <div className="d-flex justify-content-between align-items-center">

                                    <div className="d-flex">

                                        <p className="">Precio: {producto.precio}</p>
                                        <p className="" style={{ marginLeft: "30px" }}>Stock: {producto.stock}</p>
                                    </div>

                                </div>
                                <div>
                                    <ItemCount />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}