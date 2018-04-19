import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setTrue, setFalse, updateInput, setValue } from '../../actions/LenderActions';
import './LenderList.css';
import AddMoneyModal from '../../components/AddMoneyModal/AddMoneyModal';
import RequestMoneyModal from '../../components/RequestMoneyModal/RequestMoneyModal';
import { LenderListCon, LendCoinCon, web3 } from '../../common/Constants';
import 'font-awesome/css/font-awesome.css';

class LenderList extends Component {

    componentWillMount() {
        let lendersList = LenderListCon.getAllLenderList();
        let data = [];
        for (let i = 0; i < lendersList[0].length; i++) {
            var amt = LendCoinCon.getBalance(lendersList[1][i],lendersList[0][i]);
            data.push({
                loanId: web3.toAscii(lendersList[0][i]),
                lenderId: web3.toAscii(lendersList[1][i]),
                amount: amt.c[0],
                roi: lendersList[2][i].c[0],
            });
        };

        this.props.setValue({ setFor: 'lenderList', setVal: data });
    };
    handleRequest(details) {
        this.props.setValue({setFor:'selectedLender',setVal: details});
        this.props.setTrue('showBorrowMoneyModal');
    }

    LenderListSection = () => {
        let LenderListContainer = (
            <section className="row no-margin">
                <div className="row no-margin">
                    <div className="col-md-8">
                        <h3 className='no-margin'>Lenders List</h3>
                    </div>
                    <div className="col-md-4">
                        <button
                            onClick={() => this.props.setTrue('showLendMoneyModal')}
                            className="btn btn-primary pull-right">
                            <i className='fa fa-money'/> Lend Money</button>
                    </div>
                </div>
                <br />
                <div className="col-md-12">
                    <table className="table table-bordered table-hover table-responsive table-position">
                        <thead>
                            <tr>
                                <th>Loan ID</th>
                                <th>Lender ID</th>
                                <th>Amount</th>
                                <th>Rate of Interest</th>
                                <th>Request Loan</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                (this.props.lenderReducer.lenderList.map((details, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{details.loanId}</td>
                                            <td>{details.lenderId}</td>
                                            <td className='align-right'>{details.amount.toLocaleString()}</td>
                                            <td className='align-right'>{details.roi}</td>
                                            <td className='align-center'>
                                                <button
                                                    className='btn btn-sm btn-success'
                                                    onClick={() => this.handleRequest(details)}>
                                                    Request Loan</button>
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
        return LenderListContainer;
    };

    render() {
        return (
            <section className="lenderList-section">
                {
                    (this.props.lenderReducer.showLendMoneyModal) ?
                        (
                            <div>
                                <AddMoneyModal updateInput={this.props.updateInput}
                                    setFalse={this.props.setFalse}
                                    lenderReducer={this.props.lenderReducer}
                                    setValue={this.props.setValue}
                                    {...this.props}
                                />
                                {this.LenderListSection()}
                            </div>
                        )
                        :
                        (
                            (this.props.lenderReducer.showBorrowMoneyModal) ?
                                (
                                    <div>
                                        <RequestMoneyModal
                                            {...this.props}
                                        />
                                        {this.LenderListSection()}
                                    </div>
                                )
                                :
                                (
                                    this.LenderListSection()

                                )
                        )

                }
            </section>
        );
    }
}
const mapStateToProps = (_state) => {
    let state = _state;
    return {
        lenderReducer: state.lenderReducer,
        loginReducer: state.loginReducer,

    };
};

const mapDispatchToProps = (_dispatch) => {
    let dispatch = _dispatch;
    return bindActionCreators({ setTrue, setFalse, updateInput, setValue }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LenderList);
