import React, { useState, useEffect } from 'react';

class ItemCount extends React.Component {

    constructor(props) {
        super(props);
        this.state ={contador : 1, stock : 10};
    }

    onSumarNumero() {
        if(this.state.contador < this.state.stock){
        this.setState({ contador: this.state.contador + 1 });
        }
    }

    onRestarNumero() {
        if (this.state.contador > 0) {
        this.setState({ contador: this.state.contador - 1 });
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-left fixC" width="150%">
                <div>
                <button onClick={this.onRestarNumero.bind(this)}>-</button>
                </div>
                <div>
                    <p>{this.state.contador}</p>
                </div>
                <div>
                    <button onClick={this.onSumarNumero.bind(this)}>+</button>
                </div>
            </div>
        );
    }
}
export default ItemCount;

