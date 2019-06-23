import React, { Component } from "react";
import api from "../../services/api";

import "./style.css";

export default class Main extends Component {
    state = {
        products: [],

    }

    componentDidMount() {
        this.carregarProdutos();
    }

    carregarProdutos = async () => {
        const response = await api.get('/products')

        console.log(response.data.docs);
        this.setState({products: response.data.docs})
    }

    render() {
        const { products } = this.state;
        return (
            <div className="product-list">
                {products.map( produto => (
                    <article key={produto._id}>
                        <strong>{produto.title}</strong>
                        <p>{produto.description}</p>
                        <a href="#">Acessar</a>

                    </article>
                ))}
            </div>

        );
    }
}
