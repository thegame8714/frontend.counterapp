import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import About from './About';

describe('About Page', () => {
  it('should render page tile as H1 with text', () => {
    const route = { pageTitle: "Test Page title" }
    const wrapper = mount(<About route={route} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});