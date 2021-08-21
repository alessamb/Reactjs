import React from "react";

export const CartContainer = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="col-md-8 d-flex justify-content-center align-items-center noPad">
                <div >
                    <div className="container py-3" >
                        <div className="card" style={{ padding: "10px 0px 10px 0px", width: "1002px", borderColor: "burlywood" }}>
                        El Carrito de compras se encuentra vacio
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
