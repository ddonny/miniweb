import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'components/Tabbing/index.scss';
// alias component B-2
class ContentB extends Component {
  render() {
    const {
      inputNameValue
    } = this.props.globalReducer;
    return (
      <div className="sub-tab-content">
        <div>
          Hi
        </div>
        <div className="name-called">
          {inputNameValue}
        </div>
        <div>
          this service B-2 calling your name
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
})

ContentB.propTypes = {
  globalReducer: PropTypes.any,
  dispatch: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentB);
