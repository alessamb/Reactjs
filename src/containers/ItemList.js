import React, { useState, useEffect } from 'react';
import { Item } from './Item.js'

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
            descripcion: "Fuente de energía, proteínas, vitaminas del complejo B, hierro y fibra. Previene la constipación y anemia",
            precio: "600",
            imagen: "foto3"

        }

    ])
    useEffect(() => {
        console.log(productos)
    }, [])
    return (
        <div>
            {productos.map((producto) => {
                return (
                    <Item
                        nombre={producto.nombre}
                        descripcion={producto.descripcion}
                        precio={producto.precio}
                        imagen={producto.imagen}
                    />
                )
            })}

        </div>
    )

}

