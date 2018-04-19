
import React, { Component } from 'react';
import './ReceivedRequests.css';
import 'font-awesome/css/font-awesome.css';
import classNames from 'classnames';
import { UserReqCon, web3 } from '../../common/Constants';

export default class ReceivedRequests extends Component {
  componentWillMount() {
    debugger;
    var data = [];
    let requests = UserReqCon.getReceiptIdsForLender(this.props.loginReducer.userId);
   
    for (var i = 0; i < requests.length; i++) {
      var element = UserReqCon.getReceiptByReceptId(requests[i]);
      
      console.log(element);
      data.push({
          borrowerId: web3.toAscii(element[4]),
          amt: element[0].c[0],
          roi: element[1].c[0],
          ts: element[6].c[0]
        });
    }

    this.props.setValue({ setFor: 'receivedRequestsList', setVal: data });
  }

  ReceivedRequestsSection() {
    let ReceivedRequestsContainer = (
        <section className="row no-margin">
                <div className="row no-margin">
                    <div className="col-md-11">
                        <h3 className='no-margin'>Received Requests List</h3>
                    </div>
                    <div className="col-md-1">
                        <button
                    onClick={() => this.props.setFalse('showReceivedRequests')}
                    className="btn">Go back</button>
                    </div>
                </div>
                <br />
                <div className="col-md-12">
                    <table className="table table-bordered table-hover table-responsive table-position">
                        <thead>
                            <tr>
                                <th>Borrower ID</th>
                                <th>Amount</th>
                                <th>Rate Of Interest</th>
                                <th>Timestamp</th>
                                <th>Reputation</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (this.props.reqtReducer.receivedRequestsList.map((details, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{details.borrowerId}</td>
                                            <td className='align-right'>{details.amt}</td>
                                            <td className='align-right'>{details.roi}</td>
                                            <td className='align-right'>{(details.ts).toLocaleString()}</td>
                                             <td>3</td>
                                             <td>
                                                 <button className='btn btn-sm btn-success'>Approve</button>
                                             <button className='btn btn-sm btn-error'>Reject</button>
                                             </td>
                                        </tr>
                                    );
                                  })
                                )

                            }
                        </tbody>
                    </table>
                </div>
            </section>
    );
    return ReceivedRequestsContainer;
  };

  render() {
    return (
        <section className="ReceivedRequests-section">
                {this.ReceivedRequestsSection()}
            </section>
    );
  }
}
