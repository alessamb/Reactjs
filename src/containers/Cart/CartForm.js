import React from "react";
import { Form, Row, InputGroup, Col, Button } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import { getFirestore } from "../Firebase/Index.js";

export const CartForm = () => {
    const { cart, calculateTotal, clearCart } = useCartContext();
    const { setOrdenId, UserInfo, setUserInfo } = useCartContext();
    const { nombre, telefono, email } = UserInfo;

    const handleChangeUser = (event) => {
        setUserInfo({ ...UserInfo, [event.target.name]: event.target.value });
    };
    const finalizarCompra = (event) => {
        event.preventDefault();

        const newProd = cart.map(({ product: { llave, nombre, precio }, quantity }) => ({
            llave,
            nombre,
            precio, quantity,
        }));

        const nuevaOrden = {
            buyer: {
                Nombre: nombre,
                Email: email,
                Telefono: telefono,
            },
            items: newProd,
            total: calculateTotal(),
        };

        const db = getFirestore();
        const orders = db.collection("orders");
        const batch = db.batch();

        orders
            .add(nuevaOrden)
            .then((response) => {
                cart.forEach((item) => {
                    const docRef = db.collection("item").doc(item.product.llave);
                    batch.update(docRef, { stock: item.product.stock - item.quantity });
                });
                batch.commit();
                setOrdenId(response.id);
                alert('¡Gracias por tu compra! 😊' +
                    'Tu pedido ha sido enviado, id de transacción: ' + response.id);
                clearCart();
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
            <Form className="form" onSubmit={finalizarCompra}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" required>
                        <Form.Label>Nombre y apellido</Form.Label>
                         <Form.Control type="text" placeholder="Nombre y apellido" name="nombre" value={nombre} onChange={handleChangeUser}/>

                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="number" placeholder="123 456-7890" name="telefono" value={telefono} onChange={handleChangeUser} />

                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="text" placeholder="example@email.com" name="email" aria-describedby="inputGroupPrepend"  value={email} onChange={handleChangeUser} />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-1">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Direccion de entrega</Form.Label>
                        <Form.Control type="text" placeholder="Direccion" required />   

                    </Form.Group>
                </Row>
                <br/>
                <Button className="btn btn-sm btn-outline-warning waves-effect" style={{backgroundColor: "cornsilk"}} type="submit">Finalizar compra</Button>
            </Form>
        </div>
    );
};
