import React from 'react';
import './NavigationBar.css';
import { Link, IndexLink } from 'react-router';

const NavBar = (props) => {
    let navBarSection =
        <section id="navBar-section">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header" id="navBarHeading">
                        <span>Micro Lending Platform</span>
                    </div>
                    {/*<ul className="nav navbar-nav">
                        <li><Link to="/" activeClassName="active" >Add Course</Link></li>
                        <li>
                            <Link to="/existingCourse" activeClassName="active">
                                Existing Courses
                            </Link>
                        </li>
                    </ul>*/}
                </div>
            </nav>
        </section>;

    return navBarSection;
  };

export default NavBar;
