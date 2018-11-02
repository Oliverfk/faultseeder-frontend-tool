/* eslint-disable import/default,import/namespace */
import React, {Component, PropTypes} from 'react';
import AppStyles from '../styles/global.css';

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <div className={AppStyles.container}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
