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

  it('check input element', () => {
    expect(wrapper.find('input')).toBeTruthy();
  })

  it('check label element', () => {
    expect(wrapper.find('label')).toBeTruthy();
  })

  it('should return please enter valid year message, if 123 is passed', () => {
    let input = wrapper.find('input');
    input.simulate('change', {target: {value: 123}});

    const label = wrapper.find('label').text(); 
    expect(label).toBe('Plese enter valid year');
  });

  it('should return not leap year, if 2019 is passed', () => {
    let input = wrapper.find('input');
    input.simulate('change', {target: {value: 2019}});

    const label = wrapper.find('label').text(); 
    expect(label).toBe('Not a Leap year');
  });

  it('should return Leap year, if 2020 is passed', () => {
    let input = wrapper.find('input');
    input.simulate('change', {target: {value: 2020}});

    const label = wrapper.find('label').text(); 
    expect(label).toBe('Leap year');
  });
  
});
