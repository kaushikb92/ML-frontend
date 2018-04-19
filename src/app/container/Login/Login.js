import React, { Component } from 'react';
import './Login.css';
import { updateInput, resetLoginForm, setValue } from '../../actions/LoginActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { web3, UserCon } from '../../common/Constants';
import { browserHistory } from 'react-router';

class Login extends Component {
  handleLogin(event) {
    event.preventDefault();
    let loginStatus = UserCon.getLogin(this.props.loginReducer.userId, this.props.loginReducer.password);

    if (loginStatus) {
      this.props.setValue({ setFor: 'password', setVal: '' });
      this.props.setValue({ setFor: 'role', setVal: 'USER' });
      browserHistory.push('/userHome');
    } else {
      NotificationManager.error('UserId or password is wrong', 'Login Failed!', 2000);
    }
  }

  render() {
    return (
        <section className="login-section h100 w100">

                <div className="col-md-10">
                </div>
                <div className="col-md-4 col-md-offset-4 loginBox">
                    <form
                    method='POST'
                    onSubmit={(event) => this.handleLogin(event)} id='login-form'>
                        <h1 className='align-center'>Login Form</h1>
                        <br />
                        <div className='grid'>
                            <span className='glyphicon glyphicon-user' />
                            <input
                            required="required"
                            minLength='8'
                            maxLength='8'
                            value={this.props.loginReducer.userId}
                            name='userId'
                            type='text'
                            placeholder='Please enter UserId'
                            onChange={(event) => this.props.updateInput(event)} />
                        </div>
                        <br />
                        <div className='grid'>
                            <span className='glyphicon glyphicon-lock' />
                            <input
                            required="required"
                            value={this.props.loginReducer.password}
                            name='password'
                            type='password'
                            placeholder='Please enter password'
                            onChange={(event) => this.props.updateInput(event)} />
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-6 col-md-offset-4">
                                <button
                                type='submit'
                                className="btn btn-success">
                                    <span className='glyphicon glyphicon-ok' />
                                </button>
                                <button
                                onClick={() => this.props.resetLoginForm()}
                                type='reset'
                                className="btn btn-danger col-md-offset-1">
                                    <span className='glyphicon glyphicon-remove' />
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
                <NotificationContainer />
            </section>
    );
  }
}
const mapStateToProps = (_state) => {
    let state = _state;
    return {
        loginReducer: state.loginReducer,
      };
  };

const mapDispatchToProps = (_dispatch) => {
    let dispatch = _dispatch;
    return bindActionCreators({ updateInput, resetLoginForm, setValue }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
