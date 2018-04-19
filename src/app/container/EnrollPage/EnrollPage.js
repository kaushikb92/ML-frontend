import React from 'react';
import { InputBox } from '../../common/InputGroup/InputBox';
import { bindActionCreators } from 'redux';
import './EnrollPage.css';
import { connect } from 'react-redux';
import { updateInput, enrollStudent } from '../../actions/studentEnrolActions';

class EnrollPage extends React.Component {
  updateInput(event) {
    this.props.updateInput(event);
  }

  handleEnroll() {
    alert('success');
    let data = {
        firstName: this.props.studentReducer.firstName,
        middleName: this.props.studentReducer.middleName,
        lastName: this.props.studentReducer.lastName,
        fatherName: this.props.studentReducer.fatherName,
        dob: this.props.studentReducer.dob,
        gender: this.props.studentReducer.gender,
        mobile: this.props.studentReducer.mobile,
        email: this.props.studentReducer.email,
        addressLine1: this.props.studentReducer.addressLine1,
        addressLine2: this.props.studentReducer.addressLine2,
        city: this.props.studentReducer.city,
        state: this.props.studentReducer.state,
        pincode: this.props.studentReducer.pincode,
        remarks: this.props.studentReducer.remarks,
      };
    this.props.studentEnroll(data);
  }

  render() {
    return (
        <section id='sdntRed-section' className='container-fluid'>
                <div className='col-md-6 col-md-offset-3' id="form-div">
                    <form onSubmit={() => this.handleEnroll()}>
                        <h1 className='align-center'>
                            Student Enrollment Form
                        </h1>

                        <hr />

                        <div className="row no-margin">

                            <div className="col-md-4 no-padding">
                                <InputBox
                                required="required"
                                value={this.props.sdntRed.firstName}
                                label='First Name:'
                                name='firstName'
                                type='text'
                                placeholder='FirstName'
                                onChange={(event) => this.updateInput(event)} />
                            </div>

                            <div className="col-md-4 no-padding">
                                <InputBox
                                value={this.props.sdntRed.middleName}
                                label='Middle Name:'
                                name='middleName'
                                type='text'
                                placeholder='MiddleName(optional)'
                                onChange={(event) => this.updateInput(event)} />
                            </div>

                            <div className="col-md-4 no-padding">
                                <InputBox
                                required="required"
                                value={this.props.sdntRed.lastName}
                                label='Last Name:'
                                name='lastName'
                                type='text'
                                placeholder='LastName'
                                onChange={(event) => this.updateInput(event)} />
                            </div>

                        </div>

                        <div className="row no-margin">

                            <InputBox
                            required="required"
                            value={this.props.sdntRed.fatherName}
                            label='Father Name:'
                            name='fatherName'
                            type='text'
                            placeholder='FatherName'
                            onChange={(event) => this.updateInput(event)} />

                            <InputBox
                            required="required"
                            value={this.props.sdntRed.dob}
                            label='DOB:'
                            name='dob'
                            type='date'
                            placeholder='Date of Birth'
                            onChange={(event) => this.updateInput(event)} />

                            <div className="row no-margin">

                                <label htmlFor="male">male</label>
                                <input
                                className="radioInput"
                                checked={this.props.sdntRed.gender === 'male'}
                                value='male'
                                name='gender'
                                type='radio'
                                onChange={(event) => this.updateInput(event)} />

                                <label htmlFor="female">female</label>
                                <input
                                className="radioInput"
                                checked={this.props.sdntRed.gender === 'female'}
                                value='female'
                                name='gender'
                                type='radio'
                                onChange={(event) => this.updateInput(event)} />

                            </div>

                            <InputBox
                            required="required"
                            value={this.props.sdntRed.mobile}
                            label='Mobile:'
                            name='mobile'
                            maxLength='10'
                            minLength='10'
                            type='number'
                            placeholder='mobile'
                            onChange={(event) => this.updateInput(event)} />

                            <InputBox
                            required="required"
                            value={this.props.sdntRed.email}
                            label='Email:'
                            name='email'
                            type='email'
                            placeholder='Email-Id'
                            onChange={(event) => this.updateInput(event)} />

                            <InputBox
                            required="required"
                            value={this.props.sdntRed.addressLine1}
                            label='Address Line-1:'
                            name='addressLine1'
                            type='text'
                            placeholder='Address:(Line1)'
                            onChange={(event) => this.updateInput(event)} />

                            <InputBox
                            value={this.props.sdntRed.addressLine2}
                            label='Address Line-2:'
                            name='addressLine2'
                            type='text'
                            placeholder='Address:(Line2) (optional)'
                            onChange={(event) => this.updateInput(event)} />

                            <InputBox
                            required="required"
                            value={this.props.sdntRed.city}
                            label='City:'
                            name='city'
                            type='text'
                            placeholder='City Name'
                            onChange={(event) => this.updateInput(event)} />
                            <InputBox
                            required="required"
                            value={this.props.sdntRed.state}
                            label='State:'
                            name='state'
                            type='text'
                            placeholder='State Name'
                            onChange={(event) => this.updateInput(event)} />

                            <InputBox
                            required="required"
                            value={this.props.sdntRed.pincode}
                            label='Pincode:'
                            name='pincode'
                            type='number'
                            maxLength='6'
                            minLength='6'
                            placeholder='Pincode'
                            onChange={(event) => this.updateInput(event)} />
                        </div>

                        <label htmlFor="remarks">Remarks:</label>
                        <textarea rows="4" cols="85" name='remarks' id='remarks'
                        value={this.props.sdntRed.remarks}
                        maxLength="50"
                        placeholder="Enter your remarks here... (max 50 characters)"
                        onChange={(event) => this.updateInput(event)} >
                        </textarea>
                        
                        <div className="row no-margin">
                            <button
                            className="btn btn-primary col-md-3 col-md-offset-4"
                            type="submit"
                        >Enroll</button>

                        </div>

                        <br />
                    </form>
                </div>
            </section >
    );
  }
}
const mapStateToProps = (_state) => {
    let state = _state;
    return {
        sdntRed: state.studentReducer,
      };
  };

const mapDispatchToProps = (_dispatch) => {
    let dispatch = _dispatch;
    return bindActionCreators({ updateInput, enrollStudent }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(EnrollPage);
