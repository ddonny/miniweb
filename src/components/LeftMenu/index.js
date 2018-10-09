import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Icon
} from 'react-materialize'
import { setSelectedMenu } from 'actions/globalActions';

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          key: 'home',
          label: 'Home'
        },
        {
          key: 'nested_fragments',
          label: 'Nested Fragments'
        },
        {
          key: 'list',
          label: 'List'
        }
      ],
      selected: 'home'
    }
  }

  selectMenu = (key) => {
    this.setState({
      selected: key
    }, () => {
      this.props.setSelectedMenu(key);
    });
  }
  
  render() {
    const {
      items,
      selected
    } = this.state;
    return (
      <ul className="left-menu">
        { items.map((item, index) =>
            <li className={(item.key === selected) ? 'sub-left-menu active' : 'sub-left-menu'} key={item.key} onClick={() => { this.selectMenu(item.key) }} onKeyPress={() => { this.selectMenu(item.key) }} role="presentation">
              <div className="label">{item.label}</div>
              <div className="right-icon">
                <Icon small>chevron_right</Icon>
              </div>
            </li>
          )
        }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setSelectedMenu: (payload) => dispatch(setSelectedMenu(payload))
})

LeftMenu.propTypes = {
  globalReducer: PropTypes.any,
  dispatch: PropTypes.any,
  setSelectedMenu: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);