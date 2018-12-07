import React, {Component, PropTypes} from 'react';
import AceEditor from 'react-ace';
import FileUploadButton from './FileUploadButton';
import 'brace/mode/java';
import 'brace/theme/github';
import ButtonComponent from "./ButtonComponent";
import Dialog from './DialogComponent';
let fileReader;

class Editor extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      originalCode: '',
      faultCode: '',
      cshow: false,
      rshow: false,
      dshow: false
    };
    this.openFile = this.openFile.bind(this);
    this.handleFileRead = this.handleFileRead.bind(this);
    this.onGenerate = this.onGenerate.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onClear = this.onClear.bind(this);
    this.handleCShow = this.handleCShow.bind(this);
    this.handleRShow = this.handleRShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDShow = this.handleDShow.bind(this);
  }

  handleClose() {
    this.setState({ cshow: false });
    this.setState({rshow:false});
  }

  handleCShow() {
    this.setState({ cshow: true });
  }
  handleDShow() {
    this.setState({ dshow: true });
  }

  handleRShow() {
    this.setState({rshow: true});
  }

  handleFileRead(e){
    const content = fileReader.result;
    this.setState({originalCode: content});
    this.setState({faultCode: content});
}

  openFile() {
    fileReader = new FileReader();
    fileReader.onloadend = this.handleFileRead;
    fileReader.readAsText(document.querySelector('input').files[0]);
  }

  componentDidMount(){
    console.log(this.state.faultCode);
  }

  onGenerate(){
    console.log("interface to backend, generate fault");
  }

  onUpdate(){
    console.log("interface to backend, update fault");
  }

  onDelete(){
    this.setState({dshow: false});
  }

  onReset(){
    const {originalCode} = this.state;
    this.setState({faultCode: originalCode});
    this.setState({rshow: false});
  }

  onClear(){
    this.setState({ faultCode: '' });
    this.setState({cshow: false});
  }


  render() {
    const {editorOnChange, onLoad} = this.props;
    return (
      <div>
        <div style={{display: "inline-block"}}>
          <h5> Choose the file to insert faults. <span style={{fontWeight: 'bold'}}>Please introduce only
        <span style={{color: 'red'}}> ONE</span> fault for each faulty version.</span></h5>
          <li>After modifying the code, press the
            <span style={{fontWeight: 'bold'}}>"Generate"</span> button to create a faulty version file
          </li>
          <li>To update, retrieve an existing fault from the list, modify the code and press the
            <span style={{fontWeight: 'bold'}}>"Update"</span> button
          </li>
          <li>
            To delete, retrieve an existing fault from the list and press the
            <span style={{fontWeight: 'bold'}}>"Delete"</span> button
          </li>
        </div>
        <div style={{display: "inline-block", marginLeft: "50px"}}>
          <FileUploadButton
            openFile={this.openFile}
          />
        </div>
        <div>
          <Dialog
            onShow={this.state.dshow}
            onClose={this.handleClose}
            onDo={this.onDelete}
          />
          <Dialog
            onShow={this.state.rshow}
            onClose={this.handleClose}
            onDo={this.onReset}
          />
          <Dialog
            onShow={this.state.cshow}
            onClose={this.handleClose}
            onDo={this.onClear}
          />
        </div>
        <div>
          <div style={{display: "inline-block"}}>
            <h4 style={{display: "inline-block"}}>List of faults:</h4>
            <AceEditor
              mode="java"
              theme="github"
              name="faults"
              onLoad={onLoad}
              onChange={editorOnChange}
              fontSize={14}
              width={190}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={"faults"}
              setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2
              }}/>
          </div>
          <div style={{display: "inline-block"}}>
            <div>
              <h3 style={{display: "inline-block"}}>*Enter Fault</h3>
              {" "}
              <h5 style={{display: "inline-block"}}>(Existing fault retrieved :)</h5>
            </div>
            <AceEditor
              mode="java"
              theme="monokai"
              name="editor"
              onLoad={onLoad}
              onChange={editorOnChange}
              fontSize={14}
              width={470}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={this.state.faultCode}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2
              }}/>
          </div>
          <div style={{display: "inline-block"}}>
            <h3 style={{display: "inline-block"}}>Original Code</h3>
            {" "}
            <h5 style={{display: "inline-block"}}> (Original file :)</h5>
            <AceEditor
              mode="java"
              theme="monokai"
              name="code"
              onLoad={onLoad}
              onChange={editorOnChange}
              fontSize={14}
              width={470}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              readOnly={true}
              value={this.state.originalCode}
              setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2
              }}/>
          </div>
        </div>
        <div>
          <ButtonComponent
            btnName={"Update"}
            onBtnFuncChange={this.onUpdate}
          ></ButtonComponent>
          <ButtonComponent
            btnName={"Generate"}
            onBtnFuncChange={this.onGenerate}
          ></ButtonComponent>
          <ButtonComponent
            btnName={"Delete"}
            onBtnFuncChange={this.handleDShow}
          ></ButtonComponent>
          <ButtonComponent
            btnName={"Reset"}
            onBtnFuncChange={this.handleRShow}
          ></ButtonComponent>
          <ButtonComponent
            btnName={"Clear"}
            onBtnFuncChange={this.handleCShow}
          ></ButtonComponent>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  editorOnChange: PropTypes.func,
  onLoad: PropTypes.func,
  handleFileRead: PropTypes.func,
  openFile: PropTypes.func,
  originalCode: PropTypes.string,
  faultCode: PropTypes.string,
  show: PropTypes.bool
};
export default Editor;
