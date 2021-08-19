import { Link } from 'react-router-dom';

export const Item = ({ id, nombre, imagen, precio, llave }) => {
    return (
        <>
            <div className="col-md-4" key={id}>
                <div className="card mb-4 shadow-sm">
              
                <img src={imagen} />
                   
                    <div className="card-body" >
                        <p className="card-text">{nombre}</p>
                        <div className="d-flex justify-content-between align-items-center">

                            <div className="d-flex">

                                <p className="">Precio: {precio}</p>
             
                            </div>
                        </div>
                        <div>
                            {/* <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button> */}
                            {/*<ItemCount />*/}
                            <Link to={`/ItemDetailContainer/${llave}`} className="btn btn-sm btn-outline-warning waves-effect">
                                Ver detalle
                            </Link>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}