import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* components */
import Home from 'components/Home';
import ListItem from 'components/ListItem';
import Tabbing from 'components/Tabbing';

class Body extends Component {
  render() {
    const {
      selectedFromListMenu
    } = this.props.globalReducer;
    return (
      <div className="content">
        {
          (selectedFromListMenu === 'nested_fragments') ?
          <Tabbing />
          :
          (selectedFromListMenu === 'list') ?
          <ListItem />
          :
          <Home />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
})

Body.propTypes = {
  globalReducer: PropTypes.any,
  dispatch: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
