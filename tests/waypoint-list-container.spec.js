import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';

import WaypointsListContainer from '../src/components/WaypointsListContainer';
import WaypointsList from '../src/components/WaypointsList';
import WaypointItem from '../src/components/WaypointItem';

describe('WaypointsListContainer', () => {
  it('should render WaypointsList and WaypointItem inside of WaypointsListContainer', () => {
    const waypointsListContainer = mount(<WaypointsListContainer
      items={twoWaypointsSet}
      deleteWaypoint={() => {}}
      updateWaypointsOrder={() => {}}
    />);
    setTimeout(() => {
      expect(waypointsListContainer.containsAllMatchingElements([
        <WaypointsList />,
      ])).to.equal(true);
    }, 1000);
  });

  it('should render zero items', () => {
    const waypointsListContainer = mount(<WaypointsListContainer
      items={emptyWaypointsSet}
      deleteWaypoint={() => {}}
      updateWaypointsOrder={() => {}}
    />);
    expect(waypointsListContainer.find('li')).to.have.lengthOf(0);
  });

  it('should render some items', () => {
    const waypointsListContainer = mount(<WaypointsListContainer
      items={fewWaypointsSet}
      deleteWaypoint={() => {}}
      updateWaypointsOrder={() => {}}
    />);
    expect(waypointsListContainer.find('li')).to.have.lengthOf(3);
  });

  it('should call deleteWaypoint', () => {
    const deleteWaypointSpy = spy();
    const waypointsListContainer = mount(<WaypointsListContainer
      items={singleWaypointSet}
      deleteWaypoint={deleteWaypointSpy}
      updateWaypointsOrder={() => {}}
    />);
    waypointsListContainer.find('button').simulate('click');
    expect(deleteWaypointSpy.calledOnce).to.equal(true);
    expect(deleteWaypointSpy.calledWith('123')).to.equal(true);
  });
});
