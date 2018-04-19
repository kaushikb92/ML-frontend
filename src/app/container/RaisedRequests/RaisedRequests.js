
import React from 'react';
import './RaisedRequests.css';
import 'font-awesome/css/font-awesome.css';
import classNames from 'classnames';
import { UserReqCon, web3 } from '../../common/Constants';

export default class RaisedRequests extends React.Component {

  componentWillMount() {
    debugger;
    var data = [];
    let requests = UserReqCon.getReceiptIdsForBorrower(this.props.loginReducer.userId);
 console.log(requests);
    for (var i = 0; i < requests.length; i++) {
      var element = UserReqCon.getReceiptByReceptId(requests[i]);
      console.log(element);
      data.push({
          borrowerId: web3.toAscii(element[4]),
          amt: element[0].c[0],
          roi: element[1].c[0],
          ts: element[6].c[0],
          status: element[5],
        });
    }

    this.props.setValue({ setFor: 'raisedRequestsList', setVal: data });
  }

  RaisedRequestsSection() {
    let RaisedRequestsContainer = (
        <section className="row no-margin">
                <div className="row no-margin">
                    <div className="col-md-11">
                        <h3 className='no-margin'>Raised Requests List</h3>
                    </div>
                      <div className="col-md-1">
                        <button
                    onClick={() => this.props.setFalse('showRaisedRequests')}
                    className="btn">Go back</button>
                    </div>
                </div>
                <br />
                <div className="col-md-12">
                    <table className="table table-bordered table-hover table-responsive table-position">
                        <thead>
                            <tr>
                                <th>Lender ID</th>
                                <th>Amount</th>
                                <th>Rate Of Interest</th>
                                <th>Timestamp</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                (this.props.reqtReducer.raisedRequestsList.map((details, i) => {
                                    return (
                                       <tr key={i}>
                                            <td>{details.borrowerId}</td>
                                            <td className='align-right'>{details.amt}</td>
                                            <td className='align-right'>{details.roi}</td>
                                            <td className='align-right'>{(details.ts).toLocaleString()}</td>
                                             <td>Pending</td>
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
    return RaisedRequestsContainer;
  };

  render() {
    return (
        <section className="RaisedRequests-section">
                {this.RaisedRequestsSection()}
            </section>
    );
  }
}
