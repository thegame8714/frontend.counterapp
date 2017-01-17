import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import PracticeFooter from './PracticeFooter';


describe('<PracticeFooter />', () => {
  it('should match snapshot', () => {
    const wrapper = mount(<PracticeFooter />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});