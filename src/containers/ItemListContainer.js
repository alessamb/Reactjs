
import Carru1 from './ImgCarru1.png';
import Carru2 from './ImgCarru2.png';
import Carru3 from './ImgCarru3.png';
import {Carousel} from 'react-bootstrap';

export const Carru = () => {
    return (
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
            <ul>Catalogo de productos</ul>
        </div>
    );
}
