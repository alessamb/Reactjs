import { useEffect, useState } from 'react';
import Carru1 from './ImgCarru1.png';
import Carru2 from './ImgCarru2.png';
import Carru3 from './ImgCarru3.png';
import { Carousel } from 'react-bootstrap';
import { ItemList } from '../ItemList/ItemList.js';
import { getFirestore } from "../Firebase/Index.js";

export const ItemListContainer = () => {
/*  const [prod, setProd] = useState([]);
 useEffect(() => {
    const task = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      });

    task()
      .then((result) => setProd(result))
      .catch((e) => { console.log("Ha ocurrido un error") });
  }, []);   */
    const [prod, setprod] = useState([]);
  
    useEffect(() => {
      const db = getFirestore();
      const itemCollection = db.collection("Item");
      console.log(itemCollection);
  
      itemCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No se encontraron productos");
        }
        setprod(querySnapshot.docs.map((document) => document.data()));
      });
    }, []);
  return (
    <div>
      <div>
        <Carousel className="justify-content-center">
          <Carousel.Item>
            <img src={Carru1} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Carru2} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Carru3} />
          </Carousel.Item>
        </Carousel>
      </div>
      <ItemList productos={prod} />
    </div>

  );
}
