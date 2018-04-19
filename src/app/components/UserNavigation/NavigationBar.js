import React from 'react';
import './NavigationBar.css';
import { Link, IndexLink } from 'react-router';
import 'font-awesome/css/font-awesome.css';

const NavBar = (props) => {
    let navBarSection =
        <section id="userNavBar-section">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header" id="navBarHeading">
                        <span>Micro Lending Platform</span>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><IndexLink to="/userHome" activeClassName="active">
                        <i className='fa fa-home'/> Home</IndexLink></li>
                        <li>
                            <Link to="/myRequests" activeClassName="active">
                                <i className="fa fa-handshake-o"/> My Requests
                            </Link>
                        </li>
                        <li>
                            <Link to="/approvedLoans" activeClassName="active">
                                <i className="fa fa-check-square"/> Approved Loans
                            </Link>
                        </li>
                         <li>
                            <Link to="/myTransactions" activeClassName="active">
                                <i className="fa fa-exchange"/> All Transactions
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>;

    return navBarSection;
  };

export default NavBar;
