import React from 'react';
import { shallow } from 'enzyme';
import LeapYear from '../components/LeapYear';

describe('LeapYear Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LeapYear />);
  });

  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  
});
