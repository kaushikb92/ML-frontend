import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavigationBar/NavigationBar';
import Login from './Login/Login';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid no-padding">
        <NavBar />
        <Login />
      </div>
    );
  }
}

export default App;
