import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main';
import Produto from './pages/produto';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Main } />
            <Route path="/produto/:id" component={ Produto } />
        </Switch>
    </BrowserRouter>
);

export default Routes;

