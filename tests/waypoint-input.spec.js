import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';

import WaypointInput from '../src/components/WaypointInput';

describe('WaypointInput', () => {
  // Мыш - кродеться
  // инпут - рендериться :)
  it('should render text input', () => {
    const input = shallow(<WaypointInput />);
    expect(input.is('input')).to.equal(true);
  });

  it('should accept input', () => {
    const input = shallow(<WaypointInput />);
    input.simulate('change', { target: { value: 'point 1' } });
    expect(input.state('text')).to.equal('point 1');
  });

  it('should call addWaypoint when Enter key pressed', () => {
    const addWaypointSpy = spy();
    const input = shallow(<WaypointInput addWaypoint={addWaypointSpy} />);
    input.simulate('change', { target: { value: 'point of departure' } });
    input.simulate('keyDown', { key: 'Enter', currentTarget: { focus: () => {} } });
    expect(addWaypointSpy.calledOnce).to.equal(true);
    expect(addWaypointSpy.calledWith('point of departure')).to.equal(true);
  });
});