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

  it('should display text field for getting year as input', () => {
    expect(wrapper.find('input')).toBeTruthy();
  })

  it('should display label to display output', () => {
    expect(wrapper.find('label')).toBeTruthy();
  })

  it('should return please enter valid year output, if 123 is passed', () => {
    let input = wrapper.find('input');
    input.simulate('change', {target: {value: 123}});

    const label = wrapper.find('label').text(); 
    expect(label).toBe('Plese enter valid year');
  });

  it('should return not leap year output, if 2019 is passed', () => {
    let input = wrapper.find('input');
    input.simulate('change', {target: {value: 2019}});

    const label = wrapper.find('label').text(); 
    expect(label).toBe('Not a Leap year');
  });

  it('should return Leap year output, if 2020 is passed', () => {
    let input = wrapper.find('input');
    input.simulate('change', {target: {value: 2020}});

    const label = wrapper.find('label').text(); 
    expect(label).toBe('Leap year');
  });
  
});
