import React, { useState, useEffect } from 'react';
import { Item } from '../Item/Item.js'
import ImgList from './ImgList1.png'
export const ItemList = () => {
    const [productos, setProductos] = useState([
        {
            id: "1",
            nombre: "Happy Mix 1 Kg.",
            descripcion: "Nueces, Almendras, maní tostado sin sal, pasas de uva negras, y pasas de uva rubias",
            precio: "300",
            imagen: "foto"
        },
        {
            id: "2",
            nombre: "Mix De Semillas 500gr",
            descripcion: "Contiene: Lino, Chía, Amaranto, Quínoa, Girasol, Mijo, Sésamo Integral",
            precio: "500",
            imagen: "foto2"

        }, {
            id: "3",
            nombre: "Avena Tradicional 500gr",
            descripcion: "Fuente de energía, proteínas, vitaminas del complejo B, hierro y fibra.",
            precio: "600",
            imagen: { ImgList }
        }
        

    ])
    useEffect(() => {
        console.log(productos)
    }, [])
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
                            />
                        )
                    })}

                </div>
            </div>
        </div>
    )

}

