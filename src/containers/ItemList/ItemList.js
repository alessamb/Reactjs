import React from 'react';
import { Item } from '../Item/Item.js';

export const ItemList = ({ productos } )=> {
    console.log(productos)

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    {productos.map((producto) => {
                    return (
                            <Item
                                id={producto.id}
                                nombre={producto.nombre}
                                descripcion={producto.descripcion}
                                precio={producto.precio}
                                imagen={producto.imagen}
                                stock ={producto.stock}
                                llave ={producto.llave}
                            />
                        )
                    })}

                </div>
            </div>
        </div>
    )

}

