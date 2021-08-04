import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import './style.css';
import SaludableLogo from './SaludableLogo.png';
import { LogoCart } from '../containers/CartWidget.js';


export const NavBar = () => {

    return (
        <div>
            <div className="hola">
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center reset">
                    <div className="d-flex align-items-center col-md-8 reset">
                        {/*  <LogoSaludable />*/}
                        <img src={SaludableLogo} alt="" />

                        < div className="collapse navbar-collapse d-flex">
                            <Form action="/search/" method="get" className="js-search-form">
                                <input className="js-search-input desktop-search-input" autoComplete="off" type="search" name="q" placeholder="¿Qué estás buscando?" aria-label="¿Qué estás buscando?" />
                                <Button className="glyphicon glyphicon-search" aria-hidden="true">Busqueda</Button>
                            </Form>
                            <div className="ml-auto">
                                <LogoCart />
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
            <Navbar>
                <Nav className="me-auto">
                    <Nav.Link to={"Saludable/Inicio"}>
                        <button className="btn">INICIO</button>
                    </Nav.Link>
                    <Nav.Link to={"Saludable/FrutasyFrutos"}>
                        <button className="btn">FRUTOS</button>
                    </Nav.Link>
                    <Nav.Link to={"Saludable/Semillas"}>
                        <button className="btn">SEMILLAS</button>
                    </Nav.Link>
                    <Nav.Link to={"Saludable/Cereales"}>
                        <button className="btn">CEREALES</button>
                    </Nav.Link>
                    <Nav.Link to={"Saludable/Recetas"}>
                        <button className="btn">RECETAS</button>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div >
    );
}

