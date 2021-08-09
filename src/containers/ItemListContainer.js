
import Carru1 from './ImgCarru1.png';
import Carru2 from './ImgCarru2.png';
import Carru3 from './ImgCarru3.png';
import {Carousel} from 'react-bootstrap';
import ItemCount from './ItemCount.js';


export const ItemListContainer = () => {
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

            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"></svg>
                                <div className="card-body">
                                    <p className="card-text">Frutos.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"></svg>
                                <div className="card-body">
                                    <p className="card-text">Semillas.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"></svg>
                                <div className="card-body">
                                    <p className="card-text">Cereales.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ItemCount contador="1" stock="10"/>
        </div>
    );
}
