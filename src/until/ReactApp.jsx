import React from 'react'
import ReactDom from 'react-dom'
import Router from 'react-router-dom/Router';
import {history} from '../router/History';
import routes from '../router/Routers';


ReactDom.render(
    <Router history={history}>
        {routes}
    </Router>
    ,document.getElementById('content'));