import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import LeapYear from '../components/LeapYear';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should load LeapYear component', () => {
    expect(wrapper.find(LeapYear)).toBeDefined();
  })

});
