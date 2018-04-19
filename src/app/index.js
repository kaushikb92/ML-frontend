import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//Layouts
import App from './container/App';
import UserHome from './container/UserHome/UserHome';
import LenderList from './container/LenderList/LenderList';
import './index.css';
import 'react-notifications/lib/notifications.css';
import MyRequests from './container/MyRequests/MyRequests';
import Transactions from './container/AllTransactions/Transactions';
import ApprovedLoans from './container/ApprovedLoans/ApprovedLoans';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App} />
            <Route path='/userHome' component={UserHome}>
                <IndexRoute component={LenderList} />
                <Route path='/myRequests' component={MyRequests} />                
                <Route path='/myTransactions' component={Transactions} />                
                <Route path='/approvedLoans' component={ApprovedLoans} />                
            </Route>
        </Router>
    </Provider>, window.document.getElementById('app'));
