import React, {Component, PropTypes} from 'react';
import {Button, Modal} from "react-bootstrap";

class DialogComponent extends Component {
  render() {
    const {onShow, onClose, onDo} = this.props;
    return (
      <div>
        <Modal show={onShow} onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Attention Dialog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure about this?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={onClose}>No</Button>
            <Button bsStyle="danger" onClick={onDo}>Yes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

DialogComponent.propTypes={
  onShow: PropTypes.bool,
  onClose: PropTypes.func,
  onDo: PropTypes.func
};

export default DialogComponent;
