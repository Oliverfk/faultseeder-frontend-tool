/* eslint-disable import/namespace */
import React, {PropTypes} from 'react';
import {
  Col, Button, Checkbox, ControlLabel,
  Form, FormGroup, FormControl, InputGroup,
  Glyphicon, HelpBlock
} from 'react-bootstrap';
// eslint-disable-next-line import/default
import formStyles from '../styles/loginForm.css';

const UserLoginForm = props => {
  const {userName, passWord, submitted, emptyChecked, onValueChange, onLogin, showPassword,
    passWordLenValidation, isPasswordShown} = props;
  const passWordRequired = <HelpBlock>Password is required</HelpBlock>;
  const lengthValidation = (
    passWordLenValidation === 'error' ? <HelpBlock>Length should be at least 8 Characters</HelpBlock> : null);
  return (
    <div className="col-md-6 col-md-offset-3">
      <h2>Fault Seeding System</h2>
      <br/>
      <form name="form">
        <FormGroup controlId="userName" validationState={emptyChecked && !userName ? 'error' : null}>
          <ControlLabel>UserId</ControlLabel>
          <FormControl
            name={userName}
            type="text"
            value={userName}
            onChange={onValueChange}
            placeholder={'UserId'}
          />
          {emptyChecked && !userName && <HelpBlock>UserID is required</HelpBlock>}
        </FormGroup>

        <FormGroup controlId="passWord" validationState={emptyChecked && !passWord ? 'error' : passWordLenValidation}>
          <ControlLabel>Password</ControlLabel>
          <InputGroup>
            <FormControl
              name={passWord}
              type={isPasswordShown ? 'text' : 'password'}
              value={passWord}
              placeholder={'Password'}
              onChange={onValueChange}
            />
            <InputGroup.Button>
              <Button onClick={showPassword}>
                <Glyphicon glyph={isPasswordShown ? 'glyphicon glyphicon-eye-close' : 'glyphicon glyphicon-eye-open'}/>
              </Button>
            </InputGroup.Button>
          </InputGroup>
          {emptyChecked && !passWord ?  passWordRequired: lengthValidation}
        </FormGroup>
      </form>
        <Form inline>
          <Button
            bsStyle="primary"
            disabled={submitted}
            onClick={!submitted ? onLogin : null}
          >
            {submitted ? 'Login...' : 'Login'}
          </Button>
          <FormGroup>
            <Col>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>
        </Form>

    </div>
  );
};

UserLoginForm.propTypes = {
  userName: PropTypes.string,
  passWord: PropTypes.string,
  submitted: PropTypes.bool,
  isPasswordShown: PropTypes.bool,
  emptyChecked: PropTypes.bool,
  passWordLenValidation: PropTypes.string,
  onLogin: PropTypes.func,
  onValueChange: PropTypes.func,
  showPassword: PropTypes.func
};

export default UserLoginForm;
