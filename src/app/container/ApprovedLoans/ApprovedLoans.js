import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTrue, setFalse, updateInput, setValue } from '../../actions/TransactionActions';
import './ApprovedLoans.css';
import 'font-awesome/css/font-awesome.css';

class ApprovedLoans extends Component {

    ApprovedLoansSection = () => {
        let ApprovedLoansContainer = (
            <section className="row no-margin">
                <div className="row no-margin">
                    <div className="col-md-12">
                        <h3 className='no-margin'>Approved Loans List</h3>
                    </div>
                </div>
                <br/>
                <div className="col-md-12">
                    <table className="table table-bordered table-hover table-responsive table-position">
                        <thead>
                            <tr>
                                <th>Loan ID</th>
                                <th>Lender ID</th>
                                <th>Rate of Interest</th>
                                <th>Tenure(in months)</th>
                                <th>Amount</th>
                                <th>EMI</th>
                                <th>EMI Due Date</th>
                                <th>Pay EMI</th>
                            </tr>
                        </thead>
                        {/*<tbody>
                            {
                                (this.props.appLoanRed.transactionList.map((details, i) => {
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
        return ApprovedLoansContainer;
    };

    render() {
        return (
            <section className="ApprovedLoans-section">
                {this.ApprovedLoansSection()}
            </section>
        );
    }
}
const mapStateToProps = (_state) => {
    let state = _state;
    return {
        appLoanRed: state.appLoanRed,
    };
};

const mapDispatchToProps = (_dispatch) => {
    let dispatch = _dispatch;
    return bindActionCreators({ setTrue, setFalse, updateInput, setValue }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ApprovedLoans);
