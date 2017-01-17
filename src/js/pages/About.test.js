import React from 'react';
import { mount } from 'enzyme';

import About from './About';

describe('About Page', () => {
  it('should render H1 with text', () => {
    const wrapper = mount(<About pageTitle="page title" />);
    const pageHeading = wrapper.find('h1')
    expect(pageHeading).toHaveLength(1);
    expect(pageHeading.text()).toEqual('page title');

  })
});