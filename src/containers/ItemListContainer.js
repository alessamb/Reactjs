import { useEffect, useState } from "react";
import Carru1 from "./ImgCarru1.png";
import Carru2 from "./ImgCarru2.png";
import Carru3 from "./ImgCarru3.png";
import { Carousel } from "react-bootstrap";
import { ItemList } from "./ItemList.js";


export const ItemListContainer = () => {
  const [component, setcomponent] = useState(null);

  useEffect(() => {
    const fetchComponent = async () => {
      task()
        .then((returnedComponent) => {
          setcomponent(returnedComponent);
        })
        .catch((e) => {
          console.log("Hubo un error", e);
        });
    };

    fetchComponent();
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

      {component}
    </div>
  );
};

const task = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(<ItemList />);
    }, 2000);
  });
}
