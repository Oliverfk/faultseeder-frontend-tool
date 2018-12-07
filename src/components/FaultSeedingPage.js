import React, {Component, PropTypes} from 'react';
import Header from './Header';
import Editor from './Editor';

class FaultSeedingPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userName: this.props.params.userName
    };
    this.editorOnChange = this.editorOnChange.bind(this);
    this.onLoad = this.onLoad.bind(this);

  }

  onLoad() {
    console.log("onload");
  }

  editorOnChange(newValue) {
    console.log('change', newValue);
  }

  render() {
    const {userName} = this.state;
    return (
      <div>
        <Header
         userName={userName}
        ></Header>
        <Editor
          editorOnChange = {this.editorOnChange}
          onLoad = {this.onLoad}
        ></Editor>
      </div>
    );
  }
}

FaultSeedingPage.propTypes = {
  params: PropTypes.object,
  userName: PropTypes.string,
  match: PropTypes.object,
  location: PropTypes.object,
  props: PropTypes.object,
  editorOnChange: PropTypes.func,
  onLoad: PropTypes.func
};


export default FaultSeedingPage;
