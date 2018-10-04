import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Placemark } from 'react-yandex-maps';
import WaypointMark from '../src/components/WaypointMark';


describe('WaypointMark', () => {
  it('should render Placemark component inside of WaypointMark', () => {
    const waypointMark = shallow(<WaypointMark waypoint={waypoint} />);
    expect(waypointMark.containsMatchingElement(<Placemark />)).to.equal(true);
  });
});
