import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { setSelectedMenu, setInputNameValue, setPostData } from 'actions/globalActions';
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
it('renders without crashing', (done) => {
  const store = mockStore(props)
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>
    , div);
    ReactDOM.unmountComponentAtNode(div);   
    done();
});

it('dispatch setSelectedMenu', (done) => {
  const expectedState = [
    {
      'type': 'SET_SELECTED_MENU',
      'selectedFromListMenu': props.globalReducer.selectedFromListMenu
    }
  ];
  
  const store = mockStore(props)

  store.dispatch(setSelectedMenu(props.globalReducer.selectedFromListMenu))
  expect(store.getActions()).toEqual(expectedState);
  done();
}); 

it('dispatch setInputNameValue', (done) => {
  const expectedState = [
    {
      'type': 'SET_INPUT_VALUE',
      'inputNameValue': props.globalReducer.inputNameValue
    }
  ];
  
  const store = mockStore(props)

  store.dispatch(setInputNameValue(props.globalReducer.inputNameValue))
  expect(store.getActions()).toEqual(expectedState);
  done();
}); 

it('dispatch setPostData', (done) => {
  const expectedState = [
    {
      'type': 'SET_POST_DATA',
      'postData': props.globalReducer.postData
    }
  ];
  
  const store = mockStore(props)

  store.dispatch(setPostData(props.globalReducer.postData))
  expect(store.getActions()).toEqual(expectedState);
  done();
}); 