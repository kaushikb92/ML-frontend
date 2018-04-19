import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import './RequestMoneyModal.css';
import { browserHistory } from 'react-router';
import { UserReqCon, web3 } from '../../common/Constants';
import hashFnv32a from '../../common/hashFNV32a';
let regeneratorRuntime = require('regenerator-runtime');

export default class RequestMoneyModal extends React.Component {

  componentWillUnmount() {
    this.props.setValue({ setFor: 'borrowAmount', setVal: '' });
    this.props.setValue({ setFor: 'tenure', setVal: '' });
    this.props.setValue({ setFor: 'selectedLender', setVal: {} });
  }



  handleBorrow(e) {
    e.preventDefault();
    debugger;
    var t = Date.now();
    var ts = ((t).toString()).substring(10, 13);
    var ID = 'REQ' + ((hashFnv32a(ts, false)).toString()).substring(0, 5);
    this.submitReq(ID,t);
  }

  async submitReq(ID,t){
    var x = await UserReqCon.addRequest(this.props.lenderReducer.selectedLender.loanId,
    ID,
    this.props.lenderReducer.borrowAmount,
    this.props.lenderReducer.selectedLender.roi,
    this.props.lenderReducer.tenure,
    this.props.lenderReducer.selectedLender.lenderId,
    this.props.loginReducer.userId,
    t,
    {from: '0x3a2dcf216746a04acdfc97f991a815a4f5771603'}
    );
  }

  render() {
    return (
        <section className="RequestMoneyModal-section h100 w100">
                <div className="modal fade" id="RequestMoneyModal">
                    <div className="modal-dialog modal-md modal-style">
                        <form className="modal-content" onSubmit={(event)=>this.handleBorrow(event)}>
                            <div className="modal-header modal-heading">
                                <h4 className="modal-title">Request to borrow money</h4>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="borrowAmount">Amount:</label>
                                <input
                                type="number"
                                id="borrowAmount"
                                name="borrowAmount"
                                placeholder={'max(' + this.props.lenderReducer.selectedLender.amount + ')'}
                                max={this.props.lenderReducer.selectedLender.amount}
                                value={this.props.lenderReducer.borrowAmount}
                                onChange={(event) => this.props.updateInput(event)}
                            />
                                <label htmlFor="tenure">Tenure:</label><input
                                placeholder="(in months)"
                                type="number"
                                id="tenure"
                                name="tenure"
                                min='12'
                                value={this.props.lenderReducer.tenure}
                                onChange={(event) => this.props.updateInput(event)}
                            />
                                <br /><br />
                            </div>
                            <div className="modal-footer">
                                <button
                                type='submit'
                                disabled={
                                    (!(this.props.lenderReducer.borrowAmount && this.props.lenderReducer.tenure))
                                }
                                className="btn btn-primary">Submit</button>
                                <button onClick={() => this.props.setFalse('showBorrowMoneyModal')} className="btn">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section >
    );
  }

};
