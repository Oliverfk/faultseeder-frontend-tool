import React, {Component, PropTypes} from 'react';
import UserLoginForm from './UserLoginForm';
import { browserHistory } from 'react-router';
import _ from 'lodash';

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userName: '',
      passWord: '',
      submitted: false,
      emptyChecked: false,
      isPasswordShown: false
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.passWordLenValidation = this.passWordLenValidation.bind(this);
  }

  onValueChange(event) {
    event.preventDefault();
    const {id, value} = event.target;
    this.setState({[id]: value});
  }

  passWordLenValidation() {
    const {passWord} = this.state;
    const length = passWord.length;
    if (length >= 8) return 'success';
    else if (length < 8 && length > 0) return 'error';
    return null;
  }

  showPassword() {
    this.state.isPasswordShown ? this.setState({isPasswordShown: false}) : this.setState({isPasswordShown: true});
  }

  onLogin(event) {
    event.preventDefault();
    const {userName, passWord, emptyChecked} = this.state;
    this.setState({emptyChecked: true});
    if (!_.isEmpty(userName) && passWord.length >= 8) {
      this.setState({submitted: true});
      browserHistory.push(`/experiment/tool.faultSeeder/userId/${userName}`);
    }
    console.log("login");
  }

  render() {
    const {userName, passWord, submitted, emptyChecked,isPasswordShown} = this.state;
    return (
      <div className="col-sm-8 col-sm-offset-2">
        <UserLoginForm
          userName={userName}
          passWord={passWord}
          submitted={submitted}
          emptyChecked={emptyChecked}
          isPasswordShown={isPasswordShown}
          passWordLenValidation={this.passWordLenValidation()}
          onValueChange={this.onValueChange}
          showPassword={this.showPassword}
          onLogin={this.onLogin}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  userName: PropTypes.string,
  passWord: PropTypes.string,
  submitted: PropTypes.bool,
  isPasswordShown: PropTypes.bool,
  emptyChecked: PropTypes.bool,
  onValueChange: PropTypes.func,
  showPassword: PropTypes.func
};

export default LoginPage;
