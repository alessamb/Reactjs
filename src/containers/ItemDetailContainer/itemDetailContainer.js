import { useEffect, useState } from 'react';
import { ItemDetails } from '../ItemDetails/ItemDetail.js';
import { useParams } from "react-router-dom";
import { getFirestore } from "../Firebase/Index.js";

export const ItemDetailContainer = () => {
    const [produ, setProdu] = useState([]);
/*     const { productoID } = useParams();

    useEffect(() => {
        const task = () =>
            new Promise((resolve, reject) => {
                resolve(productos);
            });

        task()
            .then((result) => setProdu(result))
            .catch((e) => { console.log("Ha ocurrido un error") });
    }, []); */
     const {productoID} = useParams();
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("Item");
        console.log(itemCollection);
    
        itemCollection.get().then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("No se encontraron productos");
          }
          setProdu(querySnapshot.docs.map((document) => document.data()));
        });
      }, []);

    return (
        <div>
            {
                produ.filter(producto => producto.llave === productoID)
                    .map((producto) => {
                        return <ItemDetails producto={producto} />
                    })

            }

        </div>
    )
}