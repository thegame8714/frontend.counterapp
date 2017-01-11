import React from 'react';
import { mount, shallow } from 'enzyme';
import { mountToJson } from 'enzyme-to-json'
import Header from './Header';

describe('<Header />', () => {
  it('should match snapshot', () => {
    const wrapper = mount(<Header />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  })
  it('should have one header tag', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('header').length).toBe(1);
  })
  it('should have bar class on header tag', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('header').hasClass('bar')).toBe(true);
  });
  it('should have three Links', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('Link').length).toBe(3);
  });
  it('should have one H1', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('h1').length).toBe(1);
  });
  it('should have CounterApp in H1', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('h1').text()).toBe('CounterApp');
  });

});