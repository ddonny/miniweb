import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.scss';
import {
  Row,
  Col
} from 'react-materialize'
/* components */
import Navbar from 'components/Navbar';
import Body from 'components/Body';
import LeftMenu from 'components/LeftMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Row className="body-content">
          <Col s={12} m={3} l={3} className="is-side">
            <LeftMenu />
          </Col>
          <Col s={12} m={9} l={9} className="is-main">
            <Body />
          </Col>
        </Row>     
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
})

App.propTypes = {
  globalReducer: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
