import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

class FileUploadButton extends Component {
  render() {
    const {openFile} = this.props;
    return (
      <div className="file-inputs">
        <div style={{display: "inline-block"}}>
          <input
            type='file'
            id='file'
            accept='.java'
            className='input-file'
          /></div>
        <div style={{display: "inline-block"}}>
          <Button
            bsStyle="default"
            bsSize="small"
            onClick={openFile}
          > Open </Button>
        </div>
      </div>
    );
  }
}

FileUploadButton.propTypes = {
  openFile: PropTypes.func
};

export default FileUploadButton;
