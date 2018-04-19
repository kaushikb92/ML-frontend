export const studentEnroll = {
  firstName: '',
  middleName: '',
  lastName: '',
  fatherName: '',
  dob: '',
  gender: 'male',
  mobile: '',
  email: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  pincode: '',
  remarks: '',
  pending: false,
};

export const Login = {
  userId: '',
  password: '',
  role: undefined,
};

export const LenderData = {
  lenderList: [],
  showLendMoneyModal: false,
  showBorrowMoneyModal: false,
  selectedLender: {},

  //Add Loan Modal params
  loanAmount: '',
  interest: '',

  //Borrow loan Modal params
  borrowAmount: '',
  tenure: '',
};

export const TxData = {
  transactionList: [],
  showLoansTransactions: false,
};

export const appLoanData = {
  approvedLoansList:[],
};

export const RequestsData = {
  showRaisedRequests: false,
  showRaisedRequests: false,
  receivedRequestsList: [],
  raisedRequestsList: [],
};
