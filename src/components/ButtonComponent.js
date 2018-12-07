import React, {Component, PropTypes} from 'react';
import {Button} from "react-bootstrap";

class ButtonComponent extends Component {
  render() {
    const {btnName, onBtnFuncChange} = this.props;
    return (
      <div style={{display: "inline-block"}}>
        <div style={{display: "inline-block", margin: '10px 65px 10px 65px'}}>
          <Button
            bsSize="large"
            onClick={onBtnFuncChange}
          >
            {btnName}
          </Button>
        </div>
      </div>
    );
  }
}

ButtonComponent.propTypes={
  btnName: PropTypes.string,
  onBtnFuncChange: PropTypes.func
};

export default ButtonComponent;
