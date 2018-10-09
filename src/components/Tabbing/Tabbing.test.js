import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { setSelectedMenu, setInputNameValue, setPostData } from 'actions/globalActions';
import Tabbing from 'components/Tabbing/index';
import ContentA from 'components/Tabbing/contentA';
import ContentB from 'components/Tabbing/contentB';
const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore();
Enzyme.configure({ adapter: new Adapter() })
const Provider = require('react-redux').Provider;
const createStore = require('redux').createStore;
const props = {
  globalReducer: {
    selectedFromListMenu: 'home',
    inputNameValue: 'myname',
    postData: []
  }
};
describe('Tabbing test', function () {
  beforeEach(() => {
    jest.setTimeout(5000);
  });
  it('Tabbing', (done) => {
    const store = mockStore(props)
    const context = { store };
    const wrapper = mount(
        <Tabbing/>,
        { context },
      );
    // expect(wrapper).toMatchSnapshot();
    let findText = wrapper.find('h3').text();
    // expect(true).toBeTruthy();
    expect(findText).toEqual('Content from Service B');
    done()
  })
  it('Tabbing tab A', (done) => {
    const store = mockStore(props)
    const context = { store };
    const wrapper = mount(
        <ContentA/>,
        { context },
      );
    let findText = wrapper.find('.name-called').text();
    // expect(true).toBeTruthy();
    expect(findText).toEqual(props.globalReducer.inputNameValue);
    done()
  })
  it('Tabbing tab B', (done) => {
    const store = mockStore(props)
    const context = { store };
    const wrapper = mount(
        <ContentB/>,
        { context },
      );
    let findText = wrapper.find('.name-called').text();
    // expect(true).toBeTruthy();
    expect(findText).toEqual(props.globalReducer.inputNameValue);
    done()
  })
});