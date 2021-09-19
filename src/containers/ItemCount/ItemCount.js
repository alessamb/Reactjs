import React from "react";

const ItemCount = ({ stock, count, onAdd }) => {
    return (
        <div className="d-flex justify-content-left fixC" width="150%" >
            <div >
                <button type="button" className="btn btn-sm btn-outline-warning waves-effect"
                    value={-1} disabled={count <= 1} onClick={onAdd} >  - </button>
            </div>
            <div >
                <span className="numCount">{count}</span>
            </div>
            <div>
                <button type="button" className="btn btn-sm btn-outline-warning waves-effect"
                    value={1} disabled={count >= stock} onClick={onAdd}> + </button>
            </div>
           {/* <button type="button" className="btn btn-sm btn-outline-warning waves-effect"
                style={{ marginLeft: "30px" } } onClick={()=> {{agregarCarrito2()}}}>Añadir al carrito</button>*/}

        </div>
    );
};

export default ItemCount;
