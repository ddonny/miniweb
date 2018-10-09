import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Tabs,
  Tab
} from 'react-materialize'
import 'components/Tabbing/index.scss';
import ContentA from 'components/Tabbing/contentA.js';
import ContentB from 'components/Tabbing/contentB.js';
// alias component B
class Tabbing extends Component {
  render() {
    return (
      <div className="tab-content">
        <h3>
          Content from Service B
        </h3>
        <Tabs className='tabbing-collection z-depth-1'>
            <Tab title="B-1 Tab" active className="b1 tab-col">
              <ContentA />
            </Tab>
            <Tab title="B-2 Tab" className="b2 tab-col">
              <ContentB />
            </Tab>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
})

Tabbing.propTypes = {
  globalReducer: PropTypes.any,
  dispatch: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabbing);
