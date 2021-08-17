import { useEffect, useState } from 'react';
import { ItemDetails } from '../ItemDetails/ItemDetail.js';
import { productos } from '../Apis/ListProductos.js';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [produ, setProdu] = useState([]);
    const { productoID } = useParams();

    useEffect(() => {
        const task = () =>
            new Promise((resolve, reject) => {  
                    resolve(productos);
            });

        task()
            .then((result) => setProdu(result))
            .catch((e) => { console.log("Ha ocurrido un error") });
    }, []);

    /*  return (
      <ItemDetails productos={produ}/>
    )*/
    return (
        <>
            {
                productos.filter(producto => producto.llave === productoID)
                    .map((producto) => {   
                        return <ItemDetails producto={producto} />
                    })

            }

        </>
    )
}