import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter'
import DisplayData from './components/displaydata';
import { Router, Route, Link, browserHistory } from 'react-router';


ReactDOM.render(<Counter  fp="footer" />, document.getElementById('root'));

// ReactDOM.render((
//     <Router >
//        <Route path = "/" component = {Counter}>
//           <Route path = "data" component = {DisplayData} />
//        </Route>
//     </Router>
//  ), document.getElementById('root'));


serviceWorker.register();
