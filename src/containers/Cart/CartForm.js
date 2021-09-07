import {React } from "react";
import  {useCartContext} from "../../context/CartContext";

export const CartForm = () => {
    const { addOrder } = useCartContext();
          return (<>
            <main>
                    <form>
                        <div>
                            <div className="col-auto">
                                <label for="name" className="col-form-label">Nombre y Apellido</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" id="nombre" name="name" className="form-control" />
                            </div>
                            <div className="col-auto">
                                <label for="phone" className="col-form-label">Teléfono</label>
                            </div>
                            <div className="col-auto">
                                <input type="number" id="telefono" name="phone" className="form-control" />
                            </div>
                            <div className="col-auto">
                                <label for="email" className="col-form-label">Email</label>
                            </div>
                            <div className="col-auto">
                                <input type="email" id="email" name="email" className="form-control" />
                            </div>
                            <div className="col-auto">
                                <label for="direccion" className="col-form-label">Direccion</label>
                            </div>
                            <div className="col-auto">
                                <input type="direccion" id="direccion" name="direccion" className="form-control" />
                            </div>
                            
                            <a className="btn btn-sm btn-outline-warning waves-effect" style ={{marginTop: "10", marginLeft: "200"}} onClick={() => {addOrder()}} >Hacer pedido</a>
                        </div>
                    </form>
              
            </main>
        </>);
};

