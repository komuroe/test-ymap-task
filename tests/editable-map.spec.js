import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';

import { YMaps, Map } from 'react-yandex-maps';
import EditableMap from '../src/components/EditableMap';
import Wayline from '../src/components/Wayline';
import WaypointMark from '../src/components/WaypointMark';

describe('EditableMap', () => {
  const mapState = {
    center: [55.030199, 82.920430],
    zoom: 10,
    controls: [],
  };
  const mapSize = {
    height: '100%',
    width: '100%',
  };
  const updateWaypointCoordsSpy = spy();
  const registerMapCenterGetterSpy = spy();
  const updateWaypointAddrSpy = spy();


  it('should render Ymaps, Map and Wayline', () => {
    const editableMap = mount(
      <EditableMap
        waypoints={emptyWaypointsSet}
        mapState={mapState}
        mapSize={mapSize}
        updateWaypointCoords={updateWaypointCoordsSpy}
        updateWaypointAddr={updateWaypointAddrSpy}
        registerMapCenterGetter={registerMapCenterGetterSpy}
      />,
    );
    // a tiny hack just to wait until all the components are mounted
    setTimeout(() => {
      expect(editableMap.containsAllMatchingElement([
        <YMaps />,
        <Map />,
        <Wayline />,
      ])).to.equal(true);
    }, 500);
  });

  it('should render a few points on the map', () => {
    const editableMap = mount(
      <EditableMap
        waypoints={twoWaypointsSet}
        mapState={mapState}
        mapSize={mapSize}
        updateWaypointCoords={updateWaypointCoordsSpy}
        updateWaypointAddr={updateWaypointAddrSpy}
        registerMapCenterGetter={registerMapCenterGetterSpy}
      />,
    );
    setTimeout(() => {
      expect(editableMap.find(<WaypointMark />).length).to.equal(2);
    }, 200);
  });

});
