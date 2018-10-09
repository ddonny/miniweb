import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'components/Home/index.scss';
// alias service A
import {
  Input
} from 'react-materialize'
import { setInputNameValue } from 'actions/globalActions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.defaultLabelInputName = 'Name';
    this.state = {
      nameInputElemLabel: (props.globalReducer && props.globalReducer.inputNameValue) ? this.defaultLabelInputName : '',
      nameInputElemValue: (props.globalReducer && props.globalReducer.inputNameValue) ? props.globalReducer.inputNameValue : '',
      maxLimit: 50
    };
    this._refs = {};
  }
  nameInputElemOnChange = (e) => {
    const {
      maxLimit
    } = this.state;
    if ((e.target.value).length <= maxLimit) {
      this.setState({
        // [e.target.name]: e.target.value
        nameInputElemValue: e.target.value,
        nameInputElemLabel: ((e.target.value).length === 0) ? '' : this.defaultLabelInputName
      }, () => {
        this.props.setInputNameValue(this.state.nameInputElemValue)
      })
    }
  }
  render() {
    const {
      nameInputElemLabel,
      nameInputElemValue,
      maxLimit
    } = this.state;
    return (
      <div className="home-section">
          <h3 className="head-label">
            <div className="label">Welcome</div>
            <div className="name-input">{nameInputElemValue}</div>
          </h3>
          <div className="section-wrapper">
            <div className="info">
              This is your home page served by Service A
            </div>
            <div className="input-wrapper">
              <Input defaultValue={nameInputElemValue} className="nameInputElem" ref = {(inst) => this._refs[`nameInputElem`] = inst} placeholder="Name" label={nameInputElemLabel} onChange={this.nameInputElemOnChange} limit={maxLimit}/>
              <div className="counter-input">{nameInputElemValue.length} / {maxLimit}</div>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setInputNameValue: (payload) => dispatch(setInputNameValue(payload))
})

Home.propTypes = {
  globalReducer: PropTypes.any,
  dispatch: PropTypes.any,
  setInputNameValue: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
