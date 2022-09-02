import React, { Component } from 'react';
import "./Pelicula.css"

class Contador extends Component {
    render() {
        return (
            <div>
                <p>Soy el numero {this.props.inicial}</p>
            </div>
        );

    }
}

export default Contador;