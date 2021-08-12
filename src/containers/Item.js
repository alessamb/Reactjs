import ItemCount from './ItemCount.js'


export const Item = ({ id, nombre, descripcion, imagen, precio }) => {
    return (
        <>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225">
                        <img src={imagen} />
                    </svg>
                    <div className="card-body">
                        <p className="card-text">{nombre}</p>
                        <p className="">{descripcion}</p>
                        <div className="d-flex justify-content-between align-items-center">

                            <div className="d-flex">

                                <p className="">Precio: {precio}</p>
                                <p className="" style={{ marginLeft: "30px" }}>Stock: { }</p>
                            </div>
                        </div>
                        <div>
                            {/* <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button> */}
                            <ItemCount />

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}