import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import Start from './Start';

describe('Start Page', () => {
  it('should render page tile as H1 with text', () => {
    const route = { pageTitle: "Test Start page title" }
    const wrapper = mount(<Start route={route} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});