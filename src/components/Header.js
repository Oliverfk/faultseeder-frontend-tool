import React, {Component, PropTypes} from 'react';
import {Glyphicon, MenuItem, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {browserHistory} from "react-router";
class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.backToHome = this.backToHome.bind(this);
  }

  backToHome() {
    browserHistory.push(`/experiment/tool.login`);
  }

  render() {
    const {userName} = this.props;
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Fault Seeding System</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown
            eventKey={1}
            title={<div style={{display: "inline-block"}}><Glyphicon glyph="user" /> { userName}</div>}>
            <MenuItem eventKey={1.1} onClick={this.backToHome}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

Header.propTypes = {
  params: PropTypes.object,
  userName: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object,
  props: PropTypes.object
};

export default Header;
