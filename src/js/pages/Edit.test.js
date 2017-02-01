import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import Edit from './Edit';

describe('Edit Page', () => {
  it('should render page tile as H1 with text', () => {
    const route = { pageTitle: "Test Edit page title" }
    const wrapper = mount(<Edit route={route} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});