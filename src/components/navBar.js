import React from 'react';
import { Navbar, Nav, Form, Button} from 'react-bootstrap';
import './style.css';
import {LogoSaludable} from '../containers/CartWidget.js';

export const NavBar = () => {

    return (
        <div>
            <div className="hola">
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center reset">
                    <div className="d-flex align-items-center col-md-8 reset">
                        <LogoSaludable />

                        < div className="collapse navbar-collapse d-flex">
                            <Form action="/search/" method="get" className="js-search-form">    
                                <input className="js-search-input desktop-search-input" autoComplete="off" type="search" name="q" placeholder="¿Qué estás buscando?" aria-label="¿Qué estás buscando?"/>
                                <Button className="glyphicon glyphicon-search" aria-hidden="true">Busqueda</Button>
                            </Form>
                        </div>
                    </div>
                </nav>
            </div>
            <Navbar>
                <Nav className="me-auto">
                    <Nav.Link href="#home">INICIO</Nav.Link>
                    <Nav.Link href="#pricing">FRUTAS Y FRUTOS</Nav.Link>
                    <Nav.Link href="#pricing">SEMILLAS</Nav.Link>
                    <Nav.Link href="#pricing">CEREALES</Nav.Link>
                    <Nav.Link href="#pricing">PRODUCTOS</Nav.Link>
                    <Nav.Link href="#pricing">RECETAS</Nav.Link>
                    <Nav.Link href="#features">FRANQUICIAS</Nav.Link>
                    <Nav.Link href="#pricing">PRODUCTOS</Nav.Link>
                </Nav>
            </Navbar>
        </div >
    );
}

