import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import PageHeading from './PageHeading';

describe('PageHeading', () => {
  it('should render page tile as H1 with text', () => {
    const route = {
      object: "this.props.route",
      path: "pageTitle",
      value: "Heading Value"
    }
    const wrapper = mount(<PageHeading route={route} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});