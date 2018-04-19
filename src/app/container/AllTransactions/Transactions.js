import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTrue, setFalse, updateInput, setValue, alterBoolean } from '../../actions/TransactionActions';
import './Transactions.css';
import 'font-awesome/css/font-awesome.css';

class Transactions extends Component {
    LoansSection = () => {
        let LoansContainer = (
            <section className="row no-margin">
                <div className="col-md-12">
                    <table className="table table-bordered table-hover table-responsive table-position">
                        <thead>
                            <tr>
                                <th>Loan ID</th>
                                <th>Lender ID</th>
                                <th>Borrower ID</th>
                                <th>Amount</th>
                                <th>Rate of Interest</th>
                                <th>Tenure</th>

                            </tr>
                        </thead>
                        {/*<tbody>
                            {
                                (this.props.txReducer.transactionList.map((details, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>Coming soon</td>
                                            <td>{details.lenderId}</td>
                                            <td className='align-right'>{details.amount.toLocaleString()}</td>
                                            <td className='align-right'>{details.roi}</td>
                                            <td className='align-center'>
                                                <button
                                                    className='btn btn-sm btn-success'
                                                    onClick={() => this.props.setTrue('showBorrowMoneyModal')}>
                                                    Request Loan</button>
                                            </td>
                                        </tr>
                                    );
                                })
                                )

                            }
                        </tbody>*/}
                    </table>
                </div>
            </section>
        );
        return LoansContainer;
    }
    ApprovalsSection = () => {
        let TransactionsContainer = (
            <section className="row no-margin">
                <div className="col-md-12">
                    <table className="table table-bordered table-hover table-responsive table-position">
                        <thead>
                            <tr>
                                <th>Loan ID</th>
                                <th>Lender ID</th>
                                <th>Borrower ID</th>
                                <th>Amount</th>
                                <th>Rate of Interest</th>
                                <th>Tenure</th>

                            </tr>
                        </thead>
                        {/*<tbody>
                            {
                                (this.props.txReducer.transactionList.map((details, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>Coming soon</td>
                                            <td>{details.lenderId}</td>
                                            <td className='align-right'>{details.amount.toLocaleString()}</td>
                                            <td className='align-right'>{details.roi}</td>
                                            <td className='align-center'>
                                                <button
                                                    className='btn btn-sm btn-success'
                                                    onClick={() => this.props.setTrue('showBorrowMoneyModal')}>
                                                    Request Loan</button>
                                            </td>
                                        </tr>
                                    );
                                })
                                )

                            }
                        </tbody>*/}
                    </table>
                </div>
            </section>
        );
        return TransactionsContainer;
    };

    render() {
        return (
            <section className="Transactions-section">
                <div className="row no-margin">
                      
                    <div className="col-md-4">
                        <h3 className='no-margin'>Transactions List</h3>
                    </div>
                
                    <div className="col-md-3 col-md-offset-5">
                        <button className='btn btn-primary'
                        onClick={() => this.props.alterBoolean()}>
                            <i className="fa fa-refresh" />
                            {
                                this.props.txReducer.showLoansTransactions ?
                                ' Show Approval transactions'
                                :
                                ' Show Loan transactions'
                            }
                        </button>
                    </div>
                </div>
                <br/>
                {
                    this.props.txReducer.showLoansTransactions ?
                    (
                        this.LoansSection()
                    )
                    :
                    (
                        this.ApprovalsSection()
                    )
                }
            </section>
        );
    }
}
const mapStateToProps = (_state) => {
    let state = _state;
    return {
        txReducer: state.txReducer,
    };
};

const mapDispatchToProps = (_dispatch) => {
    let dispatch = _dispatch;
    return bindActionCreators({ setTrue, setFalse, updateInput, setValue, alterBoolean }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
