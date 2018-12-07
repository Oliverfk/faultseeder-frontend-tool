/* eslint-disable import/default,import/namespace */
import React, {Component, PropTypes} from 'react';
import AppStyles from '../styles/global.css';

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
            {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <div className={AppStyles.container}>
              {this.props.children}
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
