import React, { Component } from "react";
import api from "../../services/api";

import "./style.css";

export default class Main extends Component {
    state = {
        products: [],
        productInfo: [],
        page: 1,
    }

    componentDidMount() {
        this.carregarProdutos();
    }

    carregarProdutos = async () => {
        const response = await api.get('/products')

        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo })


        console.log(response);
    }

    prevPage = () => {}

    nextPage = () => {

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
                <div className="actions">
                    <button onClick={this.prevPage}>Anterios</button>
                    <button onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        );
    }
}
