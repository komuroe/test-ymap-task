import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Polyline } from 'react-yandex-maps';
import Wayline from '../src/components/Wayline';

describe('WayLine', () => {
  it('should render PolyLine inside of Wayline', () => {
    const wayline = shallow(<Wayline waypoints={emptyWaypointsSet} />);
    expect(wayline.containsMatchingElement(<Polyline />)).to.equal(true);
  });

  it('should render Wayline with 0 vertices', () => {
    const wayline = shallow(<Wayline waypoints={emptyWaypointsSet} />);
    expect(wayline.prop('geometry').coordinates.length).to.equal(0);
  });

  it('should render Wayline with 2 vertices', () => {
    const wayline = shallow(<Wayline waypoints={twoWaypointsSet} />);
    expect(wayline.prop('geometry').coordinates.length).to.equal(2);
  });
});
