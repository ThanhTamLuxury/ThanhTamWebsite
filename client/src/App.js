import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {createBrowserHistory} from 'history'
import routes from './routes/routes';
import Footer from './components/Footer/Footer';
import { PrivateRoute } from './components/Common/PrivateRoute';
import decode from 'jwt-decode';
// export const history = createBrowserHistory()
export const history = createBrowserHistory()

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    {this.showContentMenus(routes)}
                    {/* <Footer/> */}
                </div>
            </Router>

        );
    }

    loggedIn = () => {
        // Checks if there is a saved token and it's still valid
        const token = localStorage.getItem('USER') // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired = (token) => {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return true;
        }
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    route.isPrivate ? 
                    <PrivateRoute
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        isAuthenticated={this.loggedIn()}
                    />
                    :
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;
