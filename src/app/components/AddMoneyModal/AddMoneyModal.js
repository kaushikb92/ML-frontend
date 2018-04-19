import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import './AddMoneyModal.css';
import { browserHistory } from 'react-router';
import hashFnv32a from '../../common/hashFNV32a';
import { LenderListCon, LendCoinCon, web3 } from '../../common/Constants';
let regeneratorRuntime = require('regenerator-runtime');
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default class AddMoneyModal extends React.Component {

  componentWillUnmount() {
    this.props.setValue({ setFor: 'loanAmount', setVal: '' });
    this.props.setValue({ setFor: 'interest', setVal: '' });
  }

  handleLend(event) {
    event.preventDefault();
    let amt = this.props.lenderReducer.loanAmount;
    let roi = this.props.lenderReducer.interest;
    var ts = ((Date.now()).toString()).substring(10, 13);
    var ID = 'LOAN' + ((hashFnv32a(ts, false)).toString()).substring(0, 4);
    this.generateLendCoin(ID);
  }

  async generateLendCoin(ID) {
    var tx1 = await LendCoinCon.addCoin(this.props.lenderReducer.loanAmount,
    ID,
    this.props.loginReducer.userId,
    { from: web3.eth.accounts[0] });
    this.addToList(ID);
  }

  async addToList(ID) {
    var tx2 = await LenderListCon.addLender(
        this.props.loginReducer.userId,
        this.props.lenderReducer.interest,
        ID, { from: web3.eth.accounts[0] });
    NotificationManager.success('Money to lend added successfully', 'Success!', 2000);
    setTimeout(function () {
      this.props.setFalse('showLendMoneyModal');
    }, 2100);
  }

  render() {
    return (
        <section className="AddMoneyModal-section h100 w100">
                <div className="modal fade" id="AddMoneyModal">
                    <div className="modal-dialog modal-md modal-style">
                        <form className="modal-content " onSubmit={(event)=>this.handleLend(event)}>
                            <div className="modal-header modal-heading">
                                <h4 className="modal-title">Add Money To Lend</h4>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="loan-amt">Amount:</label>
                                <input
                                type="number"
                                id="loan-amt"
                                name="loanAmount"
                                value={this.props.lenderReducer.loanAmount}
                                onChange={(event) => this.props.updateInput(event)}
                            />
                            <br />
                                <label htmlFor="interest-price">Rate of Interest:</label>
                                <input
                                placeholder="%"
                                type="number"
                                id="interest"
                                min='1'
                                maxLength='2'
                                minLength='2'
                                name="interest"
                                value={this.props.lenderReducer.interest}
                                onChange={(event) => this.props.updateInput(event)}
                            />
                                <br /><br />
                            </div>
                            <div className="modal-footer">
                                <button
                                disabled={
                                    (!(this.props.lenderReducer.loanAmount && this.props.lenderReducer.interest))
                                }
                                type='submit'
                                className="btn btn-primary">Lend</button>
                                <button
                                onClick={() => this.props.setFalse('showLendMoneyModal')}
                                className="btn">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
                 <NotificationContainer />
            </section >
    );
  }

};
