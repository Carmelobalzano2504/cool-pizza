import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

import history from "./history";

import Layout from "./components/layout";
import LoginForm from "./components/auth/loginForm";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import Menu from "./components/menu";
import Cart from "./components/cart";


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path='/loginForm' exact component= {() => LoginForm}/>
            <Route path='/about' component={AboutUs}/>
            <Route path='/contact' component={ContactUs}/>
            <Route path='/menu' component={Menu}/>
            <Route path='/cart' component={Cart}/>
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
