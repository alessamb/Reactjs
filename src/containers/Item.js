import ItemCount from './ItemCount.js'


export const Item = ({ nombre, descripcion, imagen, precio }) => {
    return (
        <>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225">
                                    <img src={imagen} alt="" />
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
                                    <div className="btn-group">
                                        {/* <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button> */}
                                        <ItemCount />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}