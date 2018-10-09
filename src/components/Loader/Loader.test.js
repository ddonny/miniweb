import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { setSelectedMenu, setInputNameValue, setPostData } from 'actions/globalActions';
import Loader from 'components/Loader';
const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore();
Enzyme.configure({ adapter: new Adapter() })
const Provider = require('react-redux').Provider;
const createStore = require('redux').createStore;
const props = {
  globalReducer: {
    selectedFromListMenu: 'home',
    inputNameValue: 'name',
    postData: []
  }
};
it('loader loaded', (done) => {
  let loader = shallow(
    <Loader />
  )
  expect(loader).toMatchSnapshot();
  done();
});