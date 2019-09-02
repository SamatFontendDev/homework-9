// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина
import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import Login from '../Login';
import Search from '../Search';
import PrivateRoute from '../PrivateRoute';

class Router extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute path="/search" component={Search} />
                    <Route path="/login" component={Login} />
                    <Redirect from="*" to="/login" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;