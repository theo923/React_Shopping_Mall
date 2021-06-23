import React from 'react'
import Tracking from './Tracking';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

it('test for Tracking', () => {
    expect(shallow(<Tracking />)).toMatchSnapshot();
});