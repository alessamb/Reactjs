import React from 'react';
import { Navbar, Nav, Form} from 'react-bootstrap';
import './style.css';
import SaludableLogo from './SaludableLogo.png';
import { LogoCart } from '../../containers/CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center reset">
                    <div className="d-flex align-items-center col-md-8 reset">
                        <Link to="/">
                        <img src={SaludableLogo} alt="" />
                        </Link>
                        

                        < div className="collapse navbar-collapse d-flex">
                            <Form action="/search/" method="get" className="js-search-form">
                                <input className="js-search-input desktop-search-input" autoComplete="off" type="search" name="q" placeholder="¿Qué estás buscando?" aria-label="¿Qué estás buscando?" />
                                <button className="btn btn-sm btn-outline-warning waves-effect" aria-hidden="true">Busqueda</button>
                            </Form>
                            <div className="ml-auto">
                                <Link to="/cart">
                                    <LogoCart />
                                </Link>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
            <Navbar>
                <Nav className="me-auto">
                    <Link to={"/"}>
                        <button className="btn">INICIO</button>
                    </Link>
                    <Link to={"/ItemDetailContainer/2345567890"}>
                        <button className="btn">FRUTOS</button>
                    </Link>
                    <Link to={"/ItemDetailContainer/36456789"}>
                        <button className="btn">SEMILLAS</button>
                    </Link>
                    <Link to={"/ItemDetailContainer/1234567890"}>
                        <button className="btn">CEREALES</button>
                    </Link>
                    <Link to={"Saludable/Recetas"}>
                        <button className="btn">RECETAS</button>
                    </Link>
                </Nav>
            </Navbar>
        </div >
    );
}

