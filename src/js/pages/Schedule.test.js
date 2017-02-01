import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import Schedule from './Schedule';

describe('Schedule Page', () => {
  it('should render page tile as H1 with text', () => {
    const route = { pageTitle: "Test Schedule page title" }
    const wrapper = mount(<Schedule route={route} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});