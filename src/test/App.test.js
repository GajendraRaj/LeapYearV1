import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
