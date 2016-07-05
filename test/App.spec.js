import mocha from 'mocha'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { mount, shallow } from 'enzyme'

import React from 'react'
import App from '../src/js/App'

chai.use(chaiEnzyme())

describe('<App />',() => {
  const wrapper = shallow(<App />);
  it('should write more tests', () =>{
    expect(wrapper)
  });
});
