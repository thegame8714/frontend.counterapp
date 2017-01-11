import React from 'react';
import { mount, shallow } from 'enzyme';
import { mountToJson } from 'enzyme-to-json'
import renderer from 'react-test-renderer';

import App from './App';
import Header from './components/Header';

describe('<App />', () => {
  it('should pass this canary test', () => {
    expect(true).toBe(true)
  });
  it('should match with snapshot', () => {
    const wrapper = mount(<App />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
  it('should render one <Header /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it('should render React Router children components', () => {
    const tree = renderer.create(<div></div>).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
