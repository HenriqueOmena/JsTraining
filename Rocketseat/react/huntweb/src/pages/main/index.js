import React, { Component } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';

import "./style.css";

export default class Main extends Component {
    state = {
        products: [],
        pagination: [],
        page: 1,
    }

    componentDidMount() {
        this.carregarProdutos();
    }

    carregarProdutos = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`)

        const { docs, ...pagination } = response.data;

        this.setState({ products: docs, pagination, page })

        console.log(page);
    }

    prevPage = () => {
        const { page, pagination } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.carregarProdutos(pageNumber)
    }

    nextPage = () => {
        const { page, pagination } = this.state;

        if (page === pagination.pages) return;

        const pageNumber = page + 1;

        this.carregarProdutos(pageNumber);

    }

    render() {
        const { products } = this.state;
        return (
            <div className="product-list">
                {products.map( produto => (
                    <article key={produto._id}>
                        <strong>{produto.title}</strong>
                        <p>{produto.description}</p>
                        <Link to={`/produto/${produto._id}`} href="#">Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={ this.state.page === 1 } onClick={this.prevPage}>Anterios</button>
                    <button disabled={ this.state.page === this.state.pagination.pages } onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        );
    }
}
