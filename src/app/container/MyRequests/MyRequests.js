import React from 'react';
import './MyRequests.css';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { setTrue, setFalse, updateInput, setValue } from '../../actions/MyReqtActions';
import RaisedRequests from '../RaisedRequests/RaisedRequests';
import ReceivedRequests from '../ReceivedRequests/ReceivedRequests';

class MyRequests extends React.Component {
    MyRequestsSection = () => {
        let requestSection =
            <section className="myRequests-section h100 w100">
                <div className="col-md-6 col-md-offset-3 myRequests-box-style">
                    <div className="row no-margin">
                        <h2 className="align-center">My Requests</h2>
                        <div className='col-md-8 col-md-offset-2'>
                            <div>
                                <button
                                    onClick={() => this.props.setTrue('showReceivedRequests')}
                                    className='btn w100'>View Received Requests </button>
                            </div>
                            <br />
                            <br />
                            <div>
                                <button
                                    onClick={() => this.props.setTrue('showRaisedRequests')}
                                    className='btn w100'>View Raised Requests </button>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </section>;

        return requestSection;
    };

    render() {
        return (
            <section className='myRequestsContainer-section'>
                {
                    (this.props.reqtReducer.showRaisedRequests) ?

                        (
                            <RaisedRequests {...this.props}/>
                        )
                        :
                        (
                            (this.props.reqtReducer.showReceivedRequests) ?
                                (
                                    <ReceivedRequests {...this.props}/>
                                )
                                :
                                (
                                    this.MyRequestsSection()
                                )
                        )

                }


            </section>

        );
    }

};

const mapStateToProps = (state) => {
    return {
        reqtReducer: state.reqtReducer,
        loginReducer: state.loginReducer,
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setTrue, setFalse, updateInput, setValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRequests);
